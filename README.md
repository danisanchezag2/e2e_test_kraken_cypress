# Pruebas automatizadas con generación de datos

## Integrantes

| Nombre             | Correo                          |
| ------------------ | ------------------------------- |
| Daniela Sánchez Agudelo | d.sancheza2@uniandes.edu.co  |
| Oscar David Torres Sánchez | o.torress@uniandes.edu.co |

## Requisitos 
1. Docker
2. Node v20.12.2
3. NPM 10.9.0

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

## Configuración y ejecución de GUI Ripping usando RIPuppet
1. Desde la raíz del proyecto, dirígete al directorio pruebas_exploratorias/RIPuppetCoursera
   
   ```bash
   cd pruebas_exploratorias/RIPuppetCoursera/
   
2. Instala las dependencias necesarias usando el comando npm install
   
   ```bash
   npm install

3. Abre el archivo config.json y asegurate de tener la configuración deseada antes de la ejecución
   
<img width="502" alt="Screenshot 2024-11-30 at 12 20 04 AM" src="https://github.com/user-attachments/assets/e18f19ac-08f2-47ef-b5f8-10769af784ad">

4. Ejecuta la herramienta para correr el ripper
   
   ```bash
   node index.js

Para mas información, puedes remitirte al repositorio de la herramienta dando click [aqui]( https://github.com/TheSoftwareDesignLab/RIPuppetCoursera)

## Configuración y ejecución de pruebas E2E con Cypress
1. Desde la raíz del proyecto, dirígete al directorio pruebas_e2e/test-cypress
   
   ```bash
   cd pruebas_e2e/test-cypress/
   
2. Instala las dependencias necesarias usando el comando npm install
   
   ```bash
   npm install

3. Ejecuta Cypress en modo interactivo
   
   ```bash
   npm run start
   ```
   
   Ó ejecuta Cypress en modo headless
   
   ```bash
   npm run test
   ```

## Configuración y ejecución de pruebas E2E con Kraken
1. Desde la raíz del proyecto, dirígete al directorio pruebas_e2e/test-cypress
   
   ```bash
   cd pruebas_e2e/kraken/
   
2. Instala las dependencias necesarias usando el comando npm install
   
   ```bash
   npm install
   
3. Ejecuta el comando de diagnóstico para verificar que todas las dependencias del sistema están instaladas correctamente
   
   ```bash
   npx kraken-node doctor
   
4. Si el diagnóstico encuentra problemas, instala las dependencias faltantes según las recomendaciones. Esto puede incluir instalar controladores de dispositivos o configuraciones específicas del sistema.
   
5. Configura las variables de entorno necesarias (si corresponde), como credenciales o configuraciones del entorno de pruebas. Para más información puedes consultar el repositorio del proyecto Kraken: https://thesoftwaredesignlab.github.io/Kraken/

6. Ejecuta el comando npx kraken-node run
   
   ```bash
   npx kraken-node run
   ```

   Deberás ver algo similar a estos print:
   
   <img width="1459" alt="Screenshot 2024-11-09 at 11 34 07 PM" src="https://github.com/user-attachments/assets/e55ded91-fed9-49c5-9203-3ad90186db55">
   
   <img width="1468" alt="Screenshot 2024-11-09 at 11 34 42 PM" src="https://github.com/user-attachments/assets/3606c7c0-e1bf-4da3-8786-bb4f2965fb8f">

## Configuración y ejecución de pruebas VRT con ResembleJS

