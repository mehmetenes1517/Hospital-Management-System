if(localStorage.getItem("role")!=null && (localStorage.getItem("role")==0 || localStorage.getItem("role")==2)){

    delete_button=document.querySelector("#delete-button");
    id_Box=document.querySelector("#id");

    delete_button.addEventListener("click",()=>{
        fetch("http://localhost:5001/Patient",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                "id":id_Box.value
            })
        }).then(e=>{
            if(e.status==200){
                location.replace("/index.html");
            }else{
                location.replace("/pt/deletePatient.html");
            }
        })



    });












}else{
    location.replace("/index.html");
}