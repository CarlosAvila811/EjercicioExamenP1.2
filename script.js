
const apiURL = "https://fakestoreapi.com/products";

async function fetchProducts() {
    try {
        const response = await fetch(apiURL);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
    }
}


function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = ""; 
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4"); 
        
    
        productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>Precio:</strong> $${product.price}</p>
                    <p class="card-text"><small class="text-muted">Categoría: ${product.category}</small></p>
                </div>
            </div>
        `;
        
        productList.appendChild(productCard);
    });
}


fetchProducts();
