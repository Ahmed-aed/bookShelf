var bookShelf = document.querySelector('.bookShelf')
var books = [
    {
        title: " My Conversations with Chimpanzees",
        author: " Roger Fouts",
        image: "./book1.jpg"
    },
    {
        title: "Dance with Dragons",
        author: " George R.R. Martin",
        image: "./book2.jpg"
    }, {
        title: "Harry Potter and the Goblet of Fire",
        author: " J.K. Rowling Doe",
        image: "./book3.jpg"
    }, {
        title: "City of Girls",
        author: "Elizabeth Gilbert",
        image: "./book4.jpg"
    },
]

for(var i=0; i < books.length; i++) {
    var bookDiv = document.createElement('div')
    bookDiv.classList.add('book')

    var title = document.createElement('h3')
    var author = document.createElement('h4')
    var image = document.createElement('img')

    title.textContent = books[i].title
    author.textContent = books[i].author
    image.src = books[i].image

    bookDiv.appendChild(image)
    bookDiv.appendChild(title)
    bookDiv.appendChild(author)
    bookShelf.appendChild(bookDiv)
}
var newBook = {
    title: "",
    author: "",
    image: ""
}
var newBookBtn = document.querySelector('.newBookBtn')
var form = document.querySelector('#form')

newBookBtn.addEventListener('click', function (e) {
    form.classList.remove('hideForm')
})

var addBtn = document.querySelector('.addBtn')
var title = document.querySelector('#title')
var author = document.querySelector('#author')
var image = document.querySelector('#image')

title.addEventListener('keyup', function (e) {
    newBook.title = e.target.value
})

author.addEventListener('keyup', function (e) {
    newBook.author = e.target.value
})

image.addEventListener('keyup', function (e) {
    newBook.image = e.target.value
})

addBtn.addEventListener('click', function (e) {
    e.preventDefault()
    books.push(newBook)
    bookShelf.textContent = ""
    for(var i=0; i < books.length; i++) {
        var bookDiv = document.createElement('div')
        bookDiv.classList.add('book')

        var title = document.createElement('h3')
        var author = document.createElement('h4')
        var image = document.createElement('img')

        title.textContent = books[i].title
        author.textContent = books[i].author
        image.src = books[i].image

        bookDiv.appendChild(image)
        bookDiv.appendChild(title)
        bookDiv.appendChild(author)
        bookShelf.appendChild(bookDiv)
    }
})
