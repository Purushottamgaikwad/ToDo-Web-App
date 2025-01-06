let ip = document.querySelector("input");
let lis = document.querySelector("ol");
let sub = document.querySelector("button");
let del = document.querySelector(".delete");


sub.addEventListener("click", function(){
    if(ip.value != ""){
    let item = document.createElement("li");
    let check = document.createElement("checkbox");
    item.innerText = ip.value;  
    item.classList.add("li");
    lis.appendChild(check);
   

    let delbtn = document.createElement("button");
    delbtn.innerText = " Delete ";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    lis.appendChild(item);
    }

    ip.value="";

})

lis.addEventListener("click" , function(event){

   if(event.target.nodeName == "BUTTON"){
    let listItem = event.target.parentElement;
    listItem.remove();

   }
})