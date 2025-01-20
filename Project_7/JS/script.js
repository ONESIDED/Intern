// 1. make - fetchdata and then get numberinput from client.
// 2. number should within 1 to 88 and not more than that.
// 3. show alert for it.
// 4. get api (json file) by using fetch and then response the json and pull out data.
// 5. Add the count for counting the row.
// 6. loop for dynamically pulling out data and data`s key.
// 7. limit the 16 rows and check the data`s has Own Property key when both of them are true.
// 8. call the elements by ID.
// 9. checking the titleEl and resultEl for having elements or not in the DOM.
//10. put it in innerText and increase the count.
//11. catch the error for crashing it.
//12. Attach "click" event listener to the button when click call fetch-data function


const BASE_URL = 'https://swapi.py4e.com/api/people/';

const fetchData = () => {
    const numberInput = parseInt(document.getElementById('txt').value, 10);
    if (!numberInput || isNaN(numberInput) || numberInput < 1 || numberInput > 88) {
        alert('Please enter a valid number between 1 and 88.');
        return;
    }

    fetch(`${BASE_URL}${numberInput}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        let count = 1; // Start from Row 1
        for (const key in data) {
            if (data.hasOwnProperty(key) && count <= 16) { // Limit rows to 16
                // Update title and result columns
                const titleEl = document.getElementById(`R${count}C1`);
                const resultEl = document.getElementById(`R${count}C2`);

                if (titleEl && resultEl) {
                    titleEl.innerText = key;
                    resultEl.innerText = data[key];
                    // console.log(data)
                }
                count += 1;
            }
        }
    })
    .catch(error => {
        alert('An error occurred while fetching data. Please try again later.');
        console.error('Error details:', error);
    });
}
// Attach event listener to the button
const fetchButton = document.getElementById('btn');
fetchButton.addEventListener('click', fetchData);