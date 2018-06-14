# countriesViewer

Description:

A small single page React / PHP rest api application to display various info about
countries based on user input (country name, country code, and an option to search based on full country name).  Data displayed comes from REST Countries (https://restcountries.eu/).

Steps to view the countriesViewer:

1. You must have php >= 7.1 on your system (see notes if issues arise)

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

2. 'npm run start'

This will bring up a local running server that hosts the app.

Note that either way, the php server must be running.

When passing a country name AND country code, the api will only use the country name.  To use country
code, do not pass a country name.

This was developed on a Windows based system, but was also tested on Ubuntu.  When
testing on Ubuntu, initially an issue was encountered where the system didn't recognize curl-init.
To resolve this, I installed 'php7.1-curl'.  Once that was installed, everything worked smoothly when
testing on Ubuntu.  It isn't likely to be encountered, but it is possible.

