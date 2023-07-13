const subTitulo = document.querySelector('.introduction__subtitle-js')

export default function initTyping(){
function typeWrite(element, ){
  const text = element.innerHTML.split('');

  element.innerHTML = ""

  text.forEach((letra, index) => {
    setTimeout(()=>{
      element.innerHTML += letra 
    }, 100 * index)
  });

}

typeWrite(subTitulo)

}