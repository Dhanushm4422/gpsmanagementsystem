interface Product {
    imgSrc: string;
    altText: string;
    name: string;
    description: string;
}

const products: Product[] = [
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

function renderProducts(products: Product[]) {
    const container = document.getElementById('productContainer');
    if (container) {
        container.innerHTML = products.map(product => `
            <div class="col-md-4">
                <div class="product-card">
                    <img src="${product.imgSrc}" alt="${product.altText}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// Call the rendering function after the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    renderProducts(products);
});
