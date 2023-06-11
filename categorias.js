
//solicitacao post para criar categorias
const btn = document.getElementById("botao");
btn.addEventListener('click' ,function(cat){
    cat.preventDefault();
    const form = document.getElementById("formulario");
    const name = document.getElementById("nome").value;
    const icon = document.getElementById("icone").value;
    
    const dados = {
      icon: icon,
      name: name,
      id : ""
      
    }
    
    console.log(dados)
    fetch('http://localhost:4000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
       body: JSON.stringify(dados)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
       console.log(error)
      })  
});


//solicitacao get para apresentar itens criados

// const url = "http://localhost:4000/categories";
// const cate = document.getElementById("categoria");
// async function getId(){
//   const response = await fetch(url);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);

//   data.map((obter)=>{
//     const div = document.createElement("div");
//     const  pa = document.createElement("p");
//     const pi = document.createElement("p");
//     const link = document.createElement("a");

//     pa.innerText = obter.name;
//     pi.innerText = obter.icon;
//     link.innerText = "ler id";
    
//     link.setAttribute("href",`/categorias.html?id=${obter._id}`);

//     div.appendChild(pa);
//     div.appendChild(pi);
//     div.appendChild(link);
//     categoria.appendChild(div);
//   })
// }

// getId()