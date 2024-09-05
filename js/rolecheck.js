if(localStorage.getItem("role")!=null&&
    localStorage.getItem("name")!=null && 
    localStorage.getItem("surname")!=null &&
    localStorage.getItem("username")!=null &&
    localStorage.getItem("password")!=null){










        if(localStorage.getItem("role")==0){
            
        }
        else if(localStorage.getItem("role")==1){
            
        }
        else if(localStorage.getItem("role")==2){
            
            table=document.createElement("table");
            //If a secretary logged in
            table.className="table1";
            fetch("http://localhost:5001/Patient")
            .then(o=>o.json())
            .then(obj=>{
                obj.forEach(e => {
                    row=document.createElement("tr");
                    
                    id1=document.createElement("td");
                    id1.appendChild(document.createTextNode(e[0]));
                    row.appendChild(id1);
                    name1=document.createElement("td");
                    name1.appendChild(document.createTextNode(e[1]));
                    row.appendChild(name1);
                    surname1=document.createElement("td");
                    surname1.appendChild(document.createTextNode(e[2]));
                    row.appendChild(surname1);
                    birthdate1=document.createElement("td");
                    birthdate1.appendChild(document.createTextNode(e[3]));
                    row.appendChild(birthdate1)
                    birthloc1=document.createElement("td");
                    birthloc1.appendChild(document.createTextNode(e[4]));
                    row.appendChild(birthloc1);
                    table.appendChild(row);
                });
            }).catch(e=>e)
            
            div1=document.querySelector("nav");
            document.body.insertBefore(table,div1);
            div1.remove()
            
            button_div=document.createElement("div");
            button_div.style="display: flex;flex-direction: row;justify-content: center;align-items: center;";
            
            create_button=document.createElement("button");
            create_button.appendChild(document.createTextNode("Create A Patient"));
            create_button.type="button";
            create_button.className="btn btn-success m-1";
            
            delete_button=document.createElement("button");
            delete_button.appendChild(document.createTextNode("Delete A Patient"))
            delete_button.type="button";
            delete_button.className="btn btn-danger m-1";
            console.log("ım here");
            button_div.appendChild(create_button);
            button_div.appendChild(delete_button);
            console.log(button_div);

            footer_part=document.querySelector("footer");
            
            document.body.insertBefore(button_div,footer_part);


            //create Patient
            create_button1=document.querySelector(".btn-success")
            create_button1.addEventListener("click",()=>{
                location.replace("pt/createPatient.html");
            });
            //deletePatient
            delete_button1=document.querySelector(".btn-danger")
            delete_button1.addEventListener("click",()=>{
                location.replace("pt/deletePatient.html");
            });





        }
    }