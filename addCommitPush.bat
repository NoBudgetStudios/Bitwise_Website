::@echo off
:: Change to your Git repository directory (optional)
:: cd path\to\your\repository

:: Add all changes
git add .

:: Get current date and time
for /f "tokens=1-5 delims=/: " %%a in ("%date% %time%") do (
    set datetime=%%a-%%b-%%c_%%d-%%e
)

:: Commit with the datetime in the message
git commit -m "committed at %datetime%"

:: Push to origin main
git push origin main

:: Pause the script so the user can see the output
pause
