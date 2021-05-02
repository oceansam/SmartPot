import serial
import time
port = 'COM3'
baud = 9600
refresh = 300
while True:
    ser = serial.Serial(port, baud)
    moisture = float(ser.readline().decode())
    temp = float(ser.readline().decode())
    humidity = float(ser.readline().decode())
    print(moisture,"MOIST")
    print(temp,"TEMP")
    print(humidity,"HUMID")
    ser.close()
    time.sleep(300)

# def forceUpdate():            THIS IS WHAT A FORCE UPDATE WOULD LOOK LIKE
#     ser = serial.Serial(port, baud)
#     moisture = ser.readline()
#     temp = ser.readline()
#     humidity = ser.readline()
#     moisture = float(moisture.decode())
#     temp = float(temp.decode())
#     humidity = float(humidity.decode())
#     print(moisture,"MOIST")
#     print(temp,"TEMP")
#     print(humidity,"HUMID")
#     ser.close()