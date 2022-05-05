let filterInput = document.getElementById('filter');
filterInput.addEventListener('keyup', filterNames)

function filterNames(){
    let filterValue = filterInput.value.toUpperCase();
    let ul = document.getElementById('names')
   let li = document.querySelectorAll('.list-item')
    let p = document.querySelectorAll('.person');

    for(let i = 0; i < li.length; i++){
        if(p[i].innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = 'none';
        }
    }
}

let ul = document.getElementById('names');
    ul.addEventListener('click', removeItem) 
let div = document.querySelectorAll('.flexed')
    function removeItem(e){
        if(e.target.classList.contains('deletebtn')){
            if(confirm('Are You Sure?')){
                let li = e.target.parentElement.parentElement;
                ul.removeChild(li);
            }
        }
    }
// Modal
let modalBtn = document.getElementById('addbtn')
let modal = document.getElementById('modal')
let closeBtn = document.querySelector('.closebtn')
let submitBtn = document.querySelector('.submit-btn')

modalBtn.addEventListener('click', openModal )
closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)
submitBtn.addEventListener('click', closeModals)
function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
    newName.value = ''
    newPhone.value = ''
}

function closeModals(){
    modal.style.display = 'none';  
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}


let newName = document.querySelector('.new-name')
let newPhone = document.querySelector('.new-phone')

// Form Submission
let form = document.getElementById('contact-form');
let deletebtn = document.querySelectorAll('.deletebtn')
form.addEventListener('submit', addContact);

function addContact(e){
    e.preventDefault();

    newName.value
    newPhone.value
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let del = document.createElement('img')
    let div = document.createElement('div')

    p1.className = 'person'
    p2.className = 'number'
    del.className = 'deletebtn'
    div.className = 'flexed'
    del.src = 'img/delete-icon.svg'

    p1.appendChild(document.createTextNode(newName.value));
    p2.appendChild(document.createTextNode(newPhone.value));
    del.appendChild(document.createTextNode(deletebtn))


    let li = document.createElement('li')
    div.appendChild(p2)
    div.appendChild(del)
    li.classname = "list-item"
    li.appendChild(p1);
    li.appendChild(div);
    ul.appendChild(li)

    form.reset();
}


// Import Contacts from JSON
importBtn = document.getElementById('importbtn')
importBtn.addEventListener('click', importContacts)

function importContacts(){
    fetch('contacts.json')
    .then((res) => res.json())
    .then((data) => {
        // let output = ''
        data.forEach(function(contact){
            let p1 = document.createElement('p')
            let p2 = document.createElement('p')
            let del = document.createElement('img')
            let div = document.createElement('div')

            p1.className = 'person'
            p2.className = 'number'
            del.className = 'deletebtn'
            div.className = 'flexed'
            del.src = 'img/delete-icon.svg'
            p1.appendChild(document.createTextNode(`${contact.name}`));
            p2.appendChild(document.createTextNode(`${contact.phone}`));

            let li = document.createElement('li')
            div.appendChild(p2)
            div.appendChild(del)
            li.classname = "list-item"
            li.appendChild(p1);
            li.appendChild(div);
            ul.appendChild(li)  
        })
    })
}

// let li = document.querySelectorAll('.list-item')
// let users = document.getElementById('users');
// console.log(li)
// for(let i = 0; i < li.length; i++){
//     if (!li[i].style.display == 'none'){
//      let getCount = li.length;
//      console.log(getCount);
// }
    
// }

// if (li.style.display == ''){
//      let getCount = li.length;
// }


