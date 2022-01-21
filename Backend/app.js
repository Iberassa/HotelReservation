const createError = require('http-errors');
const express = require('express');
const path = require("path");
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const app_path = '../HotelFrontend/dist/Frontend';


const port = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://Indrias:${process.env.DATABASE_PASSWORD}@cluster0.bi0vl.mongodb.net/hotelReservation-db?retryWrites=true&w=majority`)
  .catch(error => console.log(error, 'Database connection error'))



const bookingRouter = require('./routes/booking');
const usersRouter = require('./routes/users');
const roomRouter = require('./routes/room');

const app = express();



app.use(cors());
app.use(express.json());
app.use('/',express.static(path.join(__dirname,app_path)));

app.use('/admin', usersRouter);
app.use('/booking', bookingRouter);
app.use('/rooms', roomRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log("App Started")
})