1. Repite los pasos anteriores ([configuración de cypress](https://github.com/danisanchezag2/e2e_test_kraken_cypress/edit/main/README.md#configuraci%C3%B3n-y-ejecuci%C3%B3n-de-pruebas-e2e-con-cypress) y [configuración de kraken](https://github.com/danisanchezag2/e2e_test_kraken_cypress/edit/main/README.md#configuraci%C3%B3n-y-ejecuci%C3%B3n-de-pruebas-e2e-con-cypress)) pero desde la carpeta pruebas_vrt desde la raíz
   
   ```bash
   cd pruebas_vrt/
   ```
2. Luego de haber ejecutado las pruebas para cada version de Ghost, dirígete al directorio resemble/
   
   ```bash
   cd pruebas_vrt/resemble/
   
3. Instala las dependencias usando el campos de npm install (esto se hace la primera vez que se va a ejecutar las pruebas)
   
   ```bash
   npm install

4. Resemble usa la libreria de canvas para la ejecución de pruebas, asegurate de tener instalada esta librería
   
   ```bash
   npm install canvas

5. Ejecuta las pruebas ejecutando el script
   
   ```bash
   node index.js

6. El script generara el reporte con los resultados de la prueba, el cual podrias verificar en results/

   <img width="1464" alt="Screenshot 2024-11-16 at 6 29 58 PM" src="https://github.com/user-attachments/assets/d5012cdf-5404-4be0-9980-d9f9a4c1849a">

## Configuración y ejecución de pruebas VRT con BackstopJS

1. Repite los pasos anteriores ([configuración de cypress](https://github.com/danisanchezag2/e2e_test_kraken_cypress/edit/main/README.md#configuraci%C3%B3n-y-ejecuci%C3%B3n-de-pruebas-e2e-con-cypress) y [configuración de kraken](https://github.com/danisanchezag2/e2e_test_kraken_cypress/edit/main/README.md#configuraci%C3%B3n-y-ejecuci%C3%B3n-de-pruebas-e2e-con-cypress)) pero desde la carpeta pruebas_vrt desde la raíz
   
   ```bash
   cd pruebas_vrt/
   ```
   
2. Genera las imágenes de referencia usando el siguiente comando
   ```bash
      npx backstop reference
3. Ejecuta las pruebas de regresión visual con BackstopJS usando el siguiente comando:
   ```bash
      npx backstop test

4. Si deseas actualizar las imágenes de referencia, ejecuta el siguiente comando:
   ```bash
      npx backstop approve

5. Para ejecutar las pruebas de regresión visual en un entorno remoto, usa el siguiente comando:
   ```bash
      npx backstop remote

6. Revisa el reporte generado en la carpeta pruebas_vrt/backstop_data/html_report para ver los resultados de las pruebas.
   

## Configuración y ejecución de pruebas de validación de datos
1. Repite los pasos anteriores ([configuración de cypress](https://github.com/danisanchezag2/e2e_test_kraken_cypress/edit/main/README.md#configuraci%C3%B3n-y-ejecuci%C3%B3n-de-pruebas-e2e-con-cypress)) pero desde la carpeta validacion_datos desde la raíz
   
   ```bash
   cd validacion_datos/
   ```

### Estrategias de Generación de Datos para Pruebas

Para realizar pruebas sobre la Aplicación Base de Pruebas (ABP), se usaron tres estrategias de generación de datos, que se integran de la siguiente manera en los escenarios de prueba:

### 1. Generación de Datos A-priori
- **Descripción:** Se utiliza un conjunto de datos predefinido, almacenado en archivos como JSON, arrays o bases de datos. Estos datos se preparan antes de ejecutar las pruebas y representan casos específicos y predecibles.
- **Integración en escenarios de prueba:**  
  - Útil para validar comportamientos esperados, como verificaciones de campos obligatorios o procesos con reglas estrictas.
  - **Ejemplo:** Validar que etiquetas preexistentes en el sistema (e.g., "tag1", "tag2") funcionan correctamente.
- **Archivo de pruebas:** `tags-a-priori.cy.js`

### 2. Generación de Datos Pseudo-aleatorios Dinámicos
- **Descripción:** Se generan datos basados en un conjunto real o consistente, pero con variaciones controladas para ampliar la cobertura de las pruebas.
- **Integración en escenarios de prueba:**  
  - Útil para probar límites o variaciones dentro de un rango conocido.
  - **Ejemplo:** Crear etiquetas con base en plantillas existentes, modificando campos como el nombre o atributos secundarios.
- **Archivo de pruebas:** `tags-pseudo.cy.js`

### 3. Generación de Datos Completamente Aleatorios
- **Descripción:** Se generan datos sin relación con información previa, asegurando una alta variabilidad. Esto permite explorar comportamientos inesperadosdel sistema.
- **Integración en escenarios de prueba:**  
  - Útil para escenarios de estrés o prueba de límites, verificando cómo responde el sistema ante datos no anticipados.
  - **Ejemplo:** Crear etiquetas con nombres completamente aleatorios para probar entradas atípicas.
- **Archivo de pruebas:** `tags-random.cy.js`

### Organización
Los nombres de los archivos de prueba reflejan claramente la estrategia utilizada, facilitando su identificación y ejecución:
```bash
   tags-a-priori.cy.js
   tags-pseudo.cy.js
   tags-random.cy.js
   ```

## Pruebas manuales
En esta sección se relaciona el inventario de las pruebas manuales realizadas, click [aqui](https://uniandes-my.sharepoint.com/:x:/g/personal/d_sancheza2_uniandes_edu_co/EWTWbWaJ4ohKu3fdcUEG1FYBR9E-DNOCX0mkQq582HQ9eA?e=fQMyIr) para ir al documento.

## Artefactos
1. [Estrategia de pruebas](https://uniandes-my.sharepoint.com/:w:/g/personal/d_sancheza2_uniandes_edu_co/EeLCGyLyLaRFmyRurVvZkAQB0QD5y61elHUnlgh8wBNCFg?e=heHnli)
2. [Diagrama de Gantt de la estrategia](https://uniandes-my.sharepoint.com/:x:/r/personal/d_sancheza2_uniandes_edu_co/Documents/Diagrama%20de%20Gantt%20simple%20.xlsx?d=w372b7ab1473740688958f51b1538148b&csf=1&web=1&e=Rr2QuU)
3. [Inventario de pruebas manuales](https://uniandes-my.sharepoint.com/:x:/g/personal/d_sancheza2_uniandes_edu_co/EWTWbWaJ4ohKu3fdcUEG1FYBR9E-DNOCX0mkQq582HQ9eA?e=fQMyIr)
4. [Video de estrategia](https://uniandes-my.sharepoint.com/:v:/g/personal/o_torress_uniandes_edu_co/EUmrm9gJkLVDg0GqDbASUIwBG1PPkCiQMiPJRxdEgVv2bg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=BRbXp7)
