document.getElementById('text-btn').addEventListener('click', function(){
    const textfield = document.getElementById('text-area');
    const newComment =  textfield.value;

    const postcontainer = document.getElementById('post');
    const p = document.createElement('p');
    p.innerText = newComment;
    postcontainer.appendChild(p);
    textfield.value ='';
})