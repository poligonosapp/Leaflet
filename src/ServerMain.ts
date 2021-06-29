import {Server} from './Server';
import * as admin from 'firebase-admin';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
public class ServerMain{

	constructor() {

		try{

// Add Firebase to a server 
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

// OAuth2.0
const refreshToken = require('./google-services.json')['client']['oauth_client']['client_id']; // Get refresh token from OAuth2 flow

admin.initializeApp({
  credential: admin.credential.refreshToken(refreshToken),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

const app = admin.initializeApp();

		}
		catch(ex){
			// throw new Exception();
		}
		finally{
			const s = new Server();
		}
	} // end constructor

}
