# Pruebas automatizadas con generación de datos

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
   
3. Verifica que la version que estamos probando (5.96.0) este corriendo correctamente.

   Para Ghost 5.96.0 corre sobre el puerto 2370
   <img width="722" alt="Screenshot 2024-11-16 at 1 05 57 PM" src="https://github.com/user-attachments/assets/9c123f4c-8076-4468-b8f2-765a91b237c1">

4. Crea el usuario inicial (si corresponde).

## Instalacion de Cypress

1. Dirígete al directorio random-data-test/test-cypress/
   
   ```bash
   cd random-data-test/test-cypress/
   
6. Instala las dependencias necesarias usando el comando npm install
   
   ```bash
   npm install
   
7. Ejecuta Cypress en modo interactivo
   
   ```bash
   npm run start
   ```
   
   Ó ejecuta Cypress en modo headless
   
   ```bash
   npm run test
   ```

## Ejecucion de Cypress Interfaz
Cuando se corre npm run test, estaremos interactuando con la interfaz de cypress
1. Al abrir la interfaz Hacer click en Add Project y buscar la carpeta cypress de este repositorio, donde esta ubicado el archivo cypress.config.js.
2. Seleccionar las pruebas e2e ![image](https://github.com/user-attachments/assets/8d8e1923-345e-4d78-87a9-be14f720da08)
3. Seleccionar un navegador para la ejecución y hacer click en start ![image](https://github.com/user-attachments/assets/f1d45e5e-e4b1-4ae1-be38-2933382b9a55)
4. Ya allí podremos seleccionar las pruebas y ver su ejecución ![image](https://github.com/user-attachments/assets/0da7db4c-917f-46d2-b235-8a29fb5bd2a4)


## Descripción de las tecnicas usadas para generación de datos en las pruebas
Para estas pruebas se usaron 3 tipos de generación de datos para pruebas:

**1. Generación de datos a-priori:** Esta tenica usa un set de datos previamente establecido (puede ser un json, array, etc) para ejecutar las pruebas sobre la ABP.

**2. Generación de datos pseudo-aleatorios:** Esta tenica genera datos con base en datos reales de la prueba, se puede decir que con base en un set de datos real o consistente, se pueden generar datos aleatorios para ejecutar las pruebas sobre la ABP.

**3. Generación de datos aleatorios:** Esta tecnica genera datos completamente aleatorios, de forma independiente para cada caso y cada campo.

Los nombres de los archivos que contienen las pruebas indican el tipo de prueba que se esta ejecutando sobre ese archivo, por ejemplo:
```bash
   tags-a-priori.cy.js
   tags-pseudo.cy.js
   tags-random.cy.js
   ```

## Incidencias reportadas con base las pruebas de este release
* [Issue 15](https://github.com/danisanchezag2/e2e_test_kraken_cypress/issues/15)
* [Issue 14](https://github.com/danisanchezag2/e2e_test_kraken_cypress/issues/14)
* [Issue 13](https://github.com/danisanchezag2/e2e_test_kraken_cypress/issues/13)
* [Issue 12](https://github.com/danisanchezag2/e2e_test_kraken_cypress/issues/12)
* [Issue 11](https://github.com/danisanchezag2/e2e_test_kraken_cypress/issues/11)
* [Issue 10](https://github.com/danisanchezag2/e2e_test_kraken_cypress/issues/10)
* [Issue 9](https://github.com/danisanchezag2/e2e_test_kraken_cypress/issues/9)
