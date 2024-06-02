const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const app = express();
const encoder = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use("/assets", express.static("assets"));
app.use(express.json()); // For parsing application/json

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mdpbddhh",
  database: "sensors"
});

// Connect to the database
connection.connect(function(error) {
  if (error) throw error;
  else console.log("Connected to the database successfully");
});

// Store data for each sensor by ID
let sensorData = {};

// Serve the login page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'track.html'));
});

// Handle login and redirect based on sensor type
app.post("/", encoder, function(req, res) {
  var robottype = req.body.robottype;
  var robotid = req.body.robotid;
  connection.query("SELECT * FROM loginrobot WHERE robot_type = ? AND robot_pass = ?", [robottype, robotid], function(error, results, fields) {
    if (results.length > 0) {
      res.redirect(`/${robottype.toLowerCase()}?id=${robotid}`);
    } else {
      res.redirect("/nope.html");
    }
    res.end();
  });
});

// Serve the specific pages for each sensor type with dynamic data
app.get("/dht", function(req, res) {
  const sensorId = req.query.id;
  const data = sensorData[sensorId] || { temperature: '--', humidity: '--' };
  res.render("sensor", { sensorType: 'DHT', data: data, sensorId: sensorId });
});

app.get("/spd", function(req, res) {
  const sensorId = req.query.id;
  const data = sensorData[sensorId] || { speed: '--' };
  res.render("sensor", { sensorType: 'SPD', data: data, sensorId: sensorId });
});

app.get("/wtr", function(req, res) {
  const sensorId = req.query.id;
  const data = sensorData[sensorId] || { waterLevel: '--' };
  res.render("sensor", { sensorType: 'WTR', data: data, sensorId: sensorId });
});

// API endpoint to receive data from sensors
app.post("/api/data", (req, res) => {
  const { sensorId, temperature, humidity, speed, waterLevel } = req.body;
  sensorData[sensorId] = { temperature, humidity, speed, waterLevel };
  console.log("Received sensor data:", sensorData[sensorId]);
  res.status(200).send("Data received");
});

// API endpoint to get data for a specific sensor
app.get("/api/data/:sensorId", (req, res) => {
  const sensorId = req.params.sensorId;
  const data = sensorData[sensorId] || {};
  res.json(data);
});

// Handle newsletter subscription
app.post("/subscribe", (req, res) => {
  const email = req.body.email;
  if (!email) {
      return res.status(400).send("Email is required");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      return res.status(400).send("Invalid email format");
  }

  connection.query("INSERT INTO newsletter (email) VALUES (?)", [email], (error, results) => {
      if (error) {
          if (error.code === 'ER_DUP_ENTRY') {
              return res.status(400).send("Email already subscribed");
          }
          return res.status(500).send("Server error");
      }
      res.status(200).send("Successfully subscribed");
  });
});

// Handle contact form submission
app.post("/send-email", (req, res) => {
  const { name, emaill, message } = req.body;

  console.log('Name:', name);
  console.log('Email:', emaill);
  console.log('Message:', message);

  // Set up the email transporter
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'robonexus@hotmail.com',
      pass: 'Robo@Nexus2024**',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'robonexus@hotmail.com',
    to: 'robonexus2024@gmail.com',
    subject: `Contact Us Message from ${name}`,
    text: `Name: ${name}\nEmail: ${emaill}\nMessage: ${message}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Handle custom order form submission
app.post("/submit-custom-order", (req, res) => {
  const {
    robotType,
    mainBoard,
    sensors,
    actuators,
    description,
    name,
    phone,
    email,
    address
  } = req.body;

  // Set up the email transporter
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'robonexus@hotmail.com',
      pass: 'Robo@Nexus2024**',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'robonexus@hotmail.com',
    to: 'robonexus2024@gmail.com',
    subject: 'New Order',
    text: `Robot Type: ${robotType}\nMain Board: ${mainBoard}\nSensors: ${sensors.join(', ')}\nActuators: ${actuators.join(', ')}\nDescription: ${description}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);

      // Insert the data into the 'orders' table
      const query = "INSERT INTO orders (robotType, mainBoard, sensors, actuators, description, name, phone, email, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      connection.query(query, [robotType, mainBoard, sensors.join(', '), actuators.join(', '), description, name, phone, email, address], (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error saving order');
        } else {
          res.status(200).send('Order submitted successfully');
        }
      });
    }
  });
});


// Set app port
app.listen(2800, function() {
  console.log("Server running on port 2800");
});
