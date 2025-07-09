<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
🛡️ Threat Intelligence Dashboard
A full-stack threat intelligence platform that enables browsing, searching, and quick classification of cybersecurity threats using ML.

📁 Project Structure
pgsql
Copy
Edit
threat_dashboard/
│
├── backend/
│   ├── controllers/
│   │   ├── threatController.js
│   │   └── analyzeController.js
│   ├── routes/
│   │   ├── threats.js
│   │   └── analyze.js
│   ├── models/
│   │   └── Threat.js
│   ├── ml/
│   │   ├── train_model.py
│   │   ├── predict.py
│   │   ├── well-trained model.pkl
│   │   └── vectorizer.pkl
│   ├── server.js
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Threats.jsx
│   │   │   └── Analyze.jsx
│   │   └── App.jsx
│   ├── public/
│   └── Dockerfile
│
└── docker-compose.yml
🧩 Technology Stack
Backend: Node.js + Express — easy routing, performant

Database: MongoDB — document-based fit for semi-structured CSV

Machine Learning: Python (scikit-learn) — logistic regression + TF-IDF

Frontend: React + react-chartjs-2 — fast development & charts

DevOps: Docker & docker-compose — reproducible, single-command launch

🛠️ Getting Started
Prerequisites
Docker & docker-compose installed

(Optional) Python 3.9+ and pip for local ML retraining

How to Build & Run
Fetch the CSV from Kaggle and place under backend/data/threats.csv

(Optional) Run ML training:

bash
Copy
Edit
cd backend/ml
python train_model.py
Generates model.pkl and vectorizer.pkl.

Docker startup:

bash
Copy
Edit
docker-compose build
docker-compose up
Access the app:

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/threats

Analyze endpoint: POST http://localhost:5000/api/analyze

✅ Core Features
🎯 Part 1
Database ingestion via train_model.py, storing full CSV

Backend APIs:

GET /api/threats?page=&limit=&search=&category=

GET /api/threats/:id

GET /api/threats/stats

Frontend SPA:

Dashboard overview with total, categories, severity (charts)

Threats view with search, pagination, category filter

Detail modal for individual threat records

🚀 Part 2 (Implemented)
ML Integration: ‘Analyze’ tab uses ML model to classify new descriptions

Dockerized: Supports single-command docker-compose up

🔃 Example Usage
Threats Endpoint:
http
Copy
Edit
GET /api/threats?page=1&limit=10&search=malicious&category=Phishing
Analyze Endpoint:
http
Copy
Edit
POST /api/analyze
{
  "description": "This suspicious file downloads a malicious payload."
}
Response:

json
Copy
Edit
{ "predicted_category": "Malware" }
📄 Submission Checklist
 All endpoints implemented and tested

 Frontend functionality complete (Dashboard, Threats, Analyze)

 Docker configurations in place

 Well-structured README (this file)

 (Optional) Automated tests (unit/backend + frontend)

📌 Notes
Stack Choice: MongoDB suits CSV’s semi-structured nature. Node.js speeds up API development. Python ensures simple yet powerful ML model integration.

ML Model Files load automatically; regenerate anytime using training script.

CORS is enabled for frontend-backend communication.

Charts built with react-chartjs-2; easy to extend.
>>>>>>> 0ff99168a9463775dc647ef3a818bc04e9c2e2bd
