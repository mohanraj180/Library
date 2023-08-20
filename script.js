let myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

function displayBook() {
    if (document.getElementById('bookContainer')) {
        document.getElementById('bookContainer').remove();

        const bookContainer = document.createElement('div');
        bookContainer.classList.add('bookContainer');
        bookContainer.setAttribute('id', 'bookContainer');
        const body = document.getElementById('body');
        body.appendChild(bookContainer);
    }

    const bookContainer = document.getElementById('bookContainer');

    for (let i = 0; i <= myLibrary.length - 1; i++) {
        const div = document.createElement('div');
        let bookNum = i.toString();
        div.classList.add('bookCard');
        div.setAttribute('id', bookNum);
        bookContainer.appendChild(div);
    }

    for (let i = 0; i <= myLibrary.length - 1; i++) {
        const bookCard = document.getElementById(i.toString());
        let bookObj = myLibrary[i];

        for (const property in bookObj) {
            const bookData = document.createElement('p');

            switch (property) {
                case "author":
                    bookData.textContent = 'Author:' + ' ' + bookObj[property];
                    break;

                case "title":
                    bookData.textContent = 'Title:' + ' ' + bookObj[property];
                    break;

                case "pages":
                    bookData.textContent = 'Pages:' + ' ' + bookObj[property];
                    break;

                default:
                    break;
            }

            bookCard.appendChild(bookData);

        }

        const status = document.createElement('button');

        status.setAttribute('class', 'book-status')
        status.setAttribute('type', 'button');
        status.textContent = bookObj['status'];
        switch (status.textContent) {
            case "Reading":
                status.style.backgroundColor = 'yellow';
                break;

            case "Finished":
                status.style.backgroundColor = 'greenyellow';
                break;

            default:
                break;
        }
        bookCard.appendChild(status);

        const remove = document.createElement('button');
        remove.setAttribute('class', 'remove-book');
        remove.setAttribute('type', 'button');
        remove.setAttribute('onclick', 'removeBook()');
        remove.textContent = 'Remove';
        remove.style.backgroundColor = 'black';
        remove.style.color = 'white';
        bookCard.appendChild(remove);


    }

    const bookStatusList = document.querySelectorAll(".book-status");

    bookStatusList.forEach(bookStatus => {
        bookStatus.addEventListener("click", (event) => {
            event.preventDefault();
            console.log(bookStatus.textContent);

            switch (bookStatus.textContent) {
                case 'Reading':
                    bookStatus.textContent = 'Finished';
                    myLibrary[parseInt(bookStatus.parentElement.id)].status = 'Finished';
                    bookStatus.style.backgroundColor = 'greenyellow';
                    break;

                case 'Finished':
                    bookStatus.textContent = 'Reading';
                    myLibrary[parseInt(bookStatus.parentElement.id)].status = 'Reading';
                    bookStatus.style.backgroundColor = 'yellow';
                    break;

                default:
                    break;
            }
        });
    });



}

function addBookToLibrary() {
    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pages = document.getElementById("pages").value;

    // console.log(author, title, pages);


    let radioButtons = document.querySelectorAll("[type = radio]");
    let status = "";
    for (let radio of radioButtons) {
        if (radio.checked) {
            status = radio.value;
        }
    }

    let book = new Book(author, title, pages, status);
    myLibrary.push(book);

    console.log(myLibrary);

    displayBook();

    closeForm();




}

function removeBook() {
    event.preventDefault();
    var parent = event.target.parentElement;
    const bookId = parent.id;
    const bookIndex = parseInt(bookId);
    myLibrary.splice(bookIndex, 1);
    console.log(bookIndex);
    console.log(myLibrary);

    displayBook();
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

const subbtn = document.querySelector("#submit");
console.log(subbtn);
subbtn.addEventListener("click", (event) => {
    event.preventDefault();

})





