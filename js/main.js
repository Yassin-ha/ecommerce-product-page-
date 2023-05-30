

// menu btn 

const burgerBtn = document.getElementById("borger-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

let burgerBtnStatus = false;

burgerBtn.addEventListener("click", () => {
    if (burgerBtnStatus == false) {
        burgerBtn.classList.add("open");
        menu.classList.add("open")
        overlay.classList.add("open")
        burgerBtnStatus = true;
    } else {
        burgerBtn.classList.remove("open");
        menu.classList.remove("open")
        overlay.classList.remove("open")
        burgerBtnStatus = false;
    }
})

// cart btn 

const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");

let cartStatus = false

cartBtn.addEventListener("click", () => {
    if (cartStatus == false) {
        cart.style.display = "block";
        cartStatus = true;
    } else {
        cart.style.display = "none";
        cartStatus = false
    }
})

// main function 

// Variables 

const price = document.getElementById("price");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const op = document.getElementById("op");
const addToCartBtn = document.getElementById("addtocart__btn");
const productCart = document.getElementById("product__cart");
const productNumber = document.getElementById("product__number");
const fullPrice = document.getElementById("full__price");
const noProduct = document.getElementById("no__product");
const deleteBtn = document.getElementById("delete-btn");
const notif = document.getElementById("notif");


// plus and minus event 

plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click", minus);

function plus() {
    let opValue = op.textContent;
    opValue++;
    op.innerText = opValue;
}
function minus() {
    let opValue = op.textContent;
    if (opValue > 0) {
        opValue--;
    } else {
        opValue = 0;
    }
    op.innerText = opValue;
}

// Add cart Event 

function addToCart() {
    let opValue = op.textContent;
    if (opValue > 0) {
        productCart.style.display = "block";
        noProduct.style.display = "none";
        let leanding = ".00";

        let currentPrice = price.textContent;
        let currentPriceNum = currentPrice.replace("$", "");
        let result = currentPriceNum * opValue;
        let lastResult = result + leanding;
        productNumber.innerHTML = `${currentPrice} x ${opValue} <span id='full__price'>$${lastResult} </span>`
        notif.innerText = opValue;
        notif.style.visibility = "visible";
        notif.style.opacity = "1";
    } else {
        alert("Please add some product first");

    }
}

addToCartBtn.addEventListener("click", addToCart)


// delete Event 

function deleting() {
    op.innerText = 0;
    productCart.style.display = "none";
    noProduct.style.display = "block";
    notif.style.visibility = "hidden";
    notif.style.opacity = "0";

}
deleteBtn.addEventListener("click", deleting)


// Image slider 

const images = document.querySelectorAll(".slide");
const zoomImages = document.querySelectorAll(".slide-zoom")
const thumbnail = document.querySelectorAll(".product")
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const imgsArray = Array.from(images);
let imgIndx = 0;

const imagesSize = imgsArray.length - 1;

images.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
});
zoomImages.forEach((img, index) => {
    img.style.left = `${index * 100}%`;
});

function next() {
    if (imgIndx >= imagesSize) {
        return false;
    } else {
        imgIndx++;
        imageSlide();
    }
}

function prev() {
    if (imgIndx == 0) {
        return false;
    } else {
        imgIndx--;
        imageSlide();
    }
}


const imageSlide = () => {
    images.forEach((img) => {
        img.style.transform = `translateX(-${imgIndx * 100}%)`
        removeAllActive(thumbnail);
        addActive(thumbnail, imgIndx);
    })
    zoomImages.forEach((img) => {
        img.style.transform = `translateX(-${imgIndx * 100}%)`
        removeAllActive(thumbnail);
        addActive(thumbnail, imgIndx);
    })

}
const addActive = (Array, imgIndx) => {
    Array.forEach((el, index) => {
        index = el.getAttribute("data-num");
        if (imgIndx == index ){
            el.classList.add("active");
        }
    })
    

}

nextBtn.addEventListener("click", next)
prevBtn.addEventListener("click", prev)

thumbnail.forEach((el) => {
    el.addEventListener("click", () => {
        removeAllActive(thumbnail);
        el.classList.add("active");
        const index = el.getAttribute("data-num");
        imgIndx = index;
        imageSlide();
    })

})

const removeAllActive = (Array) => {
    for(let i = 0; i < Array.length; i++) {
        Array[i].classList.remove("active");
    }
}

// zoom image function 
const zoomInImages = document.getElementById("zoom__in__images");
const zoomOverlay = document.getElementById("overlay-zoom");
const closeZoom = document.getElementById("close-zoom");
const zoomPrevbtn = document.getElementById("prev-zoom");
const zoomNextbtn = document.getElementById("next-zoom");
const wrapper = document.querySelector(".wrapper");
var x = window.matchMedia("(min-width: 992px)");
var y = window.matchMedia("(max-width: 991px)");

const zoombtn = document.getElementById("zoom__in");

// zoom in event
zoombtn.addEventListener("click", () => {
    if(x.matches) {
        console.log("fuck");
        zoomInImages.classList.add("open");
        zoomOverlay.classList.add("open");
    } else if(y.matches) {
        zoomInImages.classList.remove("open");
        zoomOverlay.classList.remove("open");
        return false;
    }
    
})

zoomNextbtn.addEventListener("click", next);
zoomPrevbtn.addEventListener("click", prev);

// zoom out
closeZoom.addEventListener("click", () => {
    zoomInImages.classList.remove("open");
    zoomOverlay.classList.remove("open");
})