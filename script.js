const bookName = document.getElementById("book-name");
const authorName = document.getElementById("author-name");
const publishYear = document.getElementById("publish-year");
const yesIHaveRead = document.getElementById("yesIHaveRead");
const noIHaveNotRead = document.getElementById("noIHaveNotRead");
const submitBtn = document.getElementById("submit-btn");
const bookInformation = document.getElementById("book-information");

const books = [
	{ name: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, read: "No" },
	{ name: "1984", author: "George Orwell", year: 1949, read: "No" },
	{ name: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, read: "No" },
	{ name: "Moby Dick", author: "Herman Melville", year: 1851, read: "No" },
	{ name: "Pride and Prejudice", author: "Jane Austen", year: 1813, read: "No" },
	{ name: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, read: "No" },
	{ name: "Brave New World", author: "Aldous Huxley", year: 1932, read: "No" },
	{ name: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, read: "No" },
	{ name: "Fahrenheit 451", author: "Ray Bradbury", year: 1953, read: "No" },
	{ name: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, read: "No" },
];

books.forEach(({ name, author, year, read }) => {
	bookInformation.innerHTML += `
    <ul>
        <li id="${name}" >${name}</li>
        <li id="${author}" >${author}</li>
        <li id="${year}" >${year}</li>
        <li id="${read}" >${read}</li>
    </ul>
    <button id="edit-btn">Edit</button>
    <button id="delete-btn">Delete</button>
    `;
});

class book {
	constructor() {
		this.bookData = [];
	}
}

//submit btn functionality
submitBtn.addEventListener("click", () => {
	console.log("Hiiiiiiiii");

	//push form input into the array when btn clicked
});

//edit btn functionality (this may go in the class but im not sure fully)

//delete btn functionality
