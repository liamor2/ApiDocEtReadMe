npm start

@echo off
setlocal

rem Définir le nom du programme à vérifier
set PROGRAMME=Nom_du_programme

rem Vérifier si le programme est déjà installé
where %PROGRAMME% >nul 2>nul
if %errorlevel% equ 0 (
    echo ok
) else (
    echo Install en cours
    rem Insérer ici les commandes d'installation du programme
)

endlocal
