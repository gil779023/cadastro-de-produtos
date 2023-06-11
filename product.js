
const urlCategories = "http://localhost:4000/categories";
const urlProducts = "http://localhost:4000/products";

async function usarCategorias() {
  try {
    const response = await fetch(urlCategories);
    const categories = await response.json();

    const categoriaSelect = document.getElementById("categoria");

    categories.forEach((category) => {
      const option = new Option(category.name, category._id);
      categoriaSelect.appendChild(option);
    });
  } catch (error) {
    console.log(error);
  }
}

async function criarProduto(event) {
  event.preventDefault();

  const name = document.getElementById("nome").value;
  const desc = document.getElementById("descricao").value;
  const imageInput = document.getElementById("imagem");
  const images = imageInput.files;
  const prec = document.getElementById("preco").value;
  const buscarCategoria = document.getElementById("categoria").value;

  const formData = new FormData();

  formData.append("name", name);
  formData.append("description", desc);

  
  if (images.length > 0) {
    const imageFile = images[0];
    formData.append("image", imageFile);
  }

  formData.append("price", prec);
  formData.append("category", buscarCategoria);

  try {
    const response = await fetch(urlProducts, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      throw new Error("Failed to create product.");
    }
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", usarCategorias);

const btn = document.getElementById("botao");
btn.addEventListener("click", criarProduto);



//para mostrar na tela 

async function getProducts() {
  try {
    const response = await fetch(urlProducts);
    if (response.ok) {
      const products = await response.json();
      displayProducts(products);
    } else {
      throw new Error("Failed to get products.");
    }
  } catch (error) {
    console.log(error);
  }
}

function displayProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product.name;
    productList.appendChild(li);
  });
}

window.addEventListener("DOMContentLoaded", getProducts);


