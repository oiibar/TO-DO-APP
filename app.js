const input = document.getElementById('input');
const add = document.getElementById('add');
const list = document.getElementById('list');



add.addEventListener('click', function addItem(e) {
	e.preventDefault();

	// Create elements in order to add inside li
	let li = document.createElement("li");
	let todoText = document.createElement("span");
	const dlt = document.createElement('button');

	// Inserting the text from input to todo list
	todoText.innerText = input.value;

	// Modify delete button
	dlt.setAttribute('class', 'button-29');
	dlt.setAttribute('id', 'delete');
	dlt.innerText = 'Delete';
	dlt.addEventListener('click', function deleteItem(e) {
		let li = document.querySelector("li");
		li.remove(e.target);
	});

	// Adding all elements inside li
	li.appendChild(todoText);
	li.appendChild(dlt);
	list.appendChild(li);

	// Clear the value of input
	input.value = '';
});