# performance-matters-server-side
Minimal server-side version of the [Adam street growth prototype](https://github.com/jelleoverbeek/project1-quick-hack-prototype). 
All the JavaScript functionality is removed in this version.

![Screenshot of the app](https://d.pr/i/fb8J7c+ "Screenshot of the app")

## Set up
1. Clone repository:
```
git clone git@github.com:jelleoverbeek/performance-matters-server-side.git
```
2. Install dependencies:
```
npm install
```

3. Build and start server:
```
npm run start
```
    
4. Open [127.0.0.1:8000](127.0.0.1:8000) or [localhost:8000](localhost:8000) in your browser to checkout the app.


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