const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p><b>HTML</b></p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p>  <br> <div> <div class="porcentagem"><p>90%</p></div><div class="progress-bar"></div></div> <br>',

                    '<p><b>CSS</b></p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br> <div> <div class="porcentagem"><p>50%</p></div><div class="progress-bar-css"></div></div> <br>',

                    '<p><b>JavaScript</b></p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br> <div> <div class="porcentagem"><p>0%</p></div><div class="progress-bar-js"></div></div> <br>',

                    '<p><b>ReactJS</b></p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br> <div> <div class="porcentagem"><p>0%</p></div><div class="progress-bar-rjs"></div></div> <br>',

                    '<p><b>Git</b></p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br> <div> <div class="porcentagem"><p>10%</p></div><div class="progress-bar-git"></div></div> <br>',

                    '<p><b>Github</b></p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br> <div> <div class="porcentagem"><p>30%</p></div><div class="progress-bar-hub"></div></div> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );