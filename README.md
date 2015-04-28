[![Build Status](https://scrutinizer-ci.com/g/ErikSvedin/svdn-djangular/badges/build.png?b=master)](https://scrutinizer-ci.com/g/ErikSvedin/svdn-djangular/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/ErikSvedin/svdn-djangular/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/ErikSvedin/svdn-djangular/?branch=master)

# svdn-djangular
Django 1.7 + angular w angular-material


# Getting started

### Install bower/npm requirements:
npm install <br>
bower install

### Create db and run server
python svdn_djangular/manage.py syncdb <br>
python svdn_djangular/manage.py runserver

### Run gulp browser sync task (default gulp task):
gulp

### About browsersync:
Browsersync will fire up and proxy your localhosts port 8000 (should be set to where your runserver is at), this can be changed in the gulpfile
by setting the djangoPort variable to your port of choice.





