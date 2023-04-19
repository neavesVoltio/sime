
import { getFirestore, doc, getDoc, collection, getDocs, query, where, deleteDoc, orderBy, updateDoc, setDoc, addDoc  } from '/firebase/firebaseJs.js'
import { app } from '/firebase/config.js' 

        const db = getFirestore(app) 
        console.log("hola");
        let guardarDatosBtn = document.getElementById('guardarDatosBtn');
        guardarDatosBtn.addEventListener('click', function (e) {
            
            console.log("click guardar");
            guardarDatos()
        });
        // Obtener la cadena de consulta del enlace
        const queryString = window.location.search;

        // Crear un objeto URLSearchParams para analizar la cadena de consulta
        const urlParams = new URLSearchParams(queryString);

        // Obtener el valor del parámetro "nombre" del enlace
        const empresa = urlParams.get('empresa');
        const usuario = urlParams.get('usuario');
        const puesto = urlParams.get('puesto');
        const email = urlParams.get('email');
        const telefono = urlParams.get('telefono');

        // Establecer los valores predeterminados de los campos del formulario
        document.getElementById('empresa').value = empresa;
        document.getElementById('usuario').value = usuario;
        document.getElementById('puesto').value = puesto;
        document.getElementById('email').value = email;
        document.getElementById('telefono').value = telefono;

        function updateRangeValue(id) {
        const range = document.getElementById(id);
        const value = document.getElementById(`${id}-value`);
        value.textContent = range.value;
        }

        // Llama a la función cada vez que se mueve un rango
        document.getElementById('pregunta1').addEventListener('input', function() {
        updateRangeValue('pregunta1');
        });
        document.getElementById('pregunta2').addEventListener('input', function() {
        updateRangeValue('pregunta2');
        });
        document.getElementById('pregunta3').addEventListener('input', function() {
        updateRangeValue('pregunta3');
        });
        document.getElementById('pregunta4').addEventListener('input', function() {
        updateRangeValue('pregunta4');
        });
        document.getElementById('pregunta5').addEventListener('input', function() {
        updateRangeValue('pregunta5');
        });

        // Función para guardar los datos en Firestore
        async function guardarDatos() {
            if(document.getElementById("empresa").value === "" || document.getElementById("usuario").value === ""){
                return
            } 
            guardarDatosBtn.style.display = "none"
            
            const datos = {};
            datos.empresa = document.getElementById("empresa").value;
            datos.usuario = document.getElementById("usuario").value;
            datos.puesto = document.getElementById("puesto").value;
            datos.email = document.getElementById("email").value;
            datos.telefono = document.getElementById("telefono").value;
        
            datos.pregunta1 = document.getElementById("pregunta1").value;
            datos.pregunta2 = document.getElementById("pregunta2").value;
            datos.pregunta3 = document.getElementById("pregunta3").value;
            datos.pregunta4 = document.getElementById("pregunta4").value;
            datos.pregunta5 = document.getElementById("pregunta5").value;
            console.log(datos);
            try {
            const docRef = await addDoc(collection(db, "encuestas"), datos);
            console.log("Documento guardado con ID: ", docRef.id);
            document.getElementById('encuestaContainer').style.display = "none";
            gracias()
            } catch (error) {
            console.error("Error al guardar los datos: ", error);
            }
        }

        function gracias(){
            const graciasContainer = document.getElementById('graciasContainer');
            const graciasDiv = document.createElement("div");
            graciasDiv.classList.add("d-flex", "justify-content-center", "align-items-center");
            graciasDiv.style.height = "50vh";
            graciasDiv.style.display = "none";
            graciasDiv.id = "gracias";

            const textDiv = document.createElement("div");
            textDiv.classList.add("text-center");

            const h1 = document.createElement("h1");
            h1.innerText = "Muchas gracias por su respuesta";

            const p = document.createElement("p");
            p.innerText = "Nos puede contactar en cualquier momento al correo:";

            const correoLink = document.createElement("a");
            correoLink.href = "mailto:calidad@sime.org.mx";
            correoLink.innerText = "calidad@sime.org.mx";

            textDiv.appendChild(h1);
            textDiv.appendChild(p);
            textDiv.appendChild(correoLink);

            graciasDiv.appendChild(textDiv);

            graciasContainer.appendChild(graciasDiv);

        }

    