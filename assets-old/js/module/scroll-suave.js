const arrows = document.querySelectorAll('[data-scroll]');

export default function initScroll(){
  function scrollDonw(event){
    event.preventDefault()
    const href = this.getAttribute('href');
    const content = document.querySelector(href);
    
    content.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  
    
    console.log(href, content)
  }
  arrows.forEach(ar =>{
    ['click', 'touchstart'].forEach(useEvent => {
      ar.addEventListener(useEvent, scrollDonw)
    });
  })
  
}

