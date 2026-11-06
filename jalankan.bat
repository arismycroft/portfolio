@echo off
cd /d "%~dp0"
echo === Menginstall dependency (butuh internet, 1-3 menit) ===
call npm install
if errorlevel 1 (echo.& echo npm install GAGAL, lihat pesan di atas.& pause& exit /b 1)
echo.
echo === Menjalankan dev server di http://localhost:3000 ===
start "" http://localhost:3000
call npm run dev
pause
