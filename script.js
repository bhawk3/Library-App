const bookName = document.getElementById("book-name");
const authorName = document.getElementById("author-name");
const publishYear = document.getElementById("publish-year");
const yesIHaveRead = document.getElementById("yesIHaveRead");
const noIHaveNotRead = document.getElementById("noIHaveNotRead");
const submitBtn = document.getElementById("submit-btn");
const bookInformation = document.getElementById("book-information");

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

function renderBooks() {
	books.forEach(({ id, name, author, year, read }) => {
		bookInformation.innerHTML += `
    <ul>
        <li id="${name}" >${name}</li>
        <li id="${author}" >${author}</li>
        <li id="${year}" >${year}</li>
        <li id="${read}" >${read}</li>
    </ul>
    <button id="${id}" class="edit-btn">Edit</button>
    <button id="${id}" class="delete-btn">Delete</button>
    `;
	});
}
renderBooks();

class book {
	addBook(bookName, author, year, read) {
		//this.name = name;
		//this.author = author;
		//this.year = year;
		//this.read = read;

		//const bookInfo = bookInformation.find((bookss) => bookss.id === id);
		let bookId = books.length + 1;

		let newBook = { id: bookId, name: bookName, author, year, read };
		books.push(newBook);

		//Still need to display this data using template literal

		return books;
	}
}

const newBook = new book();
//submit btn functionality
submitBtn.addEventListener("click", () => {
	let readChecked = yesIHaveRead ? "Yes" : "No";
	//********************These parameters are wrong in this.**********************
	newBook.addBook(bookName.value, authorName.value, publishYear.value, readChecked);
	console.log(books);
	renderBooks();
	//push form input into the array when btn clicked
});

//edit btn functionality (this may go in the class but im not sure fully)

//delete btn functionality
