const express = require('express');
const mongoose = require("mongoose")
const app = express();
const port = process.env.PORT | 3000;
const userRoute = require("./routes/user");
const authRoute = require('./routes/auth');
const blogRoute = require('./routes/blog');
const emailRoute = require('./routes/email');
const contactusRoute = require('./routes/contactus');
const cors = require("cors")

const cron = require('node-cron')
// cron.schedule('*/1 * * * *', () => {
//     console.log('running a task every one minutes');
//   });

app.use(express.json())
app.use(cors())

// database connection
mongoose.connect('mongodb://localhost:27017/alif')
.then((res) => console.log("Connected to Database"))
.catch((err) => console.log(err))

// app route
app.use('/api/v1/user', userRoute);
app.use('/api/v1/login', authRoute);
app.use('/api/v1/blog', blogRoute);
app.use('/api/v1/email',emailRoute);
app.use('/api/v1/contactus', contactusRoute)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})