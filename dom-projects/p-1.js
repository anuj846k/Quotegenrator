var btn=document.querySelector('#new-quote');
var quote=document.querySelector('.quote');
var person=document.querySelector('.person');




const quotesData = [
    {
      quote: "I used to hate being lonely; now I thrive in solitude.",
      person: "David Googins"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "It's not whether you get knocked down, it's whether you get up.",
      person: "Vince Lombardi"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      person: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
      },
      {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        person: "Martin Luther King Jr."
      },
      {
        quote: "The best way to predict the future is to create it.",
        person: "Peter Drucker"
      },
      {
        quote: "You only live once, but if you do it right, once is enough.",
        person: "Mae West"
      },
      {
        quote: "Don't count the days, make the days count.",
        person: "Muhammad Ali"
      },
      {
        quote: "I find that the harder I work, the more luck I seem to have.",
        person: "Thomas Jefferson"
      },
      {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
      },
      {
        quote: "If you want to lift yourself up, lift up someone else.",
        person: "Booker T. Washington"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
      },
      {
        quote: "Learn as if you will live forever, live like you will die tomorrow.",
        person: "Mahatma Gandhi"
      }
]

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random() * quotesData.length);
    quote.innerText=quotesData[random].quote;
    person.innerText=quotesData[random].person;
})
  