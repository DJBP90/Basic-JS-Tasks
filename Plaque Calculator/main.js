const pName = document.getElementById("pName");
const submit = document.getElementById("submit");
const price = 5;

pName.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (pName <= 0){
     document.write('Error, Please type a name in field!');
    } else (pName > 0)
            document.alert(`This is the price: ${pName.length * price}`);

        });