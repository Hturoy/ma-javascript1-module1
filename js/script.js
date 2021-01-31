const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


// Oppgave 1

const cat = {complain: function () { 
    console.log("Meow!")
}}

cat.complain();



// Oppgave 2

const heading = document.querySelector("h3")
heading.innerHTML = "Updated Heading"


// Oppgave 3
heading.style.fontSize = "2em"


// oppgave 4
heading.classList += "subheading"

// Oppgave 5
const paragraphs = document.querySelectorAll("p")

paragraphs.forEach (function (p) {
    p.style.color = "red"
})

// Oppgave 6
const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = ("<p>New paragraph</p>")
resultsContainer.style.background = ("yellow")

// Oppgave 7
function trygve (list) {
    for(stuff of list){
        console.log(stuff.name)
    }
}
trygve(cats)

// Oppgave 8
const catContainer = document.querySelector(".cat-container")
const createCats = function (cats) {
    for(const cat of cats){
        if(cat.age === undefined){
            cat.age = "Age unknown"
        }
        let catDiv = `
            <div>
                <h5>${cat.name}</h5>
                <p>${cat.age}</p>
            </div>
        `;
        catContainer.innerHTML += catDiv
    }
}
createCats(cats)