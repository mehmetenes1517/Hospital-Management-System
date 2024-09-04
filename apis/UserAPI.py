from flask import Flask,request,redirect,jsonify
from flask_cors import CORS
import sys
from hashlib import md5
import sqlite3
app=Flask(__name__)
CORS(app)
database_name="hospital_database.db"


def encrypt_password(password):
    return md5(password)

@app.route("/Doctor",methods=["POST","GET"])
def Doctor():
    connection=sqlite3.connect(database_name)
    cursor=connection.cursor()
    if request.method=="GET":
        
        try:
            doctors=cursor.execute("SELECT * FROM doctors").fetchall()
            return jsonify(doctors),200
        except:
            return "Error",400


    if request.method=="POST":
        try:
            count=len(cursor.execute("SELECT * FROM doctors").fetchall())
            print(count)
            id=int(count)

            a=request.get_json()
            print(a)


            name=a["name"].strip()
            surname=a["surname"].strip()
            username=a["username"].strip()
            is_user_exist=len(cursor.execute(f"SELECT * FROM doctors WHERE username='{username}'").fetchall())
            if(is_user_exist):
                return "This User Already Exist",406
            password=a["password"].strip()

            doctor_object={
                "id":id,
                "name":name,
                "surname":surname,
                "username":username,
                "password":password
            }
            cursor.execute(f"INSERT INTO doctors VALUES({id},'{name.strip()}','{surname.strip()}','{username.strip()}','{encrypt_password(password.strip().encode()).hexdigest().strip()}');")
            connection.commit()
            return jsonify(doctor_object),200
        except Exception as e:
            return str(e),400
@app.route("/DoctorCheck",methods=["POST"])
def DoctorLogin():
    if request.method=="POST":
        try:
            connection=sqlite3.connect(database_name)
            cursor=connection.cursor()
            a=request.get_json()
            username=a["username"].strip()
            password=a["password"].strip()
            doctor_object=cursor.execute(f"SELECT * FROM doctors WHERE username='{username}'").fetchone()
            if(doctor_object[4]==md5(password.encode()).hexdigest()):
                return "True",202
            
            return "False",404

        except Exception as e:
            return e,404
@app.route("/GetDoctor",methods=["POST"])
def getDoctor():
    if request.method=="POST":
        obj=request.get_json()
        connection=sqlite3.connect(database_name)
        cursor=sqlite3.Cursor(connection)
        user=cursor.execute(f"SELECT * FROM doctors WHERE username='{obj["username"]}';").fetchone()
        if(user!=""):
            return jsonify(user),200
        return "Error",400

@app.route("/Manager",methods=["POST","GET"])
def Manager():
    connection=sqlite3.connect(database_name)
    cursor=connection.cursor()
    if request.method=="GET":
        
        try:
            managers=cursor.execute("SELECT * FROM managers").fetchall()
            return jsonify(managers),200
        except:
            return "Error",400


    if request.method=="POST":
        try:
            count=len(cursor.execute("SELECT * FROM managers").fetchall())
            print(count)
            id=int(count)

            a=request.get_json()


            username=a["username"].strip()
            print(username)
            is_user_exist=len(cursor.execute(f"SELECT * FROM managers WHERE username='{username}'").fetchall())
            
            if(is_user_exist):
                return "This User Already Exist",406

            password=a["password"].strip()
            manager_object={
                "id":id,
                "username":username,
                "password":password
            }
            cursor.execute(f"INSERT INTO managers VALUES({id},'{username.strip()}','{encrypt_password(password.strip().encode()).hexdigest().strip()}');")
            connection.commit()
            
            return jsonify(manager_object),200
        except Exception as e:
            print(e)
            return str(e),400
@app.route("/ManagerCheck",methods=["POST"])
def ManagerLogin():
    if request.method=="POST":
        try:
            connection=sqlite3.connect(database_name)
            cursor=connection.cursor()
            a=request.get_json()
            username=a["username"].strip()
            password=a["password"].strip()
            manager_object=cursor.execute(f"SELECT * FROM managers WHERE username='{username}'").fetchone()
            if(manager_object[2]==md5(password.encode()).hexdigest()):
                return "True",202
            
            return "False",404

        except Exception as e:
            return e,404
@app.route("/GetManager",methods=["POST"])
def getManager():
    if request.method=="POST":
        obj=request.get_json()
        connection=sqlite3.connect(database_name)
        cursor=sqlite3.Cursor(connection)
        user=cursor.execute(f"SELECT * FROM managers WHERE username='{obj["username"]}';").fetchone()
        if(user!=""):
            return jsonify(user),200
        return "Error",400

@app.route("/Secretary",methods=["POST","GET"])
def Secretary():
    connection=sqlite3.connect(database_name)
    cursor=connection.cursor()
    if request.method=="GET":
        
        try:
            doctors=cursor.execute("SELECT * FROM secretaries").fetchall()
            return jsonify(doctors),200
        except:
            return "Error",400


    if request.method=="POST":
        try:
            count=len(cursor.execute("SELECT * FROM secretaries").fetchall())
            print(count)
            id=int(count)
            a=request.get_json()
            name=a["name"].strip()
            surname=a["surname"].strip()
            username=a["username"].strip()
            is_user_exist=len(cursor.execute(f"SELECT * FROM secretaries WHERE username='{username}'").fetchall())
            if(is_user_exist):
                return "This User Already Exist",406
            password=a["password"].strip()

            doctor_object={
                "id":id,
                "name":name,
                "surname":surname,
                "username":username,
                "password":password
            }
            cursor.execute(f"INSERT INTO secretaries VALUES({id},'{name.strip()}','{surname.strip()}','{username.strip()}','{encrypt_password(password.strip().encode()).hexdigest().strip()}');")
            connection.commit()
            return jsonify(doctor_object),200
        except Exception as e:
            return str(e),400
@app.route("/SecretaryCheck",methods=["POST"])
def SecretaryLogin():
    if request.method=="POST":
        try:
            connection=sqlite3.connect(database_name)
            cursor=connection.cursor()
            a=request.get_json()
            username=a["username"].strip()
            password=a["password"].strip()
            doctor_object=cursor.execute(f"SELECT * FROM secretaries WHERE username='{username}'").fetchone()
            if(doctor_object[4]==md5(password.encode()).hexdigest()):
                return "True",202
            
            return "False",404

        except Exception as e:
            return e,404
@app.route("/GetSecretary",methods=["POST"])
def getSecretary():
    if request.method=="POST":
        obj=request.get_json()
        connection=sqlite3.connect(database_name)
        cursor=sqlite3.Cursor(connection)
        user=cursor.execute(f"SELECT * FROM secretaries WHERE username='{obj["username"]}';").fetchone()
        if(user!=""):
            return jsonify(user),200
        return "Error",400


if __name__=="__main__":
    print(sys.argv[1])
    app.run(port=sys.argv[1])



