fetch("https://dummyjson.com/products")
    .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          for (const product of data.products) {
              const productDiv = document.createElement("div");
              productDiv.innerHTML = `
                 <div class="card m-3" style="width: 18rem;">
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                      <h5 class="card-title">${product.title}</h5>
                      <p class="card-text">${product.description}</p>
                      <a href="#" class="btn btn-primary">Buy for $${product.price}</a>
                    </div>
                  </div>
              `;
              document.getElementById("card-container").appendChild(productDiv);
          }
      });

function showCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Your cart is empty.</li>';
    return;
  }

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.title} - $${item.price}`;
    cartItems.appendChild(li);
  });
}


function toggleCart() {
  const cartSection = document.getElementById('cart-section');

  if (cartSection.style.display === 'none') {
    cartSection.style.display = 'block';
    showCart(); 
  } else {
    cartSection.style.display = 'none';
  }
};

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '0.3s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '0.3s';
    }
      localStorage.setItem("mode", isDark ? "dark" : "light");
});

