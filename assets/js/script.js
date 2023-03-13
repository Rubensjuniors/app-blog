const buttons = document.querySelectorAll('[data-button]');
const containers = document.querySelectorAll('[data-vible]');
const hiddenClass = 'hidden';

const arrowDonw = document.querySelector('#arrow-donw-js');

function hiddenContent(list, index, remove) {
  remove &&
    list.forEach((content) => {
      content.classList.add(hiddenClass);
    });

  list[index].classList.remove(hiddenClass);
}
 function addClass(button, index){
  button.addEventListener("click", ()=>{
    hiddenContent(containers, index, true);
    console.log(button)
  })

 }

buttons.forEach(addClass);

function addaAtivo(){
  buttons.forEach(e => e.classList.remove('ativo'))
  this.classList.add('ativo')
}

buttons.forEach(button =>{
  button.addEventListener('click', addaAtivo)
});

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

arrowDonw.addEventListener('click', scrollDonw)


