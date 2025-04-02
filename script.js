//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const bookList = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
		<td><button class="btn btn-danger delete">❌  </button></td>`;

	bookList.appendChild(row);

	  // Function to clear all books
           
    // Clear input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
	
	
});


// Event delegation for deleting rows
        document.getElementById('book-list').addEventListener('click', function(e) {
            if (e.target.classList.contains('delete')) {
                e.target.parentElement.parentElement.remove();
            }
        });

	
