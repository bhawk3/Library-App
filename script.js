const bookName = document.getElementById("book-name");
const authorName = document.getElementById("author-name");
const publishYear = document.getElementById("publish-year");
const yesIHaveRead = document.getElementById("yesIHaveRead");
const noIHaveNotRead = document.getElementById("noIHaveNotRead");
const submitBtn = document.getElementById("submit-btn");
const bookInformation = document.getElementById("book-information");
const newBookForm = document.getElementById("new-book-form");

const books = [
	{ id: 1, name: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, read: "No" },
	{ id: 2, name: "1984", author: "George Orwell", year: 1949, read: "No" },
	{ id: 3, name: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, read: "No" },
	{ id: 4, name: "Moby Dick", author: "Herman Melville", year: 1851, read: "No" },
	{ id: 5, name: "Pride and Prejudice", author: "Jane Austen", year: 1813, read: "No" },
	{ id: 6, name: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, read: "No" },
	{ id: 7, name: "Brave New World", author: "Aldous Huxley", year: 1932, read: "No" },
	{ id: 8, name: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, read: "No" },
	{ id: 9, name: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, read: "No" },
	{ id: 10, name: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, read: "No" },
];

function renderBook() {
	books.forEach(({ id, name, author, year, read }) => {
		bookInformation.innerHTML += `
    <ul id="${id}">
        <li id="${name}" >${name}</li>
        <li id="${author}" >${author}</li>
        <li id="${year}" >${year}</li>
        <li id="${read}" >${read}</li>
    	<button class="delete-btn" onClick="deleteBtn(this)">Delete</button>
    </ul>
    `;
	});
}

function renderBooks() {
	bookInformation.innerHTML = "";
	renderBook();
	//books.forEach(renderBook);
}
renderBooks();

class book {
	addBook(bookName, author, year, read) {
		let bookId = books.length + 1;

		let newBook = { id: bookId, name: bookName, author, year, read };
		books.push(newBook);
		return books;
	}

	removeBook() {
		newBook.innerHTML = "";
	}
}

const newBook = new book();
//submit btn functionality
newBookForm.addEventListener("submit", (e) => {
	e.preventDefault();
	let readChecked = yesIHaveRead.checked ? "Yes" : "No";
	newBook.addBook(bookName.value, authorName.value, publishYear.value, readChecked);
	const lastBook = books[books.length - 1];
	renderBooks(lastBook);
	console.log(books);
	//push form input into the array when btn clicked
});

//delete btn functionality
const deleteBtn = (buttonEl) => {
	//This is finding the element the is being clicked
	const bookDataArr = books.findIndex((item) => item.id === Number(buttonEl.parentElement.id));
	console.log(bookDataArr);
	console.log("Dom id:", buttonEl.parentElement.id);
	console.log(
		"item id:",
		books.map((b) => b.id)
	);

	if (bookDataArr !== -1) {
		buttonEl.parentElement.remove();
		books.splice(bookDataArr, 1);
	}
	//look up online what .remove() and splice so I can learn more ab that. This functionality caused all html data to remove from screen
};
