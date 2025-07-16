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
