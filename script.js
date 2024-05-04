


const myLibrary = [];

function Books(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.readStatus = function () {
      if (this.read == "read") {
        this.read = "not read"
        } else  {
         this.read = "read"
    }}
  // the constructor...
}



function addBookToLibrary(title,author,pages,read) {
  // makes the obejcts into constants and into the array
  const book = new Books(title,author,pages,read)
  myLibrary.push(book)
}

function displayBooks() {
  //display the items in the array into html form
    let random_number = makeid(10)
    const element = myLibrary.at(-1)
    const div = document.querySelector(".main").appendChild(document.createElement("div"))
    div.classList.toggle("child")
    const title = (div.appendChild(document.createElement("p")))
    title.classList.toggle("big")
    title.textContent = element.title
    const author = (div.appendChild(document.createElement("p"))).textContent = `Written by: ${element.author}`
    const pages = (div.appendChild(document.createElement("p"))).textContent = `Pages: ${element.pages}`
    const read = (div.appendChild(document.createElement("p")))
    read.textContent = `Status: ${element.read}`
    const button = (div.appendChild(document.createElement("button")))
    button.setAttribute("data-index" , `${random_number}`)
    removeBook(button,div)
    button.textContent = "Remove Book"
    element.index = `${random_number}`
    const button2 = (div.appendChild(document.createElement("button")))
    editStatus(button2,element,read)
    button2.textContent = "Change Status"

}

//button that lets user add books
const sumbit = document.querySelector(".submit")
  sumbit.addEventListener("click", (event) => {
    event.preventDefault()
    const title = (document.querySelector(".title")).value
    const author = (document.querySelector(".author")).value
    const pages= (document.querySelector(".pages")).value
    const read = document.querySelector('input[name="check"]:checked').value
    addBookToLibrary(title,author,pages,read)
    displayBooks()
    
  })

//button that let user removes book
 function removeBook(button,div) {
  const butt = button.getAttribute("data-index")
  const parent = document.querySelector(".main")
  button.addEventListener("click", () => {
     myLibrary.forEach((element) => {
        if (element.index === butt) {
        const value = myLibrary.indexOf(element)
         myLibrary.splice(value,1)
         parent.removeChild(div)
       } else {}
      })  })  }

// button that let user change read status
    function editStatus(button,obj,read) {
      button.addEventListener("click", () => {
        obj.readStatus()
        read.textContent = `Status: ${obj.read}`
      })}






const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".but");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

//random 10 digit letters
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



