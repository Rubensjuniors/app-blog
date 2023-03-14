const buttons = document.querySelectorAll("[data-button]");
const containers = Array.from(document.querySelectorAll("[data-visible]"));
const hiddenClass = "hidden";

export default function initHidden() {
  buttons.forEach((button) => {
    ['click', 'touchstart'].forEach(useEvent => {
      button.addEventListener(useEvent, hiddenContent)
      button.addEventListener(useEvent, ActiveButton)
    });
  });

  function hiddenContent() {
    const typeButton = this.getAttribute("data-button");
    const conteiner = containers.filter((cont) => {
      const typeCont = cont.getAttribute("data-visible");
      if (typeButton === typeCont) {
        cont.classList.remove(hiddenClass);
        return cont;
      }
      cont.classList.add(hiddenClass);

    });

    return conteiner;
  }

  function ActiveButton(){
    buttons.forEach(but => but.classList.remove('ativo'))
    this.classList.add('ativo')
  }
}

