/*DHT description*/
document.addEventListener("DOMContentLoaded", function() {
    const descContainer1 = document.querySelector(".desc-container#dht");
    const descContent1 = {
        "overview": `
            <h3>Overview:</h3>
            <br><br>
            <p style="margin-top: 20px; margin-left: -15px;">&nbsp;The DHT Robot offers real-time environmental monitoring, ensuring precise tracking of temperature and humidity for optimal conditions.</p>
        `,
        "key_features": `
            <h3>Key Features:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Accurate Measurements: Real-time data provided by high-precision sensors.</li>
                <li>User-Friendly Interface: Easy setup and intuitive operation.</li>
                <li>Real-Time Alerts: Immediate notifications for critical thresholds.</li>
                <li>Data Logging: Automatic storage for detailed analysis and trend tracking.</li>
                <li>Compact Design: Suitable for various settings.</li>
            </ul>
        `,
        "benefits": `
            <h3>Benefits:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Improved Comfort: Maintains comfortable environments.</li>
                <li>Enhanced Productivity: Crucial for precise climate control.</li>
                <li>Damage Prevention: Protects against environmental fluctuations.</li>
                <li>Health and Safety: Supports well-being in any space.</li>
            </ul>        `,
        "applications": `
            <h3>Applications:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Home and Office: Ensures a healthy indoor environment.</li>
                <li>Greenhouses and Gardens: Provides optimal conditions for plant growth.</li>
                <li>Warehouses: Safeguards goods from environmental damage.</li>
                <li>Laboratories: Ensures precise conditions for experiments.</li>
                <li>Data Centers: Prevents overheating of sensitive equipment.</li>
            </ul>               `,
        "specifications": `
            <h3>Specifications:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Sensor Type: DHT22</li>
                <li>Temperature Range: -40 to 80°C (-40 to 176°F)</li>
                <li>Humidity Range: 0 to 100% RH</li>
                <li>Power Supply: USB or battery-powered</li>
                <li>Connectivity: Wi-Fi/Bluetooth for remote monitoring</li>
                <li>Dimensions : 10 cm<sup>3</sup></li>
                <li>Weight: 100 mg</li>
            </ul>
        `,
        "box_content": `
            <h3>What’s in the Box:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li> 1x DHT Robot</li>
                <li>1 x User Manual</li>
                <li>1 x USB Cable</li>
                <li>1 x Mounting Kit</li>
            </ul>
        `
    };



    document.querySelectorAll(".product-details#dht ul li a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const key = this.className;
            if (descContent1[key]) {
                descContainer1.innerHTML = descContent1[key];
            }
        });
    });
});

/*SPD description*/

document.addEventListener("DOMContentLoaded", function() {
    const descContainer2 = document.querySelector(".desc-container#spd");
    const descContent2 = {
        "overview": `
            <h3>Overview:</h3>
            <br><br>
            <p style="margin-top: 20px; margin-left: -15px;">&nbsp;The SPD Sensor offers real-time speed monitoring, ensuring precise tracking of speed levels for optimal performance in various applications.</p>
        `,
        "key_features": `
            <h3>Key Features:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Accurate Measurements: Utilizes high-precision sensors to deliver real-time speed data.</li>
                <li>User-Friendly Interface: Easy setup and intuitive operation.</li>
                <li>Real-Time Alerts: Receive instant notifications if speed levels go beyond predefined thresholds.</li>
                <li>Data Logging: Automatically records and stores data for future analysis and trend tracking.</li>
                <li>Compact Design: Sleek and compact design makes it ideal for use in various settings.</li>
            </ul>
        `,
        "benefits": `
            <h3>Benefits:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Improved Performance: Maintain optimal speed levels to enhance efficiency and productivity.</li>
                <li>Enhanced Safety: Ideal for environments where precise speed control is crucial.</li>
                <li>Prevent Damage: Protect equipment and ensure safety by monitoring and controlling speed effectively.</li>
                <li>Data-Driven Decisions: Use recorded data to analyze trends and make informed decisions for improvements.</li>
            </ul>
        `,
        "applications": `
            <h3>Applications:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Industrial Automation: Ensure machinery operates at optimal speeds for maximum efficiency.</li>
                <li>Automotive Testing: Monitor vehicle speeds in real-time for testing and development.</li>
                <li>Research and Development: Collect accurate speed data for experiments and product development.</li>
                <li>Transportation: Track and control the speed of vehicles to ensure safety and compliance.</li>
                <li>Sports and Fitness: Monitor and analyze speed in athletic training and performance.</li>
            </ul>
        `,
        "specifications": `
            <h3>Specifications:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Sensor Type: SPD22</li>
                <li>Speed Range: 0 to 300 km/h (0 to 186 mph)</li>
                <li>Accuracy: ±0.1 km/h</li>
                <li>Power Supply: USB or battery-powered</li>
                <li>Connectivity: Wi-Fi/Bluetooth for remote monitoring</li>
                <li>Dimensions: [Insert dimensions]</li>
                <li>Weight: [Insert weight]</li>
            </ul>
        `,
        "box_content": `
            <h3>What’s in the Box:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>1 x SPD Sensor</li>
                <li>1 x User Manual</li>
                <li>1 x USB Cable</li>
                <li>1 x Mounting Kit</li>
            </ul>
        `
    };
    



    document.querySelectorAll(".product-details#spd ul li a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const key = this.className;
            if (descContent2[key]) {
                descContainer2.innerHTML = descContent2[key];
            }
        });
    });
});

