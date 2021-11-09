const taxRate = 0.18;
const shippingPrice = 15.0;

window.onload = () => {
    window.localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);

    window.sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);

    cartTotalPrice();
}

let countDivs = document.getElementsByClassName("count");
console.log(countDivs);    // we have access to all - + buttons(HTML collections)

//as it is Collection we can access them by:

//minus and plus calculations
[...countDivs].forEach((countDiv)=>{    //be careful to "s"
    
    let productQuantity = countDiv.querySelector("#product-quantity");
    //minus
    countDiv.firstElementChild.addEventListener("click", ()=>{
        // if(productQuantity.innerText != "1"){
        //     productQuantity.innerText = parseInt(productQuantity.innerText) - 1;
        // }
        productQuantity.innerText = parseInt(productQuantity.innerText)-1;
        if(productQuantity.innerText == "0"){
            alert("product will be removed!");
            countDiv.parentElement.parentElement.remove();
        }
        productTotalPrice(productQuantity);
    })
    //plus
    countDiv.lastElementChild.addEventListener("click", ()=>{
        productQuantity.innerText = parseInt(productQuantity.innerText)+1;
        productTotalPrice(productQuantity);
    })
})

//product's total price calculation

const productTotalPrice = (productQuantity)=>{
    let productInfo = productQuantity.parentElement.parentElement;  /// we first reach to the parent then to the related price
    const productPrice = parseFloat(productInfo.querySelector(".price").innerText);
    let productTotalPrice = productPrice*parseInt(productQuantity.innerText); //calculation of total amount
    let productTotalDiv = productInfo.querySelector(".productTotal"); //reaching to the related area
    productTotalDiv.innerText = productTotalPrice.toFixed(2); //writing the amount to the wished area  

    cartTotalPrice();
}

//cart's total price

const cartTotalPrice = () =>{
    let productTotalPrices = document.querySelectorAll(".productTotal");
    
    let subtotal = 0;
    console.log(productTotalPrices);
    productTotalPrices.forEach((productPrice)=>{
        subtotal+= parseFloat(productPrice.innerText);
    });

    let taxPrice = subtotal * parseFloat(localStorage.getItem("taxRate"));
    let shipping = (subtotal > 0 ? shippingPrice : 0);
    let cartTotal = subtotal + taxPrice + shipping;

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
    document.getElementById("cart-total").lastElementChild.innerText = cartTotal.toFixed(2);
}

const removeProduct = (removeButton) =>{
    let productDiv = removeButton.parentElement.parentElement;
    productDiv.remove();
    cartTotalPrice();
}

document.querySelectorAll(".removebtn").forEach((removeButton)=>{
    removeButton.addEventListener("click", ()=>{
        removeProduct(removeButton);
    });
});
