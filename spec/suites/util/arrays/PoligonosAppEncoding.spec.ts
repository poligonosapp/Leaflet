// import decrescente from './src/ForDecrescente';
// import 'iconv';
// https://www.infoq.com/presentations/js-character-encoding/
it('should set encoding programatically', async function () {

    //a
    // const iconv = await require('iconv');
    let data = '';
    process.stdin.setEncoding('utf8');

    // for (let i in data){
    process.stdin.on('data', (string) => {
        data += string;
    });
    // }

    process.stdin.on('end', () => {
        process.stdout.write(data);
    });

    //a
    expect(null == data);

    //a
    fail(true);

};

it('should nodejs iconv', function () {

    //a
    const iconv = require('PoligonosAppEncoding');

    //a
    expect(null == iconv);

    //a
    fail(true);

};

    
    

