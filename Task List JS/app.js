//This grabs the HTML elements
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

// When the button is clicked an anonomous function is called - inside the block a let variable is decalared as this will continue to change - The Variable is myItem and is = to input.value meaning the input field + value
button.onclick = function(){
    let myItem = input.value;
    input.value = ' ';


// These elements will be created on the execution of the submit button
const listItem = document.createElement('li');
const listText = document.createElement('span');
const listBtn = document.createElement('button');

//listText is created/placed into the listItem ('li')
listItem.appendChild(listText);

//This applies to the span element and add text with textContent taken from the input.value
listText.textContent = myItem;

//listBtn will  is also added to listItem
listItem.appendChild(listBtn);

//This places text into the button
listBtn.textContent = 'remove';
//Places users input into
list.appendChild(listItem);

listBtn.onclick = function(e) {
    list.removeChild(listItem);
}

}
