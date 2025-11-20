// URL of the JSON data
const dataUrl = 'data.json';

// This function fetches the data and then calls displayData
function fetchData() {
  fetch(dataUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();  // parse the JSON from the response
    })
    .then(data => {
      console.log('Data fetched:', data);
      displayData(data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
      const container = document.getElementById('dataContainer');
      container.textContent = 'Error loading data: ' + error;
    });
}

// This function takes the data array and displays it in the page
function displayData(dataArray) {
  const container = document.getElementById('dataContainer');

  // Clear “Loading…” text
  container.innerHTML = '';

  // Create a table to display the data
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  headerRow.innerHTML = '<th>Time</th><th>Temperature</th>';
  table.appendChild(headerRow);

  // For each item in the array, make a row in the table
  dataArray.forEach(item => {
    const row = document.createElement('tr');
    const cellTime = document.createElement('td');
    cellTime.textContent = item.time;
    const cellTemp = document.createElement('td');
    cellTemp.textContent = item.temperature;
    row.appendChild(cellTime);
    row.appendChild(cellTemp);
    table.appendChild(row);
  });

  // Add the table to the container
  container.appendChild(table);
}

// When the page loads, run fetchData
window.addEventListener('load', () => {
  fetchData();
});