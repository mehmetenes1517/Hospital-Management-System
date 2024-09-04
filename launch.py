
import threading,time
import os
def Run_UserAPI():
    os.system("xterm -e python3 apis/UserAPI.py 5000")
def Run_PatientAPI():
    os.system("xterm -e python3 apis/PatientAPI.py 5001")
def Run_HttpServer():
    os.system("xterm -e python3 -m http.server")

thr0=threading.Thread(target=Run_HttpServer)
thr0.start()

time.sleep(2)
print("APIs are launching ... Please Wait")
time.sleep(3)
thr1=threading.Thread(target=Run_UserAPI)
thr1.start()

time.sleep(2)

thr2=threading.Thread(target=Run_PatientAPI)
thr2.start()
