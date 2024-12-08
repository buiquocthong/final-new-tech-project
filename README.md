# Full-Stack AMS Application Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v8 or later)
- **Java Development Kit (JDK)** 17
- **Android Studio** (for React Native Android development)
- **Expo** (for React Native development)
- **Git**

## 🗂️ Project Structure

```
project-root/
│
├── web/            # React.js web application
├── mobile/         # React Native mobile application
├── server/         # Spring Boot server
├── chatbot-server/ # Chatbot server
└── docker-server/  # Backend Docker server
```

## 🖥️ Backend Setup (Spring Boot Server)

### Prerequisites

- Java 17
- Maven or Gradle

### 🚀 Installation Steps

1. **Create External Network**

   ```bash
   docker network create shared_env_net
   ```

2. **Start Services**

   - Navigate to the _env_ folder:

     ```bash
     docker compose up -d
     # or
     docker-compose up -d
     ```

   - Navigate to the _apartment_ folder:
     ```bash
     docker compose up
     ```

## 💻 Frontend Web Setup (React.js)

### Prerequisites

- Node.js v16+
- npm v8+

### 🛠️ Installation Steps

1. Navigate to the frontend web directory

   ```bash
   cd web
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the Development Server

   ```bash
   npm start
   ```

4. Build for Production
   ```bash
   npm run build
   ```

## 📱 Mobile App Setup (React Native)

### Prerequisites

- Node.js v16+
- Expo CLI
- Android Studio

### 🚀 Installation Steps

1. Navigate to the mobile app directory

   ```bash
   cd mobile
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run on Android
   ```bash
   # Start Metro bundler
   npm start
   ```

## 🤖 Chatbot AI Setup (Python)

### Prerequisites

- Python
- Docker

### 🛠️ Installation Steps

1. Navigate to the chatbot server directory

   ```bash
   cd chatbot-server
   ```

2. Start Weaviate Docker

   ```bash
   docker compose up -d
   ```

3. Install dependencies

   ```bash
   pip install -r requirements.txt
   ```

4. Start the App
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```

## 🔧 Troubleshooting

### Common Setup Issues

- Ensure all prerequisite software is installed
- Check version compatibility
- Verify network configurations
- Review error logs thoroughly

### Specific Checks

#### Backend

- Ensure all required dependencies are installed
- Check database connection settings
- Verify port configurations

#### Frontend Web

- Run `npm audit fix` to resolve dependency issues
- Check browser console for any errors
- Ensure API endpoint is correctly configured

#### Mobile App

- For Android, use `10.0.2.2` instead of `localhost`
- Ensure Android SDK and emulator are properly configured
- For iOS, use the correct localhost mapping

## 🛠️ Recommended Development Tools

- Visual Studio Code
- Postman (for API testing)
- Android Studio
- Docker (optional, for containerization)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

### Project Team

- Bui Quoc Thong - 21110092
- Nguyen Hoai Lam - 21110778
- Tran Gia Huy - 21110019

### Project Link

[Git repository](https://github.com/buiquocthong/final-new-tech-project.git)

## 📚 Additional Resources

- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
- [React.js Official Docs](https://reactjs.org/docs/getting-started.html)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)#
