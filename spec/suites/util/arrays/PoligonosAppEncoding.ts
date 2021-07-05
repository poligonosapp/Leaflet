import iconv from 'iconv';

import utfserver from './src/util/utfserver';

const { StringDecoder } = require('string_decoder')

function PoligonosAppEncoding(const options: string | typeof iconv): null | typeof iconv | 'utf8'| typeof StringDecoder {
    switch (options) {
        
        case options === 'utf8':
            return new StringDecoder('utf8');
            break;
        
        case options === iconv:

            utfserver();
            
            return;
            break;
        
        default:
            return new StringDecoder('utf8');
    }
}

// module.exports = iconv;