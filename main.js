var favs = Array.from(document.querySelectorAll('.fa-heart'));
var deletebtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));
var plusbtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusbtns = Array.from(document.querySelectorAll(".fa-minus-circle"))
//test al tableau
console.log(favs,deletebtns,cards,plusbtns,minusbtns)

for (let fav of favs)
(
    fav.addEventListener("click" , function(){
    if (fav.style.color == "black") {
        fav.style.color = "red" 
    }else {
        fav.style.color = "black"
    }
    })
)
for (let i in deletebtns) {
    deletebtns[i].addEventListener("click" , function(){
        cards[i].remove()
    })
}

for (let plusbtn of plusbtns){
    plusbtn.addEventListener("click" , function(){
        plusbtn.nextElementSibling.innerHTML++ 
        total()
    })
}
for (let minusbtn of minusbtns) {
    minusbtn.addEventListener("click", function (){
        minusbtn.previousElementSibling.innerHTML > 0 ?
        minusbtn.previousElementSibling.innerHTML -- :
        null , 
        total ()
    })
}
function total () {
    let qte = Array.from(document.querySelectorAll('.qute'));
    let price = Array.from(document.querySelectorAll(".unitt-price"));
    let s = 0
    for ( let i = 0 ; i<price.length ; i++)
    {s = s + price[i].innerHTML * qte [i].innerHTML ;
    }
    document.getElementById("total-price").innerHTML = s
}