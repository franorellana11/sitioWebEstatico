// Variables HTML
const dummy = document.getElementById("dummy");
const text = document.createTextNode();
dummy.appendChild();
let menu = [];
let loading = true;

// Llamado API
fetch(
  "https://private-anon-d0972a3e8a-pizzaapp.apiary-mock.com/restaurants/1/menu?category=pizza&orderBy=rank"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(loading);
    menu.push(data);
    console.log(menu);
    loading = false;
    console.log(loading);
  });

// Funciones especificas
