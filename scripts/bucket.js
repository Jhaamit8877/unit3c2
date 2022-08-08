// On clicking remove button the item should be removed from DOM as well as localstorage.
let data_arr=JSON.parse(localStorage.getItem("coffee"))||[]
function append(data_arr){
var container=document.getElementById("bucket")

data_arr.forEach(function(el,index){
  let img=document.createElement("img")
  img.src=el.image;

  let h3=document.createElement("h3")
  h3.innerText=el.title;

  let price=document.createElement("h3")
  price.innerText=el.price;

  let btn=document.createElement("button")
  btn.innerText="REMOVE"
  btn.addEventListener("click",remove)
  function remove( index){
    let data_arr=JSON.parse(localStorage.getItem("coffee"))||[]
    
    let new_arr=data_arr.filter(function(elem,i){
      if(i===index){}
    else{
      return i!== index;
    }
    });
    localStorage.setItem("coffee",JSON.stringify(new_arr))
    append(data_arr);
    // console.log()
  
    // console.log("Inside funciton")
    // console.log(index);
  }

 console.log(img,price,h3)
  let div=document.createElement("div")
  div.append(img,h3,price,btn);
  container.append(div);
})
}
append(data_arr)