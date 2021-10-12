const config = {
    apiKey: "AIzaSyCV0OgNuW-3ZxvR64z4_jBAWp3R2bbgFY8",
    authDomain: "portfolio-website-5419e.firebaseapp.com",
    databaseURL: "https://portfolio-website-5419e-default-rtdb.firebaseio.com",
    projectId: "portfolio-website-5419e",
    storageBucket: "portfolio-website-5419e.appspot.com",
    messagingSenderId: "586905982172",
    appId: "1:586905982172:web:ef7df77346230dbf849019"
}

firebase.initializeApp(config)

const contactFormData = firebase.database().ref('contacts')

export { contactFormData }