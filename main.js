let togg1 = document.getElementById("togg1");
let d1= document.getElementById("d1");


togg1.addEventListener("click", function() {
    if(getComputedStyle(d1).display != "block"){
      d1.style.display = "block";
    } else {
      d1.style.display = "none";
    }
  })

let togg2 = document.getElementById("togg2");
let d2= document.getElementById("d2");


togg2.addEventListener("click", function() {
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  })

let togg3 = document.getElementById("togg3");
let d3= document.getElementById("d3");


togg3.addEventListener("click", function() {
    if(getComputedStyle(d3).display != "none"){
      d3.style.display = "none";
    } else {
      d3.style.display = "block";
    }
  })
  