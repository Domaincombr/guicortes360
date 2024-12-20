const telecortefunciton = document.getElementById("telecortefunciton");
var pop = 1;


function ativaagendamento(){
    if(pop % 2 == 1){
        telecortefunciton.classList.remove("telacorte");
        telecortefunciton.classList.remove("telacortesai");
        telecortefunciton.classList.add("telacortevem");
    }
    else{
        telecortefunciton.classList.remove("telacortevem");
        telecortefunciton.classList.add("telacortesai");
    }
    pop ++;
}


document.getElementById("agendamentouser").addEventListener("submit" ,function(event){
    event.preventDefault();

    const nomedocliente = document.getElementById("nomedocliente").value;
    const corte = document.getElementById("corte").value;
    const horario = document.getElementById("horario").value;
    const datadoagendamento = document.getElementById("datadoagendamento").value;

    const mensagemparawhatzap = `Ola! Gostaria de fazer um agendamento Meu nome é ${nomedocliente},e eu gostaria de agendar para o dia ${datadoagendamento}
    as ${horario} horas meu corte selecionado é ${corte}.`;


    const mensagemcod  = encodeURIComponent(mensagemparawhatzap);

    const whatlinkabrir = `https://wa.me/+5511942442175?text=${mensagemcod}`;



    window.open(whatlinkabrir,"_blank");



})

const tellanu = document.querySelector(".tellanu"); 
const slicss = document.querySelectorAll(".slicss"); 

let troca = 0; // Índice atual do slide

function atualizarvalorposica() {
    tellanu.style.transform = `translateX(-${troca * 100}%)`; 

}

function previouws() {
    troca = (troca > 0) ?
     troca - 1 : slicss.length - 1;
    atualizarvalorposica();
}

function nextpreviouws() {
    troca = (troca < slicss.length - 1) ? 
    troca + 1 : 0; 
    atualizarvalorposica();
}

function auto(){


setInterval(()=>{
    previouws() ;
},5000)



}

auto();

function varicarhora(){
    const agora = new Date();

    const horaAtual = agora.getHours();

    const minutosAtuais = agora.getMinutes();



    const abertoHora = 10;
    const abertoMinuto = 30;

    const fechadoHora = 20;
    const fechadoMinuto = 30;

    const estaaberto = (horaAtual > abertoHora || 
    (horaAtual === abertoHora && minutosAtuais >= abertoMinuto ))&&

    (horaAtual < fechadoHora || 
        (horaAtual === fechadoHora && 
            minutosAtuais < fechadoMinuto ));


            const mensagemalaert = document.getElementById("mensagemalaert");
            if(estaaberto){
                mensagemalaert.textContent ='ESTAMOS ABERTO';
                mensagemalaert.style.color = 'greenyellow';
            }
            else{
                mensagemalaert.textContent = "ESTAMOS FECHADO";
                mensagemalaert.style.color = "red";
            }

}

varicarhora();