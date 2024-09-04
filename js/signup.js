name1=document.querySelector("#name");
surname1=document.querySelector("#surname");
username1=document.querySelector("#username");
password1=document.querySelector("#password")


is_doctor=document.querySelector("#doctor");
is_secretary=document.querySelector("#secretary");
is_manager=document.querySelector("#manager");

async function send_post() {
    console.log("HEeey");
    if(is_manager.checked){



        await fetch("http://127.0.0.1:5000/Manager", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username":username1.value,
                "password":password1.value
            }),
        }).then(obj=>{
            if(obj.status==200){
                location.replace("index.html");
            }else{
                location.replace("signup.html");
            }})
            .catch(e=>{
                console.log(e);
            })



    }else if(is_doctor.checked){
        await fetch("http://127.0.0.1:5000/Doctor",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                name:name1.value,
                surname:surname1.value,
                username:username1.value,
                password:password1.value
            })
        })
        .then(o=>{
            if(o.status==200){
                location.replace("index.html");
            }else{
                location.replace("signup.html");
            }
        }).catch(e=>{
            console.log(e);
        })
        
    }else if(is_secretary.checked){
        await fetch("http://127.0.0.1:5000/Secretary",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                name:name1.value,
                surname:surname1.value,
                username:username1.value,
                password:password1.value
            })
        }).then(obj=>{
            if(obj.status==200){
                location.replace("index.html");
            }else{
                location.replace("signup.html");
            }
        })
        .catch(e=>{
            console.log(e);
        })
        
    }
    else{

    }
}
button_submit=document.querySelector("#signup-button");
console.log(button_submit);
button_submit.addEventListener("click",send_post);