/*WTR description*/

document.addEventListener("DOMContentLoaded", function() {
    const descContainer3 = document.querySelector(".desc-container#wtr");
    const descContent3 = {
        "overview": `
            <h3>Overview:</h3>
            <br><br>
            <p style="margin-top: 20px; margin-left: -15px;">&nbsp;The WTR Sensor offers real-time water level monitoring, ensuring precise tracking of water levels for optimal water management in various applications.</p>
        `,
        "key_features": `
            <h3>Key Features:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Accurate Measurements: Utilizes high-precision sensors to deliver real-time water level data.</li>
                <li>User-Friendly Interface: Easy setup and intuitive operation.</li>
                <li>Real-Time Alerts: Receive instant notifications if water levels go beyond predefined thresholds.</li>
                <li>Data Logging: Automatically records and stores data for future analysis and trend tracking.</li>
                <li>Durable Design: Built to withstand harsh environments and ensure longevity.</li>
            </ul>
        `,
        "benefits": `
            <h3>Benefits:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Efficient Water Management: Maintain optimal water levels to enhance efficiency and prevent wastage.</li>
                <li>Enhanced Safety: Ideal for environments where precise water level control is crucial.</li>
                <li>Prevent Damage: Protect property and ensure safety by monitoring and controlling water levels effectively.</li>
                <li>Data-Driven Decisions: Use recorded data to analyze trends and make informed decisions for improvements.</li>
            </ul>
        `,
        "applications": `
            <h3>Applications:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Agriculture: Ensure optimal water levels for crop irrigation.</li>
                <li>Industrial Processes: Monitor water levels in tanks and reservoirs.</li>
                <li>Flood Monitoring: Track water levels in real-time to prevent flooding.</li>
                <li>Water Treatment Plants: Ensure precise water level control for treatment processes.</li>
                <li>Residential: Monitor water levels in swimming pools, ponds, and water tanks.</li>
            </ul>
        `,
        "specifications": `
            <h3>Specifications:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>Sensor Type: WTR22</li>
                <li>Water Level Range: 0 to 10 meters (0 to 32.8 feet)</li>
                <li>Accuracy: ±0.01 meter</li>
                <li>Power Supply: USB or battery-powered</li>
                <li>Connectivity: Wi-Fi/Bluetooth for remote monitoring</li>
                <li>Dimensions: [Insert dimensions]</li>
                <li>Weight: [Insert weight]</li>
            </ul>
        `,
        "box_content": `
            <h3>What’s in the Box:</h3>
            <br><br>
            <ul style="margin-top: 20px;">
                <li>1 x WTR Sensor</li>
                <li>1 x User Manual</li>
                <li>1 x USB Cable</li>
                <li>1 x Mounting Kit</li>
            </ul>
        `
    };

    document.querySelectorAll(".product-details#wtr ul li a").forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const key = this.className;
            if (descContent3[key]) {
                descContainer3.innerHTML = descContent3[key];
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const dhtButton = document.getElementById("dht-button");
    const spdButton = document.getElementById("spd-button");
    const wtrButton = document.getElementById("wtr-button");


    setupBuyNowButton(dhtButton, "DHT Robot");
    setupBuyNowButton(spdButton, "SPD Robot");
    setupBuyNowButton(wtrButton, "WTR Robot");
});




