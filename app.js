const search = document.getElementById('search');
const icon = document.getElementById('icon');
const cut = document.getElementById('cut');
const nico = document.getElementById('nico');
const navbar = document.getElementById('navbar');

icon.addEventListener('click',()=>{
    search.style.display='block';
    search.style.display='flex';
    navbar.style.display='none';
})

cut.addEventListener('click',()=>{
   search.style.display='none';
   nico.value="";
   navbar.style.display='block';
})