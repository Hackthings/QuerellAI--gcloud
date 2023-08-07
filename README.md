# Querell-AI 🐿️

## Introduction

Welcome to ReactNode AI Interviewer, an advanced chatbot powered by the formidable OpenAI API! This AI interviewer is designed to revolutionize technical interviews in the world of React and Node.js development.

## Demo

https://youtu.be/21gxvsOKagU

## Features

- **Seamless React & Node.js Assessments:** Conduct tech interviews with a focus on React and Node.js domains, evaluating candidates' proficiency and coding skills with precision.

- **Customizable Technical Evaluations:** Tailor the interview process based on specific React and Node.js roles and expertise levels.

- **Extensive Knowledge Repository:** ReactNode AI Interviewer covers everything from React components and hooks to server-side rendering and asynchronous programming.

- **Insightful Analysis & Reports:** Receive detailed reports highlighting candidates' strengths, areas for improvement, and overall performance.

- **Data Security & Privacy Assurance:** We value data security and privacy, ensuring a safe and confidential interview experience.

- **Seamless OpenAI API Integration:** Powered by OpenAI's API, ReactNode AI Interviewer integrates into your technical interview workflow effortlessly.

## Note
- I have used GPT 3.5 turbo model for my testing so due to its limitaion I have prompted it to ask only 3 questions after that it repeats itself,due to lack of tokens
- To make it work more powerfully we can use GPT 4 to improve its operational areas.
- Also I have not used any database as I haven't feel it to be important , but in future feature I am planning to have a Object relational database integrated in it.


## Technologies Used

- Node.js: Backend server for handling API requests and business logic.
- React.js: Frontend framework for building the user interface.
- Google Cloud Functions: Serverless function deployment for scalable backend services.
- Docker: Containerization technology for easy deployment and management.

## Getting Started

Follow these steps to get started with ReactNode AI Interviewer:

```bash
npm install
cd backend
npm install
npm start
cd ..
npm run dev
```

- Make sure to go to the `/pdf` endpoint, whether it is in localhost or Vercel.
- Then input the admin password as "AdminOnly1234".
- Upload your API key and PDF for smooth operation.

1. Clone the repository: `git clone https://github.com/your-username/reactnode-ai-interviewer.git`
2. Install the required dependencies: `npm install`
3. Run the application: `npm start`
4. Access the ReactNode AI Interviewer at `http://localhost:3000`

## Docker Deployment

This project is also Dockerized, allowing easy deployment in containers. To run the application using Docker, follow these steps:

1. Make sure you have Docker installed and running on your system.
2. Build the Docker image: `docker build -t reactnode-ai-interviewer .`
3. Run the Docker container: `docker run -p 3000:3000 reactnode-ai-interviewer`

## Deployed on Google Cloud Functions

The backend Node.js code has been deployed on Google Cloud Functions to provide a scalable and serverless environment. The Docker container is used to deploy the application on Google Cloud Functions.

## Contributing

We welcome contributions from the community! To contribute to ReactNode AI Interviewer, follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## Support

If you encounter any issues or have questions, feel free to [open an issue](https://github.com/your-username/reactnode-ai-interviewer/issues). We'll be happy to assist you!

## Future Features Plans

- We are planning to add a feature of uploading a resume and taking interviews based on it.

## License

This project is licensed under the [MIT License](LICENSE).

---

Let ReactNode AI Interviewer elevate your tech interviews to a whole new level! 🚀 Join the tech hiring revolution with us!

[Follow us on Twitter](https://twitter.com/reactnode_ai) | [Visit our Website](https://www.reactnodeai-interviewer.com)
