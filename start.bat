@echo off
IF EXIST node_modules\confirmation.txt (
    echo Node modules already installed
    npm start
) ELSE (
    echo Installing node modules
    npm install
    type nul > node_modules\confirmation.txt
    echo Node modules installed > node_modules\confirmation.txt
    npm start
)

echo Starting server