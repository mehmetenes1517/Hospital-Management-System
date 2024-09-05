from flask import Flask,jsonify,request
from flask_cors import CORS
import sqlite3
import sys
app=Flask(__name__)
CORS(app)
database_name="hospital_database.db"

@app.route("/Patient",methods=["GET","POST","DELETE"])
def CreatePatient():
    connection=sqlite3.connect(database_name)
    cursor=connection.cursor()
    if request.method=="GET":
        patient_list=cursor.execute("SELECT * FROM patients").fetchall()    
        return jsonify(patient_list),200
    if request.method=="POST":
        req=request.get_json()
        
        id=len(cursor.execute("SELECT * FROM patients").fetchall())
        cursor.execute(f"INSERT INTO patients VALUES({id},'{req["name"]}','{req["surname"]}','{req["birthdate"]}','{req["birthloc"]}');")
        connection.commit()
        return "Patient is added successfully",200
    if request.method=="DELETE":
        req=request.get_json()
        cursor.execute(f"DELETE FROM patients WHERE id={req["id"]}")
        connection.commit()
        return "Patient Deleted Successfully",200
    else:
        return "Invalid Operation",404

if __name__=="__main__":
    print(sys.argv[1])
    app.run(port=sys.argv[1])

















if __name__=="__main__":
    app.run()
