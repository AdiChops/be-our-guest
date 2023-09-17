import serial

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
            break
ser.close()
# api call
print("made an api call")