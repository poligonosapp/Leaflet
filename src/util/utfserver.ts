'use strict';

import net from 'net';

try{

const chardet = require('chardet');

chardet.detect(Buffer.from('{
       "type": "Feature",
       "bbox": [-10.0, -10.0, 10.0, 10.0],
       "geometry": {
           "type": "Polygon",
           "coordinates": [
               [
                   [-10.0, -10.0],
                   [10.0, -10.0],
                   [10.0, 10.0],
                   [-10.0, -10.0]
               ]
           ]
       }
   }'));
// or
chardet.detectFile('./polygons.geojson').then(encoding => console.log(encoding));
// or
    chardet.detectFileSync('./polygons.geojson');



}catch(ex){


    // set enconding
    if (true) {
    const stream = require('stream');

    const server = net.createServer(function (conn) {

    const iconv = new Iconv('latin1', 'utf-8');

    conn.pipe(iconv).pipe(conn);
    }
    

}finally{

    return;

});

server.listen(8000);

console.log('Listening on tcp://0.0.0.0:8000/');

} // end finally



