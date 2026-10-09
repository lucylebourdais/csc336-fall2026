let cartData = 0;
let total = 0;
let cart = document.getElementById("cart");
cart.innerHTML = "Total: " + total + " (" + cartData + " items)";

let card = document.querySelector(".card");
let selectBtn = document.getElementById("selectBtn");
let selectedProducts = [];

let categoryFilter = document.getElementById("filter");

let catalog = {
    fika: {
        name: "Berroco Fika",
        color: "Barrage",
        price: 27.00,
        description: "Hand dyed in Peru, each skein of Fika is a unique work of art.  The heavy sport/ light DK weight yarn is spun with soft, superwash fine Merino wool & is ideal for cardigans, sweaters & accessories.  The fine gauge is lightweight, yet warm & cozy.  Garments knit or crochet with the yarn have crisp stitch definition & beautiful drape.",
        category: "Wool",
        img: "barrage.png"
    },
    kumo: {
        name: "La Bien Aimee Big Kumo",
        color: "Tuileries",
        price: 46.00,
        description: "Big Kumo is an incredibly soft worsted weight yarn spun with light, airy Suri alpaca & silk.  The Japanese word “Kumo” translates to “cloud” in English & this yarn knits into garments that deliver this lightness.  The yarn is incredible knit into fluffy sweaters, cardigans & accessories with tons of character.  It is also amazing held alongside another yarn to add softness, gauge & that incredible halo.",
        category: "Alpaca",
        img: "tuileries.png"
    },
    verano: {
        name: "Malabrigo Verano",
        color: "Serena",
        price: 16.40,
        description: "Oh, the things you will knit with 100% Pima cotton, Malabrigo Verano!  Perfect for warmer weather knits, Verano possesses softness, durability, & a lovely subtle sheen.  The collection of colorways are true to the Malabrigo brand & will give accessories, garments, & baby/kids knits a gorgeous tonality, as well as deep, saturated color.",
        category: "Cotton",
        img: "serena.png"
    },
    lama: {
        name: "Lang Yarns Baby Lama",
        color: "Lime",
        price: 23.00,
        description: "Spun with a blend of luxury llama & a bit of nylon for strength, the yarn brings a fashion forward glow & halo to every project.  With excellent thermal insulation, Baby Lama will keep you cozy on the chilliest evenings.",
        category: "Llama",
        img: "lime.png"
    },
    bambok: {
        name: "Manos del Uruguay Bambok",
        color: "Sake",
        price: 33.00,
        description: "Bambok is a soft, fingering weight yarn spun with superwash Merino wool & bamboo.  The Merino wool provides structure & the bamboo delivers beautiful drape for exquisite shawls, wraps & garments.",
        category: "Bamboo",
        img: "sake.png"
    },
    camelDk: {
        name: "Pascuali Camel DK",
        color: "Chestnut",
        price: 19.00,
        description: "Extraordinarily soft & luxurious, Camel DK is spun from the undercoat fiber of two-humped Bactrian camels found across inner Mongolia.  Renowned for their long, lustrous hair, the yarn is created using the insulating undercoat.",
        category: "Camel",
        img: "chestnut.png"
    }
};

function forEach(product) {
    let rootDiv = document.querySelector("#root");

    let productDiv = document.createElement("div");
    productDiv.product = product;
    productDiv.dataset.category = product.category;
    productDiv.classList.add("productData");

    let infoDiv = document.createElement("div");

    let productImg = document.createElement("img");
    productImg.src = product.img;
    productDiv.append(productImg);

    let productName = document.createElement("h2");
    let productDescription = document.createElement("p");
    let productPrice = document.createElement("h3");
    let productCategory = document.createElement("p");
    let cartButton = document.createElement("button");
    cartButton.classList.add("cartButton");
    let selectButton = document.createElement("button");
    selectButton.classList.add("selectButton");
    selectButton.innerHTML = "Select";
    selectButton.addEventListener("click", selectProducts);

    cartButton.innerHTML = "Add to Cart";
    cartButton.addEventListener("click", function() {
        cartData++;
        total += product.price;
        cart.innerHTML = "Total: " + total.toFixed(2) + " (" + cartData + " items)";
    });
    productName.innerHTML = product.name;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = "$" + product.price.toFixed(2);
    productCategory.innerHTML = product.category;
    infoDiv.append(productName);
    infoDiv.append(productDescription);
    infoDiv.append(productPrice);
    infoDiv.append(productCategory);
    infoDiv.append(cartButton);
    infoDiv.append(selectButton);

    productDiv.append(infoDiv);
    
    rootDiv.append(productDiv);

}

function selectProducts(event) {
    let button = event.target;
    let card = button.closest(".productData");
    card.classList.toggle("selected");

    if (card.classList.contains("selected")) {
        button.innerHTML = "Deselect";
    } else {
        button.innerHTML = "Select";
    }

    let count = document.querySelectorAll(".selected").length;
    selectBtn.disabled = count === 0;
}

function addSelectedToCart() {
    let selectedCards = document.querySelectorAll(".selected");

    for (let i = 0; i < selectedCards.length; i++) {
        total += selectedCards[i].product.price;
        cartData++;
        selectedCards[i].classList.remove("selected");
    }   
    cart.innerHTML = "Total: " + total.toFixed(2) + " (" + cartData + " items)";
    selectBtn.disabled = true;
}

let categories = ["All", "Wool", "Alpaca", "Cotton", "Llama", "Bamboo", "Camel"];

function createFilter() {
    let filterDiv = document.getElementById("filterDiv");
    let filter = document.createElement("select");
    filterDiv.append(filter);

    for (let category of categories) {
        let optionElement = document.createElement("option");
        optionElement.value = category;
        optionElement.innerHTML = category;
        filter.append(optionElement);
    }

    filter.addEventListener("change", (event) => {
        let cards = document.querySelectorAll(".productData");

        for (let card of cards) {
            if (filter.value === "All" || card.dataset.category === filter.value) {
                card.classList.remove("hidden"); 
            }
            else {
                card.classList.add("hidden");
                card.classList.remove("selected");
            }
        }
    });
}
selectBtn.addEventListener("click", addSelectedToCart);


createFilter();


forEach(catalog["fika"]);
forEach(catalog["kumo"]);
forEach(catalog["verano"]);
forEach(catalog["lama"]);
forEach(catalog["bambok"]);
forEach(catalog["camelDk"]);