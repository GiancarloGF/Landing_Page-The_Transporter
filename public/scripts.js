const workItems = document.querySelectorAll('.work .work__item');
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector('#close-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu-mobile-items');

// Para expander nuestro menu mobile
openCloseButton.addEventListener('click', e =>{
      e.preventDefault();
      menuMobileItems.classList.toggle('menu-mobile--closed')
})

//Para dar click a un elemento y salga su detalle en toda la pantalla
workItems.forEach(item => {
      item.addEventListener('click', e => {
          e.preventDefault();
          currentIndex = parseInt(item.getAttribute('data-id'));
          const contentArr = document.querySelectorAll('#details-container .item'); //Me traigo el arr de todos los items de detalles
          //Escondo el contenido de todos los items de details
          document.querySelectorAll('#details-container .item').forEach(item => { item.classList.add('item-hide');})
          //Muestro el contenido del elemento clickeado
          document.querySelectorAll('#details-container .item')[currentIndex].classList.toggle('item-hide');
          //Le agrego a mi screen una animacion al mostrarse
          document.querySelector('#screen').style['animation-name'] = 'fade-in';
          //Ocultamos el scroll al body
          document.querySelector('body').style['overflow'] = 'hidden';
          //Luego de 1seg mi contenido de detail se muestra
          setTimeout(() => {
              document.querySelector('#details-container').style.display = 'block';
          }, 1000);
          //Luego de 2 segundos mi screen se oculta quitandole todos los stilos.
          setTimeout(() => {
              document.querySelector('#screen').style = '';
          }, 2000);
      })
  });

//Para cerrar el detail con boton closed
closeButton.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('#screen').style['animation-name'] = 'fade-in';
      document.querySelector('body').style['overflow'] = 'auto';
      setTimeout(() => {
          document.querySelector('#details-container').style.display = 'none';
      }, 1000);
      setTimeout(() => {
          document.querySelector('#screen').style = '';
      }, 2000);
  });

// Anterior item
prevButton.addEventListener('click', e =>{
      if(currentIndex - 1 < 0){
          return;
      }     
      currentIndex--;
      loadGalleryItem(currentIndex);
});

//Siguiente item
nextButton.addEventListener('click', e =>{
      if(currentIndex + 1 == workItemsCount){
          return;
      }     
      currentIndex++;
      loadGalleryItem(currentIndex);
});

//Callback para mostrar los elementos prev-next
function loadGalleryItem(index){
      document.querySelectorAll('#details-container .item').forEach(item => { item.classList.add('item-hide');})
      document.querySelectorAll('#details-container .item')[index].classList.toggle('item-hide');     
}