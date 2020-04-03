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

        if (gift.image.guid) {
            copy.querySelector(".item img").src = gift.image.guid;
        } else {
            copy.querySelector(".item img").src = "/img/unknown.jpg";
            copy.querySelector("h2").style.display = "block";
        }

        copy.querySelector(".item .price .priceNr").textContent = gift.price;

        if (gift.in_stock == 1) {
            copy.querySelector(".item .price .stock").textContent = "✓";
        } else {
            copy.querySelector(".item .price .stock").textContent = "";
        }

        copy.querySelector(".item .whoBought span").textContent = "+" +   Math.floor(Math.random() * Math.floor(100));

        document.querySelector("main").appendChild(copy);
    })
}
