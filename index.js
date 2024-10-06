const getList = document.getElementsByTagName('h1');
for ( let getuse of getList){
    getuse.style.backgroundColor='red';
}


// Add and  Remove class
const getid = document.getElementById("play1");
getid.className='my-class';
getid.classList.add('hello')
getid.classList.remove('hello')


// Create Element and appand Chile:
const sectionOne = document.getElementById('first-section');
    console.log(sectionOne.innerHTML)
const myLi= document.createElement('li')
myLi.innerText="Number-4";
sectionOne.appendChild(myLi);
console.log(sectionOne.innerText);


const myUL = document.getElementsByClassName('myULhtml');
sectionOne.appendChild(myLi);
// myUL.appendChild(myLi);
const div = document.getElementsByClassName('div');
div.appendChild(myLi);
console.log(body.innerHTML)
const rana = document.getElementsByClassName('myBody');
console.log(myBody.innerHTML);


const parantContainer = document.getElementById('ul-contsiner');
const myLi =document.createElement("li");
myLi.innerText=" Number-4";
parantContainer.appendChild(myLi);
console.log(innerText);







