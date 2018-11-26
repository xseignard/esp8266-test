#include <ESP8266HTTPClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>

void setup() {
	Serial.begin(115200);
	WiFi.begin("ECV", "esperluette");
	while (WiFi.status() != WL_CONNECTED) {
		Serial.println(".");
		delay(500);
	}
}

void loop() {
	if (WiFi.status() == WL_CONNECTED) {
		StaticJsonBuffer<300> JSONbuffer;
		JsonObject& JSONencoder = JSONbuffer.createObject();
		JSONencoder["name"] = "test";
		JsonArray& values = JSONencoder.createNestedArray("values");
		values.add(random(100));
		values.add(random(100));
		values.add(random(100));
		char JSONmessageBuffer[300];
		JSONencoder.prettyPrintTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));
		Serial.println(JSONmessageBuffer);
		HTTPClient http;
		http.begin("http://192.168.4.29:3000/api");
		http.addHeader("Content-Type", "application/json");
		int httpCode = http.POST(JSONmessageBuffer);
		String payload = http.getString();
		Serial.println(httpCode);
		Serial.println(payload);
		http.end();
	}
	delay(5000);
}
