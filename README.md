# Pruebas E2E para Ghost con Kraken y Cypress

## Integrantes

| Nombre             | Correo                          |
| ------------------ | ------------------------------- |
| Daniela Sánchez Agudelo | d.sancheza2@uniandes.edu.co  |
| Oscar David Torres Sánchez | o.torress@uniandes.edu.co |

## Requisitos 
Cypress
Node v20.12.2
kraken-node
Ghost v5.100.0
Tener un usuario registrado en el aplicativo ghost

## Instalación de Kraken
1. Clona el repositorio donde se encuentran los escenarios de prueba
   
   ```bash
   git clone https://github.com/danisanchezag2/e2e_test_kraken_cypress.git
   
2. Dirígete al directorio kraken/
   
   ```bash
   cd kraken/
   
3. Instala las dependencias necesarias usando el comando npm install
   
   ```bash
   npm install
   
4. Ejecuta el comando de diagnóstico para verificar que todas las dependencias del sistema están instaladas correctamente
   
   ```bash
   npx kraken-node doctor
   
5. Si el diagnóstico encuentra problemas, instala las dependencias faltantes según las recomendaciones. Esto puede incluir instalar controladores de dispositivos o configuraciones específicas del sistema.
   
6. Configura las variables de entorno necesarias (si corresponde), como credenciales o configuraciones del entorno de pruebas.

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

