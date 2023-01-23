const express = require('express');
const payload = require('payload');
const router = express.Router();
require('dotenv').config();
const app = express();
const cors = require("cors")
const passport = require('./config/passport')()


//middleware
app.use('/api', router)
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(passport.initialize())


// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

//controllers
const userCtrl = require('./controllers/users')
const commentsCtrl = require('./controllers/comments')

//use controllers
app.use('/user', userCtrl);
app.use('/comment', commentsCtrl);

// Add your own express routes here

router.get('/Posts-Posts', (req, res) => {
  res.json(Posts);
});


app.listen(PORT);

