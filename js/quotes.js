const quotes=[
    {
        quote:"When you have faults, do not fear to abandon them.",
        author:"Confucius",
    },
    {
        quote:"Youth isn’t always all it’s touted to be.",
        author:"Lawana Blackwell",
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author:"Nelson Mandela",
    },
    {
        quote:"Life is either a daring adventure or nothing at all.",
        author:"Helen Keller",
    },
    {
        quote:"The goal of life is living in agreement with nature.",
        author:"Zeno",
    },
    {
        quote:"This too shall pass.",
        author:"Et hoc transibit",
    },
    {
        quote:"The die is cast.",
        author:"Julius caesar",
    },
    {
        quote:"Only I can change me life, no one can do it for me.",
        author:"Carol Burnett",
    },
    {
        quote:"Being happy never goes out of style.",
        author:"Lilly Pulitzer",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText= todaysQuote.author;