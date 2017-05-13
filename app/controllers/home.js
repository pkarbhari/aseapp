var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

//var request = require('request');
var userInfo = '';
//request('https://prkaseapiapp.prkappse.p.azurewebsites.net/contacts/3', function (error, response, body) {
  //  if (!error && response.statusCode == 200) {
        //var uInfo = JSON.parse(body);
    //    //console.log(uInfo[0].name) // Print the google web page.
        //userInfo = uInfo[0].name;
    // }
//})

var https = require('https');
 
/**
 * HOW TO Make an HTTP Call - GET
 */
// options for GET
var optionsget = {
    host : 'prkaseapiapp.prkappse.p.azurewebsites.net', // here only the domain name
    // (no http/https !)
    port : 443,
    json: true,
    path : '/contacts/3', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');
 
// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);
 
 
    res.on('data', function(d) {
        console.info('GET result:\n');
        
        process.stdout.write(d);
        var uInfo = JSON.parse(d);
        //console.log(uInfo[0].name);
        userInfo = uInfo[0].name;
        //process.stdout.write(userInfo);
        console.info('\n\nCall completed');
    });
 
});
 
reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});



router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

var tableContent = '';
function populateTable() {




    // Empty content string
    tableContent = '';
    var user1 = userInfo;// "User1";
    // jQuery AJAX call for JSON
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + "ser1" + '">' + user1 + '</a></td>';
            tableContent += '<td>' + "User1@user.com" + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + 1234 + '">delete</a></td>';
            tableContent += '</tr>';

        // Inject the whole content string into our existing HTML table
        
 
};



router.get('/users', function (req, res, next) {
  var articles = [new Article(), new Article()];
  populateTable();
    res.render('index', {
      title: 'Generator-Express',
      articles: articles,
      userData: tableContent
    });
});

