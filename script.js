const dashBoardSection = document.querySelector("#container-dashboard");
const card_Items = document.querySelector("#card-items");

document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
        addItem(e)
    form.reset();
  })

})
// Function to add an item to the DB
function addItem(e) {
  e.preventDefault(); // Prevent default form submission

  let itemDetails = {
    name:e.target.name.value,
    price: Math.floor(e.target.price.value), 
    quantity: Math.floor(e.target.quantity.value),
    image: e.target.image.value,
    comment: e.target.comment.value,
  };

  renderOneItem(itemDetails); // Render the item locally
  addItemsPost(itemDetails);
}

// Function to render a single item
function renderOneItem(item) {
  let card = document.createElement("li");
  card.classList = "w-80 h-96 rounded-2xl flex flex-col justify-center gap-3 m-4 bg-gray-200 p-4";
  card.innerHTML = `
    <div class="flex flex-row gap-3 p-2 items-center">
      <img class="w-40 h-44 rounded-2xl" src="${item.image}" alt="${item.name}">
      
      <div class="flex flex-col gap-2 shadow-2xl bg-white w-24 p-2 rounded-xl">
        <p>${item.name}</p>
        <p>${item.price}$</p>
        <p id="numberItem">${item.quantity}</p>
      </div>
    </div>
    <p class="w-full h-72 bg-blue-400 p-4 rounded-bl-2xl rounded-br-2xl rounded-tl-3xl text-white shadow-2xl">${item.comment}</p>
    <div class="flex flex-row justify-around w-full">
      <button id="btn-delete" class="flex gap-4 w-4 rounded-xl"><span class="material-icons">delete</span></button>
      <button id="btn-update" class="flex gap-4 w-4 rounded-xl "><span class="material-icons">local_mall</span></button>
    </div>
  `;
  card_Items.appendChild(card);
  card.querySelector("#btn-delete").addEventListener("click", () => {
    card.remove()
    confirm("Would you confirm to delete It?")
    deteleItems(item.id);
  })

  card.querySelector("#btn-update").addEventListener("click", () => {
    item.quantity -= 1;
    alert('One phone is purchassed');
    card.querySelector("#numberItem").textContent = item.quantity;
  })
}

// Fetch request to get all items
function getItems() {
  fetch("http://localhost:3000/phones")

    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(dataItems => dataItems.forEach(item => renderOneItem(item)))
    // .catch(error => console.error("Error fetching items:", error));
}

// Function to add item via POST request
function addItemsPost(itemDetails) {
  fetch("http://localhost:3000/phones", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },
    body: JSON.stringify(itemDetails),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then(data => console.log("Item added:", data)) // Optional: Log the response data
    .catch(error => console.error("Error adding item:", error));
}

function deteleItems(id){
  fetch(`http://localhost:3000/phones/${id}`,{
    method:"DELETE",
    headers:{
      "Content-type" : "application/json",
      "Accept" : "application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
}

function updateDate(quantity){
  fetch(`http://localhost:3000/phones/${quantity.id}`,{
    method:"PATCH",
    headers:{
      "Content-type" : "application/json",
      "Accept" : "application/json"
    },
    body:JSON.stringify(quantity)
  })
    .then(res => res.json())
    .then(data => console.log(data)).catch(error => {
      console.log("Impossimble to upDate an Item" + error)
    })
}
// Initialize the application
function initialize() {
  getItems();
}

initialize();
