# EsWix-Inventory-Management
### Phone Inventory Dashboard

This is a simple web application that allows users to manage a list of phones in an inventory. Users can add new phones, delete existing ones, and update the quantity of phones purchased.

### Features

- **Add Phone**: Users can add a new phone item to the inventory by filling out a form and submitting it.
- **Delete Phone**: Each phone item has a delete button (`🗑️`) that allows users to remove it from the inventory after confirmation.
- **Update Quantity**: Each phone item has an update button (`🛒`) that decreases the quantity of phones available when clicked, simulating a purchase.

### Technologies Used

- **JavaScript**: Used for client-side scripting to handle DOM manipulation and API interactions.
- **HTML/TAILWINDCSS/CSS**: Basic structure and styling for the user interface.
- **Fetch API**: Used to make HTTP requests to the local server (`http://localhost:3000`) for CRUD operations.

### Application Structure

- **Dashboard Section**: The main container (`#container-dashboard`) where phone items are displayed.
- **Card Items**: List (`#card-items`) where individual phone items are dynamically rendered and managed.

### Functionality

- **Rendering Items**: Function `renderOneItem(item)` dynamically creates HTML elements to display each phone item's details, including image, name, price, quantity, and comments.
- **Adding Items**: Function `addItem(e)` handles form submission to add a new phone item both locally (rendered immediately) and to the server (`addItemsPost(itemDetails)`).
- **Deleting Items**: Function `deleteItems(id)` removes a phone item from both the UI and the server upon user confirmation.
- **Updating Quantity**: Function `updateDate(quantity)` decreases the quantity of a phone item when the update button is clicked.

### How to Use

1. **Add New Phone**:
   - Fill out the form with phone details (name, price, quantity, image URL, comments).
   - Click "Submit" to add the phone to the inventory.

2. **Delete Phone**:
   - Click the delete button (`🗑️`) on a phone card.
   - Confirm the deletion in the confirmation dialog.

3. **Update Quantity**:
   - Click the update button (`🛒`) on a phone card to simulate a purchase.
   - The quantity displayed will decrease by 1.

### Installation

1. Ensure you have a local server running at `http://localhost:3000` to handle CRUD operations.
2. Clone or download the repository containing this code.
3. Open `index.html` in a web browser to view and interact with the inventory dashboard.

### Notes

- Ensure proper error handling and input validation to enhance the application's reliability and user experience.
- This application assumes a basic setup for managing phone inventory. Modify and extend functionality as needed for real-world scenarios.

### Author

- Developed by Eustache Katembo

 
