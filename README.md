# countriesViewer

Steps to view the countriesViewer:

1. You must have php >= 7.1 on your system

2.  Navigate to the 'countriesViewer' directory

3.  Run 'php -S localhost:8000'

4.  Navigate to the 'workingView' directory

5.  Open the index.html file with Chrome or Firefox

Notes:

The index.html file was generated from running 'npm run build'
and modifying the content of the index.html to fix issues with the file references.

You alternatively could navigate into the 'countriesViewer / countries_ui ' directory
and if you have npm (yarn should also work, but I did not test with it), run:

1. 'npm install'

2.  'npm run start'

This will bring up a local running server that hosts the app.

Note that either way, the php server must be running.