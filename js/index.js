buttons=document.querySelectorAll(".link-button");

buttonslist=[];

for(i=0;i<buttons.length;i++){
    if(i!=0){
        buttonslist.push(buttons[i])
    }
}
if(localStorage.getItem("role")!=null&&
    localStorage.getItem("name")!=null && 
    localStorage.getItem("surname")!=null &&
    localStorage.getItem("username")!=null &&
    localStorage.getItem("password")!=null){

        buttonslist[0].setAttribute("href","index.html");
        if(localStorage.getItem("role")==0){
            buttonslist[0].innerHTML=localStorage.getItem("username");
        }else{
            buttonslist[0].innerHTML=localStorage.getItem("name")+" "+localStorage.getItem("surname");
        }
        buttonslist[1].setAttribute("href","cls/clear.html");
        buttonslist[1].innerHTML="Logout";

        

        if(localStorage.getItem("role")==0){

        }
        else if(localStorage.getItem("role")==1){
            
        }
        else if(localStorage.getItem("role")==2){

            table=document.createElement("table");
            //If a secretary logged in
            table.class="table1";
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
            



            




            













        }











    }