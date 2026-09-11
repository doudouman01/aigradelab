@echo off
echo ========================================
echo    AIGradeLab - Deploy
echo ========================================
echo.

cd /d J:\AIGRADELAB

echo Generating files...
node create-aigradelab.js

echo.
echo Pushing to GitHub...
git add -A
git commit -m "update AIGradeLab"
git push

echo.
echo ========================================
echo    Deploy complete!
echo ========================================
pause
