'use strict';

var time = require('time');
exports.handler = (event, context, callback) => {
  var postalcode =  event['pathParameters']['code'];
  var weather = "";
  if(postalcode === '90210'){
      weather = "sunny";
  }else if (postalcode === '84601'){
      weather = "snow";
  }else{
      weather= "i dont have the weather for that location"
  }
    callback(null, {
        statusCode: '200',
        body:  JSON.stringify({ weather:weather}),
    });
};
