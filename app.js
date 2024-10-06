console.log('addded')
const mainsection = document.getElementById('main');
const section = document.createElement('section');
section.innerHTML = `<h1>Dymanic section</h1>
<ul> 
<li>first item</li>
</ul>`
section.style.color= 'red'
mainsection.appendChild(section)