let buttonplus = document.getElementsByClassName("plus-btn");
for (let i=0 ; i< buttonplus.length ; i++) {
    buttonplus[i].addEventListener("click", function () {
        buttonplus[i].nextElementSibling.value++;
        PriceTotal();
    });
}
let buttonminus = document.getElementsByClassName("minus-btn");
for (let i=0 ; i< buttonminus.length ; i++) {

    buttonminus[i].addEventListener("click", function () {
        buttonminus[i].previousElementSibling.value--;
        PriceTotal();    
        while (buttonminus[i].previousElementSibling.value > 0) {
            buttonminus[i].previousElementSibling.value--;
            PriceTotal();
        }
    });
}
function PriceTotal() {
    let quantity = document.getElementsByName("quantity");
    let price = document.getElementsByClassName("price");
    let total = document.getElementById("total");
    let sum = 0;
    for (let i = 0; i < price.length; i++) {
        sum += quantity[i].value * price[i].innerHTML;
    }
    return total.innerHTML = sum.toFixed(2) + ' TND' ;
}


let buttonremove = document.getElementsByClassName("btn-delete");
for (let i=0 ; i<buttonremove.length; i++) {
    buttonremove[i].addEventListener("click", function () {
        buttonremove[i].parentElement.parentElement.remove();
        PriceTotal();
       
    });
}




let heart = document.getElementsByClassName("fa-heart");
for (let i=0 ; i<heart.length ; i++) {
    heart[i].addEventListener("click", function () {
        if (heart[i].style.color != "red") {
            heart[i].style.color = "red";
        } else {
            heart[i].style.color = "black";
        }
    });
}