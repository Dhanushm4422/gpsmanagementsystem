var products = [
    {
        imgSrc: "img/11.webp",
        altText: "Car GPS",
        name: "Car GPS Tracker",
        description: "A GPS tracker designed specifically for cars, providing real-time location tracking and theft prevention."
    },
    {
        imgSrc: "img/12.jpg",
        altText: "Personal GPS",
        name: "Personal GPS Locator",
        description: "A compact GPS device for personal use, ideal for tracking kids, elderly, or pets, ensuring their safety and security."
    },
    {
        imgSrc: "img/13.jpg",
        altText: "Fleet GPS",
        name: "Fleet Management GPS",
        description: "An advanced GPS system for fleet management, offering route optimization, driver behavior monitoring, and maintenance tracking."
    }
];
function renderProducts(products) {
    var container = document.getElementById('productContainer');
    if (container) {
        container.innerHTML = products.map(function (product) { return "\n            <div class=\"col-md-4\">\n                <div class=\"product-card\">\n                    <img src=\"".concat(product.imgSrc, "\" alt=\"").concat(product.altText, "\">\n                    <h3>").concat(product.name, "</h3>\n                    <p>").concat(product.description, "</p>\n                </div>\n            </div>\n        "); }).join('');
    }
}
// Call the rendering function after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    renderProducts(products);
});
