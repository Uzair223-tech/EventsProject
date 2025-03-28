let btn = document.querySelector(".btn");
let arr2=[];

btn.addEventListener("click",()=>{
    
    let arr = [];
   
    let ip = document.querySelector(".inp").value;


    let ip2 = document.querySelector(".inp2").value;

    let a = String(ip);
    let b = String(ip2);

    let c = `${a}
     ${b}`;
   
    
    arr.push(c);
    arr2.push(arr);
    console.log(arr2);
    
    
    let f = document.createElement("div");
    document.body.appendChild(f);
    f.classList.add("div");
    f.innerHTML = `BOOKMARKS <br>
    <span style="color: blue;">Website Name:</span> ${a} <br> 
    <span style="color: green;">URL:</span> ${b}`;
    
    
    
    
})