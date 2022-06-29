
# UploadDataFirestore
Como subir a la plataforma Firebase/Firestore un archivo JSON a collection/documents 

###Paso 1
  ![](./2022-06-29%2010%2048%2042.jpg)
###Paso 2
  Una Vez que tienes tu archivo de credenciales "Clave Privada", sustituya su archivo que genero la plataforma coloquelo en esta misma carpeta actual
  **Sugerencia:**
      -Puede renombrar su archivo a "key_service_account.json"  o modificar el nombre en el archivo "upload_data.js"
###Paso 3
  Copie su archivo de datos en esta misma carpeta actual, sustituyendo el que se encuentra de ejemplo.
  **Sugerencia:**
      -Puede renombrar su archivo JSON a "data.json"  o modificar el nombre en el archivo "upload_data.js"
###Paso 4
  Modifique el archivo upload_data.js.
  **TIPS:**
    -si renombro sus archivos a los recomendados solo debes cambiar el nombre de tu collection en la linea 6
      const collectionKey = "aQUI VA EL NOMBRE DE TU COLECCION"; 
    -si no renombraste tus archivos debes actualizar cada nombre de las lineas 3 y 5 del archivo upload_data.js
      
      const serviceAccount = require("./AQUI VA EL NOMBRE DEL ARCHIVO DE LAS CLAVE QUE GENERASTE EN FIREBASE");
      const data = require("./AQUI VA EL NOMBRE DE TU ARCHIVO DE DATOS json");
###Paso 5
  **Asegurese de tener instalado el paquete firebase-admin mediante NPM**
    npm install --save firebase-admin
###Paso 6
  ejecute en su consola/Terminal el siguiente Comando
  node upload_data.js
-Este comando deberia cargar con exito la data del archivo data.json a su proyecto en firestore
  
