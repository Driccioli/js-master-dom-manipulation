// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `You never truly understand something until you explain it to your grandmother.`,
        person: `Anonymous`
    },
    {
        quote: `Never ask me for anything ever again.`,
        person: `Masahiro Sakurai`
    },
    {
        quote: `Hello there!`,
        person: `General Kenobi`
    },
    {
        quote: `What is a man? A miserable pile of secrets.`,
        person: `Count Dracula`
    },
    {
        quote: `I never said that.`,
        person: `Gandhi`
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
