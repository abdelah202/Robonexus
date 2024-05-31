![RoboNexus Logo](screenshots/logo.png)

# RoboNexus - Conception de Robots et Données en Temps Réel 

RoboNexus is a responsive website dedicated to the sale and custom design of robots. This project combines modern web technologies and design principles to create an engaging and functional online presence for RoboNexus.

## Team Members

MALKI Abdellah - ELKOUSSAMI Khalid - OUABDERH Mohamed - TAOUIL Abdellah

## Features

- **Responsive Navigation Bar:** The navigation bar transforms into a menu icon on smaller screens for a seamless browsing experience across all devices.
- **Image Slider:** A dynamic image slider showcases various robot models, changing images every 10 seconds or when clicked.
- **Service Sections:** Dedicated sections provide detailed information on robot sales and custom design services, ensuring customers can easily find the products and services they need.
- **Track Your Robot:** A crucial feature allowing users to authenticate with a robot/sensor ID and access real-time data about their robots.
- **Contact and About Sections:** Informative sections about RoboNexus and contact details for customer support and inquiries.
- **Login Page for Tracking:** A simple, secure login page where users can enter an identifier code to track their robots, with a background image to enhance the visual appeal.

## Track Your Robot
### Presentation 
The "Track Your Robot" feature is an essential part of RoboNexus. It allows users to:
- **Authenticate with an Identifier Code:** Users can enter the unique identifier code provided with their sensor.
- **Access Real-Time Data:** Once authenticated, users can view real-time data about their sensors, such as temperature, speed, humidity, water flow, etc., depending on the sensor type.
- **User-Friendly Interface:** The tracking page features a simple and intuitive interface to ensure users can easily access the information they need.

          +---------------+                +-------------------+
          |               |                |                   |
          |   Browser     | <------------> |    Express.js     |
          | (Client Side) |                | (Server Side App) |
          |               |                |                   |
          +---------------+                +-------------------+
                   ^                                |
                   |                                |
                   v                                v
          +---------------+                +-------------------+
          |               |                |                   |
          |   Login Form  |                |  Sensor Data API  |
          | (track.html)  |                |  Endpoints        |
          |               |                |                   |
          +---------------+                +-------------------+
                   ^                                |
                   |                                |
                   v                                v
          +---------------+                +-------------------+
          |               |                |                   |
          | Sensor Data   | <------------> | MySQL Database    |
          | Display (EJS) |                |                   |
          | (sensor.ejs)  |                |                   |
          +---------------+                +-------------------+
                   ^
                   |
                   v
          +---------------+
          |               |
          | Sensor Data   |
          |     ESP32     |
          | or simulate.js|
          |               |
          +---------------+

### Dependencies Needed
![] (https://github.com/m-elhamlaoui/projet-web-robonexus/blob/main/screenshots/giphy.gif)

**1 Install Node.js and npm:**
	Download and install Node.js from nodejs.org. This will also install npm (Node Package Manager).

**2 Set up your project directory:**
	Create a new directory for your project and navigate into it.
	Initialize a new Node.js project by running npm init -y in the terminal. This will create a package.json file.

**3 Install required dependencies**
	- express: A web framework for Node.js.
	- mysql: A MySQL client for Node.js.
	- body-parser: Middleware to parse incoming request bodies.
	- axios: A promise-based HTTP client.
	- ejs: Embedded JavaScript templates.
	
	npm install express mysql body-parser axios ejs

**4 Set up your MySQL database:**
	Make sure you have MySQL installed and running on your machine.
	Create the sensors database and the necessary tables (loginrobot and any other tables you need).
	
	use sensors;
	create table if not exists loginrobot(
		robot_id int not null primary key auto_increment,
		robot_type varchar(255),
		robot_pass varchar(255)
	)

	!!!NB : don't forget to change the password in app.js
	
**5 start the applications**
	
 	node app.js
 
	cd esp32-simulator
	node simulate.js

## Technologies Used

- HTML5
- CSS3
- JavaScript
- MySQL
- jQuery
- Node js

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/RoboNexus.git
    ```
2. Navigate to the project directory:
    ```bash
    cd RoboNexus
    ```
3. Open `index.html` in your preferred web browser.

## Usage

- **Navigation:** Use the navigation bar to browse different sections of the website.
- **Slider:** The image slider will automatically change images every 10 seconds. Click on the slider to manually change the image.
- **Track Your Robot:** Click on the "Track ton robot" button to go to the tracking page, where you can enter your robot's identifier code to get real-time information.
- **Login Page:** The login page is accessible via the "Track ton robot" button and features a background image for enhanced visual appeal.

## Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Track Your Robot
![Track Your Robot](screenshots/track.png)


---
