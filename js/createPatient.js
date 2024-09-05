if(localStorage.getItem("role")!=null && (localStorage.getItem("role")==0 || localStorage.getItem("role")==2)){


    name_box=document.querySelector("#name");
    surname_box=document.querySelector("#surname");
    birthdate_box=document.querySelector("#birthdate");
    birthloc_box=document.querySelector("#birthloc");
    button_create=document.querySelector("#create-button");
    button_create.addEventListener("click",()=>{
        fetch("http://localhost:5001/Patient",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                "name":name_box.value,
                "surname":surname_box.value,
                "birthdate":birthdate_box.value,
                "birthloc":birthloc_box.value,
            })
        }).then(e=>{
            console.log
            if(e.status==200){
                
                location.replace("/index.html");
                return "OK",200;
            }else{
                location.replace("/pt/createPatient.html");
            }
        })
    })
}else{
    location.replace("/index.html");
}