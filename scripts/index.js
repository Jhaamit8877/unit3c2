// Add the coffee to local storage with key "coffee"
const url="https://masai-api.herokuapp.com/coffee/menu"
fetch(url)
 .then(function(res){
   return res.json();
 })

 .then(function(res){
   console.log(res.menu.data);
   append(res.menu.data)
 })

 let data_arr=JSON.parse(localStorage.getItem("coffee"))||[]
function append(data){
var container=document.getElementById("menu")
data.forEach(function(el){
 let img=document.createElement("img")
 img.src=el.image;

 let h3=document.createElement("h3")
 h3.innerText=el.title;

 let price=document.createElement("h3")
 price.innerText=el.price;

 let btn=document.createElement("button")
 btn.innerText="Add to bucket"
 btn.addEventListener("click",addToBucket)
 function addToBucket(){
   data_arr.push(el);
   localStorage.setItem("coffee",JSON.stringify(data_arr))
   console.log(data_arr)
 }
 let div=document.createElement("div")
 div.append(img,h3,price,btn);
 container.append(div);
})


}
