# 🚀 Cypress API Testing with GoRest Demo

[![Cypress](https://img.shields.io/badge/Cypress-Testing-9cf?logo=cypress)](https://www.cypress.io/)
[![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?logo=javascript)]
[![Portfolio Badge](https://img.shields.io/badge/My_Portfolio-Visit_Now-green?logo=notion&style=for-the-badge)](https://tasteful-grape-0c4.notion.site/Hripsime-QA-Engineer-Portfolio-1f12cb0861fc80819f14d936f47643d5)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Hripsime-blue?logo=linkedin)](https://www.linkedin.com/in/hripsime-manukyan-0336901a0/)
[![GitHub](https://img.shields.io/badge/GitHub-Portfolio-black?logo=github)](https://github.com/HripsimeManukyan)

---

A portfolio-ready, real-world example of automated **API testing using Cypress** and the [GoRest public API](https://gorest.co.in/).  
This project uses `cy.request()` to perform direct API calls and demonstrates validation of request/response flows, dynamic test data, and authentication via token.

---

## ✨ Features

- ✅ Real API testing via `cy.request()`
- ✅ Covers CRUD operations on the `/users` endpoint
- ✅ Includes both positive and negative test scenarios
- ✅ Dynamic user data (timestamped email to avoid conflicts)
- ✅ Token-based authentication using Cypress environment variables
- ✅ Uses fixture for test data and custom command for auth headers
- ✅ Tests clean up after themselves (delete created users)

---

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone <https://github.com/HripsimeManukyan/cypress-api-crud-tests.git>
cd cypress-api-gorest
npm install
```

### 2. Get a GoRest API token

- Sign up and generate a free token: [GoRest API](https://gorest.co.in/consumer/login)

### 3. Add your token to `.env` (create if missing)

```
GOREST_TOKEN=your-access-token-here
```

> ⚠️ Never commit `.env` to version control!

---

## 🧪 What’s Covered

- **GET /users:**  
  Validate that the user list is returned correctly.

- **POST /users (Valid):**  
  Creates a user with a unique email and validates the response.

- **POST /users (Invalid):**  
  Attempts to create a user with an invalid email and expects a 422 error.

- **PUT /users/:id:**  
  Updates the user created in the test with new data.

- **DELETE /users/:id:**  
  Deletes the created user.

- **DELETE again (Negative):**  
  Tries to delete the same user again to verify 404 is returned.

- **Final GET /users:**  
  Ensures `/users` endpoint is still returning 200 after tests.

---

## 📊 Reporting with Mochawesome

This project uses [Mochawesome](https://github.com/adamgruber/mochawesome) for detailed test reporting. The reporter is configured in `cypress.config.js` with the following options:

```js
reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/results',
  overwrite: false,
  html: true,
  json: true
}
```

### 🗂 Output

* HTML and JSON reports will be generated in `cypress/results/`
* GitLab CI pipeline stores these reports as build artifacts (retained for 30 days)

### 📦 Install (already done in CI)

```bash
npm install mochawesome --save-dev
```

You can run tests and generate reports locally with:

```bash
npx cypress run --browser chrome
```

---

## 📝 Portfolio Highlights

- Clean and modular Cypress test structure
- Use of fixtures and environment variables
- Self-contained, self-cleaning test logic
- Ideal for showcasing API automation in interviews

---


## 📚 Resources

- [Cypress Docs](https://docs.cypress.io/)
- [GoRest API Docs](https://gorest.co.in/)

---

## 👤 Author

**Hripsime Manukyan**  
[LinkedIn](https://www.linkedin.com/in/hripsime-manukyan-0336901a0/)  
[Portfolio](https://tasteful-grape-0c4.notion.site/Hripsime-QA-Engineer-Portfolio-1f12cb0861fc80819f14d936f47643d5)

---

📌 _This project demonstrates strong understanding of Cypress API automation using real-world endpoints and secure practices._

