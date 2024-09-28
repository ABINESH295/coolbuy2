toggle=document.getElementById("toggle")
sidebar=document.getElementById("sidebar")
cancel=document.getElementById("cancel")

toggle.addEventListener("click",()=>{
    sidebar.style.left="0"
})
cancel.addEventListener("click",()=>{
    sidebar.style.left="-60%"
})

// contact info//
function sendmail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("Message").value,
        phone:document.getElementById("phone").value,
    };
const serviceID="service_qluo6rt";
const templateID="template_tsc92vh";

emailjs
.send(serviceID,templateID,parms)
.then((res)=> {
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("Message").value=""
    document.getElementById("phone").value=""
    console.log(res)
    alert("email send successfully")




})
.catch((err)=>console.log(err))
}

head=document.getElementById("h-button")

head.addEventListener("click",()=>{
    location.href="collection.html"
})

// profile//
pro=document.getElementById("pro")
pot=document.getElementById("pot")
exit=document.getElementById("exit")

pot.addEventListener("click",()=>{
    pro.style.left="0"
})
exit.addEventListener("click",()=>{
    pro.style.left="-80%"
})



    
