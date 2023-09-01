var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');
var dudesName = $('input[name="shopping-input"]');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function addDude(event){
    event.preventDefault();

    shoppingListEl.append('<l1>' + dudesName.val() + '</l1>');
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', addDude);