@echo off
Rem this file cleans and readys caineandrebakah.com for production
ECHO.

ver
ECHO.

ECHO Selecting Project Directory...
cd C:\Users\caine\Desktop\caineandrebekah
ECHO.

cd
ECHO.

ECHO Logging Project Files...
tasklist > C:\Users\caine\Desktop\caineandrebekah\scripts\tasks-log.txt
dir C:\Users\caine\Desktop\caineandrebekah > C:\Users\caine\Desktop\caineandrebekah\scripts\directory-log.txt
ECHO.

ECHO Completed!
ECHO.

PAUSE
ECHO.

ECHO Running Network Logger...
ipconfig /all > C:\Users\caine\Desktop\caineandrebekah\scripts\network-log.txt
ping firebase.google.com > C:\Users\caine\Desktop\caineandrebekah\scripts\fb-ping-log.txt
ping caineandrebekah.com > C:\Users\caine\Desktop\caineandrebekah\scripts\car-ping-log.txt
tracert caineandrebekah.com > C:\Users\caine\Desktop\caineandrebekah\scripts\traceroute-car.txt
ECHO.

ECHO Completed!
ECHO.

PAUSE
ECHO.

cmd
ECHO Firebase Directories:
firebase list
ECHO.

PAUSE
ECHO.

cmd
ECHO Updating Firebase SDK
npm install -g firebase-tools
ECHO.

PAUSE
ECHO.

ECHO Deploying the project to production
firebase deploy
ECHO.

start "" console.firebase.google.com
start "" caineandrebekah.com
ECHO.

PAUSE
ECHO.

::CLS
::EXIT
cmd