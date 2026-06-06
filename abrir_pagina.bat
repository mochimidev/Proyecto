@echo off
cd /d "%~dp0pagina_curso"
start "" "http://127.0.0.1:8000/"
..\.venv\Scripts\python.exe manage.py runserver 127.0.0.1:8000
