"use strict";

const productContainer = document.getElementById("product-container");

document.addEventListener("DOMContentLoaded", function () {
    // download data of json file
    fetch("js/products.json")
        .then(response => response.json())
        .then(products => {
            createCard(products);
        });
});

function createCard(products) {
    products.forEach(product => {
        const cardHTML = product["discount-size"] !== ""
            ? getDiscountedCardHTML(product)
            : getRegularCardHTML(product);

        productContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function getDiscountedCardHTML(product) {
    return `
        <div class="card col-12 col-md-6 col-lg-4" style="border: none;background: none; position: relative;">
            <div class="hov-card h-100" style="background-color: #fff;">

                <!-- відсоток знижки -->
                <div class="ribbon">
                    <span>-${product["discount-size"]}%</span>
                </div>

                <a href="${product["link-to-the-page"]}" style="text-decoration: none;">
                    <img src="${product["image-url"]}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text" style="color: rgba(81, 81, 81, 0.8);">
                            ${product["short-description"]}
                        </p>
                        <p class="card-text mb-2" style="color: rgba(255, 0, 0, 0.8); text-decoration: line-through;">
                            Ціна: ${product["old-price"]}грн
                        </p>
                        <p class="card-text" style="color: rgb(21, 152, 0); font-size: 18px;margin-bottom:10px;м ">
                            Cьогодні за: ${product["new-price"]}грн
                        </p>
                        <div class="text-center">
                            <a href="${product["link-to-the-page"]}" class="btn btn-primary cart-btn">
                                Дивитись детальніше
                                <svg class="card-btn-icon" width="20" height="20">
                                    <use href="./image/symbol-defs.svg#icon-redo2"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `;
}

function getRegularCardHTML(product) {
    return `
        <div class="card col-12 col-md-6 col-lg-4" style="border: none;background: none;">
            <div class="hov-card h-100" style="background-color: #fff;">
                <a href="${product["link-to-the-page"]}" style="text-decoration: none;">
                    <img src="${product["image-url"]}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text" style="color: rgba(81, 81, 81, 0.8);">
                            ${product["short-description"]}
                        </p>
                        <p class="card-text mb-2" style="color: rgba(0, 255, 42, 0.8);">
                            Ціна: ${product["new-price"]}грн
                        </p>
                        <div class="text-center">
                            <a href="${product["link-to-the-page"]}" class="btn btn-primary cart-btn">
                                Дивитись детальніше
                                <svg class="card-btn-icon" width="20" height="20">
                                    <use href="./image/symbol-defs.svg#icon-redo2"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `;
}


  