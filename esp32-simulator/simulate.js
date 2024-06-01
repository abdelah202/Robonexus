const axios = require('axios');

const simulateSensorData = () => {
  const sensors = [
    { id: '123456', type: 'DHT', data: { temperature: Math.random() * 30, humidity: Math.random() * 100 } },
    { id: '235874', type: 'DHT', data: { temperature: Math.random() * 30, humidity: Math.random() * 100 } },
    { id: '282828', type: 'SPD', data: { speed: Math.random() * 100 } },
    { id: '123456', type: 'SPD', data: { speed: Math.random() * 100 } },
    { id: '000000', type: 'WTR', data: { waterLevel: Math.random() * 100 } }
  ];

  sensors.forEach(sensor => {
    const payload = {
      sensorId: sensor.id,
      type: sensor.type
    };

    if (sensor.type === 'DHT') {
      payload.temperature = sensor.data.temperature;
      payload.humidity = sensor.data.humidity;
    } else if (sensor.type === 'SPD') {
      payload.speed = sensor.data.speed;
    } else if (sensor.type === 'WTR') {
      payload.waterLevel = sensor.data.waterLevel;
    }

    axios.post('http://localhost:2800/api/data', payload)
      .then(response => {
        console.log(`Data sent for sensor ${sensor.id}:`, response.data);
      })
      .catch(error => {
        console.error(`Error sending data for sensor ${sensor.id}:`, error.message);
      });
  });
};

setInterval(simulateSensorData, 5000); // Send data every 5 seconds
