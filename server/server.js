const express = require('express');
const session = require('express-session');
const path = require('path');
const db = require('./config/connection');
const router = require('./routes');
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({ secret: 'this-is-my-secret', cookie: { expires: 1000 * 60 * 60 } })
);
app.use(router);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
  });
});
