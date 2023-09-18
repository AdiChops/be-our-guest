import serial
import requests

# import serial.tools.list_ports as ports

# com_ports = list(ports.comports())  # create a list of com ['COM1','COM2']
# for i in com_ports:
#     print(i.device)  # returns 'COMx'

ser = serial.Serial(port="COM5", baudrate=9600)
while True:
    if (ser.inWaiting()>0):
        myData = ser.readline().decode('ascii')
        print(myData)
        if myData.strip() == "gesture":
            # break
            # api call
            url = 'http://localhost:5000/ready'  # Replace with the URL you want to send the request to

            # Send a GET request
            response = requests.get(url, headers={"Content-Type": "application/json; charset=utf-8"})