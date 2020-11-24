var mqtt=require("mqtt");

const MQTT_SERVER="localhost";
const MQTT_PORT="1883";

const MQTT_USER="may";
const MQTT_PASSWORD="123456";

var client=mqtt.connect({
	host: MQTT_SERVER,
	port: MQTT_PORT,
	username: MQTT_USER,
	password: MQTT_PASSWORD
});

client.on('connect',()=>{
	console.log("MQTT Connect");
	client.subscribe('mqtt',(err)=>{
		if(err)console.log(err);
	});
});

client.on('message',(topic,message)=>{
	console.log(topic.toString()+" : "+message.toString());
});

setInterval(()=>{
	client.publish("mqtt","Hi from NodeJS");
},5000);
