let close = document.getElementById('close');
let lightBox = document.getElementById('lightBox');
let images = document.getElementsByTagName('img');
let previewImage = document.getElementById('previewImage');
let container = document.getElementsByClassName('container');
lightBox.style.display = 'none';
close.style.display = 'none';

for(let i=0; i<images.length; i++)
{
    images[i].addEventListener('click', ()=>{
        previewImage.src = images[i].src;
        lightBox.style.display = 'flex';
        close.style.display = 'inline-block';
        container[0].style.opacity = 0.3;
        container[0].style.pointerEvents = 'none';
    })
}

close.addEventListener('click',()=>{
    lightBox.style.display = 'none';
    close.style.display = 'none';
    container[0].style.opacity = 1;
    container[0].style.pointerEvents = '';
})
