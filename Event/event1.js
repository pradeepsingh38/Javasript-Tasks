// const btn = document.querySelector("button")

// const timer = setTimeout(()=>{
//     console.log("helooo");
// },5000)

// btn.addEventListener("click",()=>{
//     clearTimeout(timer)
// })

//////////////////////////////

//ssetninterval

// let i=0;
// const intvl = setInterval(()=>{
//     if(i<5){
//         i++;
//         console.log(i);
//     }
//     else{
//         clearInterval()
//     }
    
// },1000)
/////////////////////////////////

//event obj
// const btn = document.querySelector("button")

// btn.addEventListener("click", (evnt)=>{
//     console.log("heloo");
//     console.log(evnt);
//     console.log(evnt.target());
    
// })

/////////////

//event propogation

// const dv = document.querySelector("div")
// const btn = document.querySelector("button")

// dv.addEventListener("click", ()=>{
//     console.log("div was clicked");
    
// })

// btn.addEventListener("click", ()=>{
//     console.log("btn was clicked");
    
// })

//////////////

//event deligation

//const listItems= document.querySelectorAll("ul li");
// for(let i=0;i<listItems.length;i++){
//     listItems[i].addEventListener("click",(evnt)=>{
//         evnt.target.classList.toggle("highlight")
//     })
// }

const ulEle= document.querySelector("ul");

ulEle.addEventListener("click",(evnt)=>{
    evnt.target.closest("li").classList.toggle("highlight")
    })