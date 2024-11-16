# Pruebas de Regresión Visual sobre Ghost en versiones 4.5 y 5.96.0

## Integrantes

| Nombre             | Correo                          |
| ------------------ | ------------------------------- |
| Daniela Sánchez Agudelo | d.sancheza2@uniandes.edu.co  |
| Oscar David Torres Sánchez | o.torress@uniandes.edu.co |

## Requisitos 
1. Docker
2. Cypress
3. Node v20.12.2
4. kraken-node

## Instalación de Ghost usando Docker
1. Clona el repositorio del proyecto.
   
   ```bash
   git clone https://github.com/danisanchezag2/e2e_test_kraken_cypress.git
   
2. En la raíz del proyect, ejecuta el comando de docker para crear/iniciar los contenedores de las version 4.5 y 5.96.0 de Ghost.
   
   ```bash
   docker-compose up
   
3. Verifica que las versiones instaladas estan corriendo correctamente.
   
   Para Ghost 4.5 corre sobre el puerto 2371
   <img width="902" alt="Screenshot 2024-11-16 at 1 05 12 PM" src="https://github.com/user-attachments/assets/a7f2ab0a-e00d-477a-8054-0dc6be13db7f">

   Para Ghost 5.96.0 corre sobre el puerto 2370
   <img width="722" alt="Screenshot 2024-11-16 at 1 05 57 PM" src="https://github.com/user-attachments/assets/9c123f4c-8076-4468-b8f2-765a91b237c1">

4. Crea el usuario inicial en cada una de las versiones (si corresponde).

## Instalación de Kraken
1. Dirígete al directorio kraken/ ya sea dentro de la carpeta ghost4.5 ó ghost5.96.0
   
   ```bash
   cd ghost4.5/kraken/
   cd ghost5.96.0/kraken/
   
2. Instala las dependencias necesarias usando el comando npm install
   
   ```bash
   npm install
   
3. Ejecuta el comando de diagnóstico para verificar que todas las dependencias del sistema están instaladas correctamente
   
   ```bash
   npx kraken-node doctor
   
4. Si el diagnóstico encuentra problemas, instala las dependencias faltantes según las recomendaciones. Esto puede incluir instalar controladores de dispositivos o configuraciones específicas del sistema.
   
5. Configura las variables de entorno necesarias (si corresponde), como credenciales o configuraciones del entorno de pruebas.
6. Verifica en la otra versión de ghost si ya lo tienes instalado de manera correcta, de lo contrario ejecuta estos mismos pasos de nuevo sobre la carpeta de la otra versión de ghost.

Para más información puedes consultar el repositorio del proyecto Kraken: https://thesoftwaredesignlab.github.io/Kraken/

## Ejecución de escenarios de prueba en Kraken
Despues de seguir los pasos anterios para la instalación de Kraken, estamos listos para empezar a ejecutar nuestras pruebas de la siguiente forma: 
1. Asegurate de estar ubicado en el directorio kraken/
   
   ```bash
   cd kraken/
   
2. Ejecuta el comando npx kraken-node run
   
   ```bash
   npx kraken-node run
   ```

   Deberás ver algo similar a estos print:
   
   <img width="1459" alt="Screenshot 2024-11-09 at 11 34 07 PM" src="https://github.com/user-attachments/assets/e55ded91-fed9-49c5-9203-3ad90186db55">
   
   <img width="1468" alt="Screenshot 2024-11-09 at 11 34 42 PM" src="https://github.com/user-attachments/assets/3606c7c0-e1bf-4da3-8786-bb4f2965fb8f">


## Instalacion de Cypress
1. Clona el repositorio donde se encuentran los escenarios de prueba
   
   ```bash
   git clone https://github.com/danisanchezag2/e2e_test_kraken_cypress.git
   
2. Dirígete al directorio test-cypress/
   
   ```bash
   cd test-cypress/
   
3. Instala las dependencias necesarias usando el comando npm install
   
   ```bash
   npm install
   
4. Ejecuta Cypress en modo interactivo
   
   ```bash
   npm run start
   4.1. O ejecuta Cypress en modo headless
        ```bash
      npm run test

## Ejecucion de Cypress Interfaz
Cuando se corre npm run test, estaremos interactuando con la interfaz de cypress
1. Al abrir la interfaz Hacer click en Add Project y buscar la carpeta cypress de este repositorio, donde esta ubicado el archivo cypress.config.js.
2. Seleccionar las pruebas e2e ![image](https://github.com/user-attachments/assets/8d8e1923-345e-4d78-87a9-be14f720da08)
3. Seleccionar un navegador para la ejecución y hacer click en start ![image](https://github.com/user-attachments/assets/f1d45e5e-e4b1-4ae1-be38-2933382b9a55)
4. Ya allí podremos seleccionar las pruebas y ver su ejecución ![image](https://github.com/user-attachments/assets/0da7db4c-917f-46d2-b235-8a29fb5bd2a4)

