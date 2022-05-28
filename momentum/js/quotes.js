const quotes = [
    {
        quote: "If you're never scared or embarrassed or hurt, it means you never take any chances.",
        author:"Julia Sorel",
    },
    {
        quote: "One can never consent to creep when one feels an impulse to soar.",
        author:"Helen Keller",
    },
    {
        quote: "The biggest adventure you can ever take is to live the life of your dreams.",
        author:"Oprah Winfrey",
    },
    {
        quote: "The merit of an action lies in finishing it to the end.",
        author:"Genghis Khan",
    },
    {
        quote: "Isn't it a pleasure to study, and to practice what you have learned?",
        author:"Confucius",
    },
    {
        quote: "To become an able and successful man in any profession, three things are necessary, nature, study and practice.",
        author:"Henry Ward Beecher",
    },
    {
        quote: "A goal without a plan is just a wish.",
        author:"Antoine de Saint-Exupery",
    },
    {
        quote: "Small opportunities are often the beginning of great enterprises.",
        author:"Demosthenes",
    },
    {
        quote: "Judge thyself with the judgment of sincerity, and thou will judge others with the judgment of charity.",
        author:"John Mitchell Mason",
    },
    {
        quote: "Heaven helps those who help themselves.",
        author:"000",
    },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

// floor() : 반내림, ceil() : 반올림, round() : 
//0 값도 있어야 하니까 floor() 사용

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuotes.quote
author.innerText = todaysQuotes.author