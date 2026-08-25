# Random-Quote

Simple Random Quote application for practicing CI/CD with GitHub Actions, Docker and Render. 

## CI/CD Pipeline



\- \*\*CI\*\*: Runs on every Pull Request and push to `main` — installs dependencies, runs tests, and builds the Docker image.

\- \*\*CD\*\*: After a successful merge to `main`, the `deploy` job triggers a Render deploy via a secured Deploy Hook (stored in GitHub Actions secrets).



\## Team Contributions

\- Member 1: Backend (Express API) + initial CI

\- Member 2: Frontend + Dockerfile + Docker CI verification

\- Member 3: Render deployment + Continuous Deployment (CD)



\## Live URL

https://random-quote-rir8.onrender.com/

