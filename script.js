
const tableContainer = document.getElementById('table'); // table in html
let data = [];

// get Json and update html
function generateTable(dataJson) {
    tableContainer.innerHTML = '';
    for (let data of dataJson) {
        getTable(data);
    }
}
function getTable(data) {
    const tableUI = `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${data.name}
                </th>
                <td class="px-6 py-4">
                    ${data.description}
                </td>
                <td class="px-6 py-4">
                    $${data.price}
                </td>
            </tr>`;

    tableContainer.innerHTML += tableUI;
}

//sort alphabetically
function alphaSort(){
   data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

//remake table after sort
generateTable(data);
}

// get initial JSON and make table 
fetch('./Assignment.json')
    .then(response => response.json())
    .then(dataJson => {
        data = dataJson;
        generateTable(dataJson);
    })
    .catch(error => console.error('Error loading the JSON file:', error));
