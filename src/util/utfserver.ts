'use strict';

import net from 'net';


const server = net.createServer(function (conn) {

    const iconv = new Iconv('latin1', 'utf-8');

    conn.pipe(iconv).pipe(conn);

});

server.listen(8000);

console.log('Listening on tcp://0.0.0.0:8000/');
