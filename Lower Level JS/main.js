const para = document.querySelector('p');
const heading = document.querySelector('h1')
const link = document.querySelector('a');
const sect = document.querySelector('section');
const para1 = document.createElement('p');
const image = document.createElement('img');
const foot = document.createElement('footer');


link.textContent = 'David is the best';
link.href = 'http://www.google.com';
para.textContent = 'This is another test';
heading.textContent = 'I changed this text with JavaScript';
para.style.color = 'red';
para.style.backgroundColor = 'yellow';
para.style.textAlign = 'center';
para1.textContent = 'The result of a match between a RegExp and a string can create a JavaScript array. This array has properties and elements which provide information about the match. Such an array is returned by RegExp.exec(), String.match(), and String.replace().'
sect.appendChild(para1);
para1.style.backgroundColor = 'red';
para1.style.color = 'white';
para1.style.padding = '20px';
para.style.fontFamily = 'Helvetica';
para1.style.fontFamily = 'Helvetica';
sect.appendChild(image);
heading.style.color = 'blue';
heading.attachShadow = 'grey';

 