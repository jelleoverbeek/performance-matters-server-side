# performance-matters-server-side
Minimal server-side version of the [Adam street growth prototype](https://github.com/jelleoverbeek/project1-quick-hack-prototype). 
All the JavaScript functionality is removed in this version.

![Screenshot of the app](https://d.pr/i/fb8J7c+ "Screenshot of the app")

## Set up
1. Install deps: ```npm install```
2. Bundle the JS components using [Browserify](http://browserify.org/): ```browserify assets/js/main.js -o assets/js/bundle.js```
    

## Run project
To check out the project run:  

1. ```gulp express```
2. Open [127.0.0.1:8000](127.0.0.1:8000) or [localhost:8000](localhost:8000)

## Speed comparison

**Settings**
* Cache disabled
* Fast 3G

To make a fair comparison I disabled all the elements that are not available in the new (server side) version.

**Client side version**
![Client side version](https://d.pr/i/qq8dG9+ "Client side version")
The Sparql query takes 23.75 seconds to load. The total loading time is 26.30 seconds.

**Server side version**
![server side version](https://d.pr/i/YgTXaz+ "server side version")
By making the Sparql query server side the total loading time decreased to “only” for 3.44 seconds. The data is refreshed serverside twice a day.   