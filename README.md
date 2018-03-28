# performance-matters-server-side
Minimal server-side version of the [Adam street growth prototype](https://github.com/jelleoverbeek/project1-quick-hack-prototype). 
All the JavaScript functionality is removed in this version. Moving the Sparql query to the back-end using a nodejs server improved the loading speed dramatically.

![Screenshot of the app](https://d.pr/i/fb8J7c+ "Screenshot of the app")

## Set up
**Clone repository:**
```
git clone git@github.com:jelleoverbeek/performance-matters-server-side.git
```

**Install dependencies:**
```
npm install
```

**Compiling assets**  
- Bundle and minify js: ```npm run browserify```  
- Minify css: ```npm run uglifycss```

**Service worker**  
The service worker is called using the script below. To edit the Service Worker open: `assets/sw.js`. Currently the service worker caches the whole application except the fonts. So when the user is offline everything will still be usable. 

```JavaScript
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
```

**Build and start server:**
```
npm run start
```
   
Open [127.0.0.1:8000](127.0.0.1:8000) or [localhost:8000](localhost:8000) in your browser to checkout the app.


## Speed comparison
**Settings**
* Cache disabled
* Fast 3G

To make a fair comparison I disabled all the elements that are not available in the new (server side) version.

### Sparql

**Client side version**
![Client side version](https://d.pr/i/qq8dG9+ "Client side version")
The Sparql query takes 23.75 seconds to load. The total loading time is 26.30 seconds.

**Server side version**
![server side version](https://d.pr/i/YgTXaz+ "server side version")
By making the Sparql query server side the total loading time decreased to “only” for 3.44 seconds. The data is refreshed serverside twice a day.

### Minifying

**Unminified js: 586ms**
![Minifying](https://d.pr/i/qYcZ5w+ "Minifying")

**Minified js: 572ms**
![Minifying](https://d.pr/i/PqJGh1+ "Minifying")

**Unminified css: 647ms**
![Minifying](https://d.pr/i/ZqlFRv+ "Minifying")

**Minified css: 631ms**
![Minifying](https://d.pr/i/hb2QQq+ "Minifying")

### GZIP

**Before gzip (Total: 3.41s):**
![GZIP](https://d.pr/i/2F9Ipd+ "GZIP")

**After gzip (Total: 2.24s):**
![GZIP](https://d.pr/i/ZjWC69+ "GZIP")

### Image compression

**Before svg compression (+/- 590 ms)**
![compression](https://d.pr/i/ghDHSO+ "compression")

**After svg compression (+/- 585 ms)**  
![compression](https://d.pr/i/ucuEYQ+ "compression")

### Async assets

**Without async assets**
![Async assets](https://d.pr/i/byvWbZ+ "Async assets")

**First meaningful paint assets time with async assets:**
![Async assets](https://d.pr/i/CQJ867+ "Async assets")

## Result
After combining all the optimisations the audit was getting very different results each time. After auditing 5 times the average first meaningfull paint time was: +/- 3000ms
![Result](https://d.pr/i/aJftfQ+ "Result")

## Roadmap
- Serverside rendering of images with the roads on a map and displaying these in the app.
