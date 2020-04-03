window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("http://stefflr.com/wp/wp-json/wp/v2/gift")
        .then(res => res.json())
        .then(sortData)
}

const template = document.querySelector("template").content;

function sortData(gifts) {
    console.log(gifts)
    gifts.forEach(gift => {
        const template = document.querySelector("template").content;
        const copy = template.cloneNode(true);

        copy.querySelector("h2").textContent = gift.title.rendered;
        copy.querySelector(".item img").src = gift.image.guid;
        copy.querySelector(".item .price .priceNr").textContent = gift.price;
        if(gift.in_stock==1){
        copy.querySelector(".item .price .stock").textContent = "✓";
        }
        else{
        copy.querySelector(".item .price .stock").textContent = "";
        }
        document.querySelector("main").appendChild(copy)
    })
}
