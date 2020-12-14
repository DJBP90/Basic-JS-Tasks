const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
//Event and function call when button clicked - myItem = input field + value
button.onclick = function() {
  let myItem = input.value;
  input.value = '';
// Create the list elements submitted and delete button added
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
//listText is placed or created and added into the listItem (li)
  listItem.appendChild(listText);
  //This is = to span element applied with textContent assigned by myItem which has the value of input.value
  listText.textContent = myItem;
  //This places users field inside of the listItem (li)
  listItem.appendChild(listBtn);
  //when the listBtn is clicked the content will be deleted using (.textContent = 'Delete')
  listBtn.textContent = 'Delete';
  //This places the users entered field
  list.appendChild(listItem);
//when the content is deleted so is the button
  listBtn.onclick = function(e) {
    list.removeChild(listItem);
  }
//????
  input.focus();
}