let button = document.querySelector('#newQuote-btn')
let quote = document.querySelector('.quote')
let author = document.querySelector('.author')

const quotes = [
    {
        quote : `"As a writer, you should not judge, you should understand."`,
        author : `Ernest Hemingway`
    },
    {
        quote : `"To produce a mighty book, you must choose a mighty theme."`,
        author : `Herman Melville`
    },
    {
        quote : `"deas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."`,
        author : ` John Steinbeck`
    },
    {
        quote : `"The Six Golden Rules of Writing: Read, read, read, and write, write, write."`,
        author : `Ernest Gaines`
    },
    {
        quote : `"The purpose of a writer is to keep civilization from destroying itself."`,
        author : `Albert Camus`
    },
    {
        quote : `"A writer never has a vacation. For a writer life consists of either writing or thinking about writing."`,
        author : `Eugene Ionesco`
    },
    {
        quote : `"A good writer possesses not only his own spirit but also the spirit of his friends."`,
        author : `Friedrich Nietzsche`
    },
    {
        quote : `"I am not at all in a humour for writing; I must write on until I am."`,
        author : ` Jane Austen`
    }
]

button.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;

})