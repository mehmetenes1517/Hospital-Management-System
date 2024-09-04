username_box=document.querySelector("#username");
password_box=document.querySelector("#password");


is_doctor=document.querySelector("#doctor");
is_secretary=document.querySelector("#secretary");
is_manager=document.querySelector("#manager");


button=document.querySelector("#login-button");


function release_cookies(){
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("surname");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
}

function set_doc_cookies(){
    fetch("http://localhost:5000/GetDoctor",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "username":username_box.value
        })
    }).then(obj=>obj.json())
    .then(o=>{
        localStorage.setItem("role",1);
        localStorage.setItem("name",o["name"]);
        localStorage.setItem("surname",o["surname"]);
        localStorage.setItem("username",o["username"]);
        localStorage.setItem("password",o["password"]);
    })
}





async function send_post() {
    if(is_doctor.checked){
        console.log("doc")
        console.log(username_box.value);
        console.log(password_box.value);
        data={
            "username":username_box.value,
            "password":password_box.value
        }
        await fetch("http://127.0.0.1:5000/DoctorCheck",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
            })
            .then(response=>{
                if(response.status==202){
                    release_cookies();

                    fetch("http://localhost:5000/GetDoctor",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                            "username":username_box.value
                        })
                    }).then(obj=>{
                        return obj.json();
                    })
                    .then(o=>{
                        console.log(o);
                        localStorage.setItem("role",1);
                        localStorage.setItem("name",o[1]);
                        localStorage.setItem("surname",o[2]);
                        localStorage.setItem("username",o[3]);
                        localStorage.setItem("password",o[4]);
                    })
                    setTimeout(()=>{
                        location.replace("index.html");

                    },300);
                }else{
                    console.log("Error");
                }
            })
        }else if(is_manager.checked){
        console.log("man")

        await fetch("http://127.0.0.1:5000/ManagerCheck",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "username":username_box.value,
                "password":password_box.value
            })
        })
        .then(o=>{
            if(o.status==202){
                release_cookies();
                fetch("http://localhost:5000/GetManager",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        "username":username_box.value
                    })
                }).then(obj=>obj.json())
                .then(o=>{
                    localStorage.setItem("role",0);
                    localStorage.setItem("name",o[1]);
                    localStorage.setItem("surname",o[1]);
                    localStorage.setItem("username",o[1]);
                    localStorage.setItem("password",o[2]);
                })
                setTimeout(()=>{
                    location.replace("index.html");

                },300);
            }else{
                console.log("Error");
            }
        })
        
        
    }else if(is_secretary.checked){
        console.log("sec")
        await fetch("http://127.0.0.1:5000/SecretaryCheck",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "username":username_box.value,
                "password":password_box.value
            })
        })
        .then(o=>{
            if(o.status==202){
                release_cookies();
                fetch("http://localhost:5000/GetSecretary",{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        "username":username_box.value
                    })
                }).then(obj=>obj.json())
                .then(o=>{
                    localStorage.setItem("role",2);
                    localStorage.setItem("name",o[1]);
                    localStorage.setItem("surname",o[2]);
                    localStorage.setItem("username",o[3]);
                    localStorage.setItem("password",o[4]);
                })
                setTimeout(()=>{
                    location.replace("index.html");

                },300);
            }else{
                console.log("Error");
            }
        })
        
    }else{
        
    }
    
    
    
}

button.addEventListener("click",send_post);














