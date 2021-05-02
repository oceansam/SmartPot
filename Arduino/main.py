# Web server stuff
import time
import serial
import requests
from flask import Flask
from flask import jsonify
from flask import request
import json

app = Flask(__name__)

serverUrl = "http://a5afe64868ec.ngrok.io"


@app.route("/stats")
def stats():
    data = update()
    return jsonify(data)


@app.route("/event", methods=["POST"])
# Handles events for the arduino to execute
def event():
    data = request.json
    print(data)
    if(data["event"] == "water"):
        # WATER THE PLANT
        print("WATER THE PLANT")
    return jsonify(statusCode=200)


port = 'COM3'
baud = 9600
refresh = 300
while True:
    update()

    time.sleep(refresh)


def update():
    ser = serial.Serial(port, baud)
    moisture = float(ser.readline().decode())
    temp = float(ser.readline().decode())
    humidity = float(ser.readline().decode())
    data = {
        "moisture": moisture,
        "temp": temp,
        "humidity": humidity,
    }
    # print(moisture, "MOIST")
    # print(temp, "TEMP")
    # print(humidity, "HUMID")
    ser.close()
    return data


def waterNeeded():
    trig = {'event': "low-water"}

    x = requests.post(serverUrl+"/hook", data=trig)
    print(x.text)


if __name__ == "__main__":
    app.run(debug=True, port=6968)
