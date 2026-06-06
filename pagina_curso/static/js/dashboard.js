const storageKey = "gestionMantenimientoLocal";

const defaults = {
    tickets: [],
    assets: [],
    tasks: [],
};

const readState = () => {
    try {
        return { ...defaults, ...JSON.parse(localStorage.getItem(storageKey)) };
    } catch {
        return { ...defaults };
    }
};

const writeState = (state) => {
    localStorage.setItem(storageKey, JSON.stringify(state));
};

const labelMap = {
    tickets: {
        empty: "No hay solicitudes guardadas.",
        title: (item) => item.requester,
        meta: (item) => `${item.priority} - ${item.status}`,
        body: (item) => item.detail,
    },
    assets: {
        empty: "No hay equipos registrados.",
        title: (item) => item.name,
        meta: (item) => `${item.code} - ${item.condition}`,
        body: (item) => `Responsable: ${item.owner}`,
    },
    tasks: {
        empty: "No hay tareas pendientes.",
        title: (item) => item.title,
        meta: (item) => `${item.progress} - ${item.due}`,
        body: (item) => `Encargado: ${item.assignee}`,
    },
};

let state = readState();

const escapeHtml = (value) => String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
}[char]));

const renderCounts = () => {
    document.querySelectorAll("[data-count]").forEach((node) => {
        const key = node.dataset.count;
        node.textContent = state[key].length;
    });

    const total = state.tickets.length + state.assets.length + state.tasks.length;
    const storageStatus = document.querySelector("#storageStatus");
    if (storageStatus) {
        storageStatus.textContent = total ? `${total} registros guardados` : "Sin registros";
    }
};

const renderList = (key) => {
    const list = document.querySelector(`[data-list="${key}"]`);
    if (!list) return;

    const config = labelMap[key];
    if (!state[key].length) {
        list.innerHTML = `<p class="empty-state">${config.empty}</p>`;
        return;
    }

    list.innerHTML = state[key]
        .map((item, index) => `
            <div class="record-item">
                <div>
                    <strong>${escapeHtml(config.title(item))}</strong>
                    <span>${escapeHtml(config.meta(item))}</span>
                    <p>${escapeHtml(config.body(item))}</p>
                </div>
                <button type="button" class="delete-record" data-delete="${key}" data-index="${index}" aria-label="Eliminar registro">Eliminar</button>
            </div>
        `)
        .join("");
};

const render = () => {
    renderCounts();
    Object.keys(defaults).forEach(renderList);
};

document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const key = form.dataset.form;
        const data = Object.fromEntries(new FormData(form).entries());
        state[key] = [{ id: Date.now(), createdAt: new Date().toISOString(), ...data }, ...state[key]];
        writeState(state);
        form.reset();
        render();
    });
});

document.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete]");
    if (deleteButton) {
        const key = deleteButton.dataset.delete;
        const index = Number(deleteButton.dataset.index);
        state[key].splice(index, 1);
        writeState(state);
        render();
        return;
    }

    if (event.target.matches("#clearData")) {
        state = { ...defaults };
        localStorage.removeItem(storageKey);
        render();
    }
});

render();
