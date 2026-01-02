# Threat Intelligence Dashboard

The Threat Intelligence Dashboard is a full-stack security analytics application designed to collect, visualize, and analyze cyber threat data. It integrates front-end and back-end modules to provide a centralized platform for monitoring threat intelligence indicators.

---

## Overview

This project consists of a dashboard interface (built using React) and a back-end API (using Node.js/Python or another server framework) to aggregate security data. The application is designed to support threat analysts, security engineers, and SOC teams by presenting key threat metrics and allowing interaction with real-time or historical data feeds.

---

## Features

- Interactive dashboard UI  
- Threat data visualization  
- Integration with multiple threat feeds (as configured)  
- API to manage and retrieve intelligence data  
- Docker-based setup for development and deployment

---

## Technology Stack

| Component | Technology |
|-----------|------------|
| Frontend | React |
| Backend | Node.js / Python (based on implementation) |
| Database | (If applicable) |
| Dev Tools | Docker, Docker Compose |
| Languages | JavaScript, Python |

---

## Project Structure

threat-intelligence-dashboard/
├── backend/ # Backend API and services
├── frontend/ # React application
├── node_modules/ # Dependencies
├── docker-compose.yml # Docker configuration
├── package.json # Project dependencies and scripts
├── .gitignore
└── README.md


---

## Getting Started

### Prerequisites

Before running the project, make sure you have:

- Node.js (v14 or later)
- npm (v6 or later)
- Docker and Docker Compose (optional but recommended)

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/Manasi-16-08/threat-intelligence-dashboard.git
cd threat-intelligence-dashboard
```

###Backend Setup

1.Navigate to the backend directory:
```bash
cd backend
```

2.Install dependencies:
```bash
npm install
```
3.Configure environment variables as needed (e.g., API keys, database URLs).

4.Start the backend server:
```bash
npm start
```

###Frontend Setup

1.Navigate to the frontend directory:
```bash
cd frontend
```

2.Install dependencies:
```bash
npm install
```

3.Start the React application:
```bash
npm start
```

The dashboard should be accessible in your browser at:

```bash
http://localhost:3000
```
Docker Setup (Optional)

If you prefer a containerized setup, use Docker Compose to run both backend and frontend services.

```bash
docker-compose up --build
```

This will start all services defined in docker-compose.yml.

###Usage

Once both backend and frontend are running:

-Open the dashboard in your browser.

-Navigate through the UI to view threat intelligence summaries.

-Use the configured API endpoints to pull or manage threat data.

##Contributions

-Contributions are welcome. To contribute:

-Fork this repository.

-Create a new feature branch.

-Make your changes and commit them with clear messages.

-Submit a Pull Request for review.

###Author

Manasi Tawade

GitHub: https://github.com/Manasi-16-08
