
var submit_listener = document.getElementById('submit')
let myLibray = []
var bookDisplay = document.getElementById('book_display')
var checkboxRead = document.getElementById('Read')
var title = document.getElementById('title')
var formDiv = document.getElementById('bookInputs')
 
function Book(title,pages,author,) {
    this.title=title;
    this.pages=pages;
    this.author=author;
    console.log(myLibray)
}
function closeForm(){
    formDiv.style.display="none";
}

function addBookToLibrary() {
   submit_listener.addEventListener('click', (e) => {
       if (title.value.length == ""){
           alert("Title must not be empty")
           return false;
       } else {
            closeForm();
           addbooks(e) 
    }       
   })
}

addBookToLibrary.prototype = Object.create(Book.prototype)

function openForm(){
    formDiv.style.display="block";
}

function addbooks(e){
    let x = checkboxRead.checked;
    if (x === true)    {
        checkboxRead.value = "Read"
    } 
    else checkboxRead.value = "Not read";

    var div = document.createElement('div')
    bookDisplay.appendChild(div)
    
    var title = document.getElementById("title").value, pages = document.getElementById("pages").value, 
    author = document.getElementById("author").value, read = checkboxRead.value;
    myLibray.push({'title':title,'pages':pages,'author':author, 'read': read})
 
    for (i=0; i <myLibray.length; i++){
    var removeButton = document.createElement('input')
     removeButton.type = "button"
     removeButton.value = 'Delete'
        div.id = i
        div.innerText= JSON.stringify(myLibray[i],null,4)
        bookDisplay.appendChild(div)

        removeButton.addEventListener('click',() =>{
             div.outerHTML=""
         })
         var html_insert = "</span></div>"
         div.innerHTML=

        `<div class="book"> 
         <p id="title">Title: ` + myLibray[i].title + `</p>
         <p id="author">Author: ` + myLibray[i].author + `</p>
         <p id="pages">Pages: ` + myLibray[i].pages + `</p> 
         <p id ="read_not_read">` +   read + `</p> `
          
       
         div.appendChild(removeButton) 
       
         div.insertAdjacentHTML('beforeend',html_insert)
        
         e.preventDefault();
    }

}
const bookContent = new addBookToLibrary()

