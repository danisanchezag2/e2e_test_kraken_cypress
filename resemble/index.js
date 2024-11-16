const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const path = require('path');


const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let resultInfo = [];
    let semaforo = 0;
    let datetime = new Date().toISOString().replace(/:/g,".");

    for(b of browsers){
        if(!b in ['chromium']){
            return;
        }
        if (!fs.existsSync(`./results/${datetime}`)){
            fs.mkdirSync(`./results/${datetime}`, { recursive: true });
        }
        
        const ghostBase = __dirname + '/../ghost4.5/kraken-screenshots';
        const ghostRC = __dirname + '/../ghost5.96.0/kraken-screenshots';
          fs.readdirSync(ghostBase).forEach(async file => {
            semaforo = semaforo + 1;
            try{
              if(path.extname(file).toLowerCase() === '.png') {
                const oldPath = path.join(ghostBase, file);
                const newPath = path.join(ghostRC, file);
    
                const data = await compareImages(
                  fs.readFileSync(oldPath),
                  fs.readFileSync(newPath),
                  options
                );
                let [module, scenario, step] = file.split('.')[0].split('---');
                resultInfo.push({
                  isSameDimensions: data.isSameDimensions,
                  dimensionDifference: data.dimensionDifference,
                  rawMisMatchPercentage: data.rawMisMatchPercentage,
                  misMatchPercentage: data.misMatchPercentage,
                  diffBounds: data.diffBounds,
                  analysisTime: data.analysisTime,
                  module,
                  scenario,
                  step,
                  screenshotOld: `${ghostBase}/${file}`,
                  screenshotNew: `${ghostRC}/${file}`,
                  screenshotResult: `${file}-result.png`
                });
                console.log(resultInfo[b])
                fs.writeFileSync(`./results/${datetime}/${file}-result.png`, data.getBuffer());
              }
              semaforo = semaforo - 1;
            } catch(e) {
              console.error(e);
              semaforo = semaforo - 1;
            }
          });

    }
    let interval = setInterval(() => {
      if(semaforo == 0) {
        fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
        fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
      } else {
        console.log("----" + semaforo)
      }
    }, 500);
    

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
}

function createReport(datetime, resInfo){
    const topPage = `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            
    `;
    let midpage = "";
    const bottomPage = `
    </body>
    </html>
    `;
    midpage = midpage + "<br/><hr/><br/><table>";

      midpage += "<tr>";
      midpage += "<th>Module</th>";
      midpage += "<th>Scenario</th>";
      midpage += "<th>Step</th>";
      midpage += "</tr>";
    resInfo.forEach((step) => {
      midpage += "<tr>";
      midpage += "<td>" + step.module + "</td>";
      midpage += "<td>" + step.scenario + "</td>";
      midpage += "<td>" + step.step + "</td>";
      midpage += "</tr>";

      midpage += "<tr>";
      midpage += "<td><img src='" + step.screenshotOld + "' style=\"width: 200px\"></td>";
      midpage += "<td><img src='" + step.screenshotNew + "' style=\"width: 200px\"></td>";
      midpage += "<td><img src='" + step.screenshotResult + "' style=\"width: 200px\"></td>";
      midpage += "</tr>";
      
    });

    midpage += "</table>";

    return `${topPage}
            ${midpage}
            ${bottomPage}`;
}

(async ()=>console.log(await executeTest()))();