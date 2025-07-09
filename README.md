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
