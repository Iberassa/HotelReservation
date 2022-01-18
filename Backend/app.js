const createError = require('http-errors');
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hotelReservation-db')
.catch(error=>console.log(error, 'Database connection error' )) 


const bookingRouter = require('./routes/booking');
const usersRouter = require('./routes/users');
const roomRouter = require('./routes/room');

const app = express();



app.use(cors());
app.use(express.json());

app.use('/booking', bookingRouter);
app.use('/users', usersRouter);
app.use('/rooms',roomRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000,()=>{
  console.log("App Started")
})
