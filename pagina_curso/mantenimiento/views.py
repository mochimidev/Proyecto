from django.shortcuts import render


def home(request):
    stats = [
        {'value': '24 h', 'label': 'respuesta objetivo'},
        {'value': '4', 'label': 'areas de seguimiento'},
        {'value': '100%', 'label': 'registro centralizado'},
    ]

    services = [
        {
            'title': 'Registro de equipos',
            'description': 'Ficha unica para computadores, impresoras y otros activos de soporte.',
        },
        {
            'title': 'Control de mantenimiento',
            'description': 'Seguimiento de solicitudes, prioridades, estados y responsables.',
        },
        {
            'title': 'Atencion a usuarios',
            'description': 'Canal simple para ordenar requerimientos y reducir tiempos de espera.',
        },
    ]

    workflow = [
        'Ingreso de solicitud',
        'Revision tecnica',
        'Asignacion de prioridad',
        'Cierre con historial',
    ]

    return render(
        request,
        'mantenimiento/home.html',
        {
            'stats': stats,
            'services': services,
            'workflow': workflow,
        },
    )
