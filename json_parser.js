const myDetails = 
   `{
    "name": "Tarrorroa", 
    "surname": "Ngubeni",
    "course": "Computer Science"
    }`

const data = JSON.parse(myDetails);
console.log(data);

function getData() {
    let listElement = document.querySelector(".details-for-users");
    let url = "./MOCK_DATA.json";
    
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        // for (let item = 0; item < data.length; item++) {
            // listElement.insertAdjacentHTML('beforeend', `<li>${item[0]}</li>`)
            // console.log(item.first_name)
        // }
        // listElement.innerHTML += `<li>${data.id}</li>`

        data ? data.map(person => {

            listElement.innerHTML += `<p style="padding-bottom: 5px"><b>${person.first_name} ${person.last_name}</b>, ${person.email} (${person.address})</p>`

        }) : null
    })
}

getData()