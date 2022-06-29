const admin = require('firebase-admin');

const serviceAccount = require("./key_service_account.json"); //clave privada que creas en la plataforma
                                                              // y la descargas a tu local
const data = require("./data.json"); // el archivo que deseas cargar en firestore
const collectionKey = "products_FS"; //Nombre que le asignas a tu coleccion
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
   // en la siguiente linea se accede a la coleccion que generas y se agregan automaticamente
   // las claves generadas para cada documento es decir para cada producto de tu archivo JSON
 firestore.collection(collectionKey).add(data[docKey]).then((res) => {
    console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
   console.error("Error writing document: ", error);
});
});
}