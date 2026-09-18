# 🌤️ Weather App

A simple and responsive weather application built using **HTML, CSS, JavaScript, Node.js, Express.js, and OpenWeather API**.

The project is containerized using **Docker** and uses **Docker Compose** to run the frontend and backend together.

---

## 📌 Features

* 🌍 Search weather by city name
* 🌡️ Display current temperature
* 💧 Display humidity
* 💨 Display wind speed
* ☁️ Display weather conditions
* 📱 Simple and responsive user interface
* 🔐 API key stored securely using environment variables
* 🐳 Dockerized frontend and backend
* ⚙️ Docker Compose support
* ☁️ Docker images available on Docker Hub

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### API

* OpenWeather API

### DevOps

* Docker
* Docker Compose
* Docker Hub
* Git & GitHub

---

## 📂 Project Structure

```text
Weather_App/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
│
├── index.html
├── index.js
├── styles.css
│
├── Dockerfile
├── frontend.Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
```

---

# 🚀 Running the Project

There are two ways to run the project:

1. Using Docker Compose
2. Running frontend and backend manually

The recommended method is **Docker Compose**.

---

# 🐳 Method 1: Run Using Docker Compose

## 1. Requirements

Make sure you have installed:

* Git
* Docker Desktop
* An OpenWeather API key

---

## 2. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Move into the project directory:

```bash
cd Weather_App
```

---

## 3. Create the Environment File

The real `.env` file is intentionally not included in GitHub for security reasons.

Go to the backend directory:

```bash
cd backend
```

Create a file named:

```text
.env
```

Add:

```env
OPENWEATHER_API_KEY=your_openweather_api_key
```

Replace `your_openweather_api_key` with your own OpenWeather API key.

Then return to the project root:

```bash
cd ..
```

---

## 4. Start the Application

Run:

```bash
docker compose up -d
```

Docker Compose will:

* Pull the backend image
* Pull the frontend image
* Create the backend container
* Create the frontend container
* Configure the required ports
* Start both services

---

## 5. Open the Application

Open your browser and visit:

```text
http://localhost:8080
```

The Weather App should now be running.

---

# 🔍 Check Running Containers

To check whether both containers are running:

```bash
docker compose ps
```

You should see:

```text
weather-backend
weather-frontend
```

---

# 📜 View Logs

To view logs from all services:

```bash
docker compose logs
```

To view only backend logs:

```bash
docker compose logs backend
```

To view only frontend logs:

```bash
docker compose logs frontend
```

---

# 🛑 Stop the Application

To stop and remove the containers:

```bash
docker compose down
```

Your Docker images will remain available locally.

To start the application again:

```bash
docker compose up -d
```

---

# 🐋 Docker Images

The project uses pre-built Docker images hosted on Docker Hub.

### Backend

```text
cs024/weather-app:1.0
```

### Frontend

```text
cs024/weather-frontend:1.0
```

Docker Compose automatically pulls these images if they are not already available locally.

---

# 🔐 Environment Variables

The OpenWeather API key is stored in:

```text
backend/.env
```

Example:

```env
OPENWEATHER_API_KEY=your_openweather_api_key
```

The `.env` file is intentionally excluded from Git using `.gitignore`.

The Docker build also excludes the environment file using `.dockerignore`.

### ⚠️ Important

Never commit your real API key to GitHub or include it directly in JavaScript source code.

Each user should create their own `backend/.env` file and use their own OpenWeather API key.

---

# 🔄 How the Application Works

The application follows this flow:

```text
User
  │
  ▼
Frontend
http://localhost:8080
  │
  │ HTTP Request
  ▼
Backend
http://localhost:5000
  │
  │ API Request
  ▼
OpenWeather API
  │
  │ Weather Data
  ▼
Backend
  │
  │ JSON Response
  ▼
Frontend
  │
  ▼
Weather Information
```

When a user searches for a city, the frontend sends a request to the backend:

```text
http://localhost:5000/weather?city=Karachi
```

The backend then requests the weather data from OpenWeather using the API key stored in the environment variable.

---

# 🔌 Ports

| Service  | Container Port | Host Port |
| -------- | -------------: | --------: |
| Frontend |             80 |      8080 |
| Backend  |           5000 |      5000 |

Frontend:

```text
http://localhost:8080
```

Backend:

```text
http://localhost:5000
```

Weather API endpoint:

```text
http://localhost:5000/weather?city=Karachi
```

---

# 🧪 Testing the Backend

You can test the backend directly from your browser.

Open:

```text
http://localhost:5000
```

You should receive:

```text
Weather backend is running!
```

You can also test the weather endpoint:

```text
http://localhost:5000/weather?city=Karachi
```

If the API key and connection are working, the backend will return weather information in JSON format.

---

# 💻 Running Without Docker

If you want to run the application without Docker, you need Node.js installed.

## Backend

Go to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create your `.env` file:

```env
OPENWEATHER_API_KEY=your_openweather_api_key
```

Start the backend:

```bash
node server.js
```

The backend will run on:

```text
http://localhost:5000
```

## Frontend

You can open `index.html` using a local development server such as VS Code Live Server.

The frontend will communicate with the backend running on port `5000`.

---

# 🐳 Docker Files

The project contains two Dockerfiles.

### Backend Dockerfile

```text
Dockerfile
```

This creates the Node.js backend image.

### Frontend Dockerfile

```text
frontend.Dockerfile
```

This creates the Nginx-based frontend image.

### Docker Compose

```text
docker-compose.yml
```

This connects the frontend and backend services and makes the application easy to start with one command.

---

# 📦 Useful Docker Commands

Build the backend image:

```bash
docker build -t weather-app:1.0 -f Dockerfile .
```

Build the frontend image:

```bash
docker build -t weather-frontend:1.0 -f frontend.Dockerfile .
```

List Docker images:

```bash
docker images
```

List running containers:

```bash
docker ps
```

List all containers:

```bash
docker ps -a
```

Stop a container:

```bash
docker stop CONTAINER_NAME
```

Remove a container:

```bash
docker rm CONTAINER_NAME
```

---

# 📤 Docker Hub

The Docker images are published on Docker Hub:

```text
cs024/weather-app:1.0
```

```text
cs024/weather-frontend:1.0
```

These images allow other users to run the application without building the Docker images themselves.

---

# 👥 Sharing the Project

A friend can run the project by following these steps:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Weather_App
```

Create:

```text
backend/.env
```

Add their own OpenWeather API key:

```env
OPENWEATHER_API_KEY=their_api_key
```

Then run:

```bash
docker compose up -d
```

Finally open:

```text
http://localhost:8080
```

---

# 🔒 Security

This project follows basic API-key security practices:

* Real API key is not stored in GitHub
* `.env` is included in `.gitignore`
* `.env` is excluded from Docker build context
* Users should provide their own API key
* API keys should never be publicly shared

---

# 👨‍💻 Author

**Noman Ali**

BS Computer Science

---

# 📄 License

This project is created for educational and development purposes.
