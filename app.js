const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const request = require('request')
const parseJson = require('parse-json')
const sass = require('node-sass');

const api = {
    streets: [],
    sparqlQuery: `
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX hg: <http://rdf.histograph.io/>
            PREFIX sem: <http://semanticweb.cs.vu.nl/2009/11/sem/>
            PREFIX geo: <http://www.opengis.net/ont/geosparql#>
            
            SELECT ?straat ?label ?date ?wkt WHERE {
              ?straat rdf:type hg:Street .
              ?straat rdfs:label ?label .
              ?straat sem:hasEarliestBeginTimeStamp ?date .
              ?straat geo:hasGeometry ?geo .
              ?geo geo:asWKT ?wkt .
            }
            
            ORDER BY ?date
            LIMIT 9999`,
    queryUrl: function () {
        return 'https://api.data.adamlink.nl/datasets/AdamNet/all/services/hva2018/sparql?default-graph-uri=&query=' + encodeURIComponent(this.sparqlQuery) + '&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on'
    },
    getData: function () {
        request(this.queryUrl(), (error, response, data) => {

            if(!error) {
                let latestYear = 0,
                    latestIndex = -1;

                data = parseJson(data);
                data.results.bindings.forEach((street) => {

                    const streetObj = {
                        year: "",
                        streets: []
                    }

                    if(street.date.value > latestYear) {
                        latestYear = street.date.value
                        latestIndex++

                        // Add data to temporary obj
                        streetObj.year = street.date.value
                        streetObj.streets.push(street.label.value)

                        this.streets.push(streetObj);
                    } else {
                        // Add street to the existing obj if the year already exists
                        this.streets[latestIndex].streets.push(street.label.value)
                    }
                });
            } else {
                console.log('error:', error); // Print the error if one occurred
            }
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        });
    },
    init: function () {
        this.getData();
    }
}

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.use(express.static(__dirname + '/assets'))


app.get('/', function(req, res) {
    res.render('index.html', {
        streets: api.streets
    })
})

app.listen(8000, function () {
    api.init();
    console.log('Listening on port 8000!')
})