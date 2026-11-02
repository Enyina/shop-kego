# Shop@Kego — personal e-commerce project

An earlier Node.js/Express and MongoDB shopping project, kept as part of my engineering history. It is not presented as a production-ready checkout service.

## Startup

The application reads `.env` **before** importing its database-connected Express app. Set a valid `PORT` if needed; otherwise it uses port `5000`.

```sh
npm install
npm test
npm start
```

The startup checks use Node's built-in test runner and do **not** connect to a database or a payment provider. Starting the app normally still requires its original database and integration configuration. Keep credentials in your local environment; never commit them.

## What needs work next

The current dependency tree targets an older Node runtime. The separate client and server repositories need to be reconciled before further refactoring so we know which is the maintained source. A realistic portfolio refresh should demonstrate a full product-to-cart-to-checkout journey with safe authentication, inventory checks, price integrity, failure recovery, accessibility and browser tests.

No live checkout, deployment, security audit or payment processing is claimed. Avoid using real card details or personal data in this learning app.
