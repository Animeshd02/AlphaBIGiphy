
import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { initialize } from "next/dist/server/lib/render-server";

const firebaseConfig = {
  
    apiKey: "AIzaSyDS6ZaZnX0ezQIjym-XODauUAM-QSBoqoo",
    authDomain: "alphabi-auth-df2cd.firebaseapp.com",
    projectId: "alphabi-auth-df2cd",
    storageBucket: "alphabi-auth-df2cd.appspot.com",
    messagingSenderId: "130247191119",
    appId: "1:130247191119:web:988ed20cd47a62847e183a"

};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app)

export {app, auth}
