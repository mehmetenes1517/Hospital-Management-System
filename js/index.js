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
        //Adjusting Blue Bar
        buttonslist[0].setAttribute("href","/");
        if(localStorage.getItem("role")==0){
            buttonslist[0].innerHTML=localStorage.getItem("username");
        }else{
            buttonslist[0].innerHTML=localStorage.getItem("name")+" "+localStorage.getItem("surname");
        }
        buttonslist[1].setAttribute("href","/cls/clear.html");
        buttonslist[1].innerHTML="Logout";
    }