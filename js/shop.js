const products = {
  Smartphone: Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Smartphone ${i + 1}`,
    price: `$${200 + i * 10}`,
    img: `img/products/product1/1.png`
  })),
  Watches: Array.from({ length: 16 }, (_, i) => ({
    id: i + 17,
    name: `Watch ${i + 1}`,
    price: `$${50 + i * 5}`,
    img: `img/products/product2/1.png`
  })),
  Footwear: Array.from({ length: 16 }, (_, i) => ({
    id: i + 33,
    name: `Footwear ${i + 1}`,
    price: `$${30 + i * 3}`,
    img: `img/products/product3/1.png`
  })),
  Fashion: Array.from({ length: 16 }, (_, i) => ({
    id: i + 49,
    name: `Fashion Item ${i + 1}`,
    price: `$${40 + i * 4}`,
    img: `img/products/product4/1.png`
  })),
};

function loadCategory(categoryName) {
  const productGrid = document.getElementById("productGrid"); // corrected ID
  productGrid.innerHTML = "";

  const categoryProducts = products[categoryName] || [];

  categoryProducts.forEach(product => {
    const productCard = `
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card h-100">
          <img src="${product.img}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Price: ${product.price}</p>
            <a href="single-product.html?id=${product.id}" class="btn btn-primary btn-sm">View Details</a>
          </div>
        </div>
      </div>
    `;
    productGrid.insertAdjacentHTML("beforeend", productCard);
  });
}

// Attach category click listeners
document.addEventListener("DOMContentLoaded", () => {
  const categoryItems = document.querySelectorAll(".category-item");

  categoryItems.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      const category = item.querySelector("span")?.innerText?.trim();
      if (category && products[category]) {
        loadCategory(category);
      } else {
        console.warn(`Category "${category}" not found in product data.`);
      }
    });
  });
});
