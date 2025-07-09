const { spawn } = require('child_process');

function predictThreatCategory(description) {
  return new Promise((resolve, reject) => {
    const process = spawn('python3', ['backend/ml/predict.py', description]);
    
    let result = '';
    process.stdout.on('data', (data) => {
      result += data.toString();
    });

    process.stderr.on('data', (data) => {
      console.error('Python stderr:', data.toString());
    });

    process.on('close', (code) => {
      try {
        const json = JSON.parse(result);
        resolve(json.predicted_category);
      } catch (err) {
        reject('❌ Failed to parse prediction output');
      }
    });

    process.on('error', (err) => {
      reject(`Spawn error: ${err}`);
    });
  });
}

module.exports = { predictThreatCategory };
