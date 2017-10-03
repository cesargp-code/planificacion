var request = require('request'),
    cheerio = require('cheerio'),
    ships = [];

request('http://152.231.66.244:9100/Gessup/Planificaciones/General.aspx', function(err, resp, body){
    if(!err && resp.statusCode == 200){
      var $ = cheerio.load(body);
      $("td[style]", '.planificacion tr:nth-child(3)').each(function(){
        var ship_name = $(this).text();
        var ship_in
        var ship_out
        var ship_long
        ships.push(ship_name);
      });
      console.log(ships);
    }
});
