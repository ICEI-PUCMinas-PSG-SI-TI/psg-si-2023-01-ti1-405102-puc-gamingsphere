let jogosPadrao = `
<div class="c">ESPORTE</div>

            <div class="card">
                <img class="imagem1" src="fifa 23.jpeg" alt="fifa 23" lancamento="27 de setembro de 2022">
            </div>
            <div class="card">
                <img class="imagem1" src="nhl 22.jpeg" alt="nhl 22" lancamento="12 de agosto de 2021">

            </div>
            <div class="card">
                <img class="imagem1" src="fifa 19.jpeg" alt="fifa 19" lancamento="13 de setembro de 2018">

            </div>
            <div class="card">
                <img class="imagem1" src="nfl 22.jpeg" alt="nfl 22" lancamento="16 de agosto de 2022">

            </div>
            <div class="card">
                <img class="imagem1" src="nba 22.webp" alt="nba 22" lancamento="9 de setembro de 2021">

            </div>
            <div class="card">
                <img class="imagem1" src="steep.jpg" alt="steep" lancamento="2 de dezembro de 2016">
            </div>
            <div class="card">
                <img class="imagem1" src="captain tsubasa.jpg" alt="captain tsubasa" lancamento="27 de agosto de 2020">
            </div>
            <div class="card">
                <img class="imagem1" src="inazuma eleven striker 2013.jpeg" alt="inazuma eleven striker 2013"
                    lancamento="20 de dezembro de 2012">
            </div>
            <div class="card">
                <img class="imagem1" src="fifa 18.jpeg" alt="fifa 18" lancamento="29 de setembro de 2017">
            </div>





            <div class="c">LUTA</div>


            <div class="card">
                <img class="imagem1" src="tekken 7.jpeg" alt="tekken 7" lancamento="18 de fevereiro de 2015">

            </div>
            <div class="card">
                <img class="imagem1" src="my hero one's.jpeg" alt="my hero one's" lancamento="23 de agosto de 2018">

            </div>
            <div class="card">
                <img class="imagem1" src="ghost of tsushima.jpeg" alt="ghost of tsushima"
                    lancamento="17 de julho de 2020">

            </div>
            <div class="card">
                <img class="imagem1" src="batman.webp" alt="batman" lancamento="25 de outubro de 2013">

            </div>
            <div class="card">
                <img class="imagem1" src="ufc 3.jpg" alt="ufc 3" lancamento="30 de janeiro de 2018">
                <p></p>
            </div>
            <div class="card">
                <img class="imagem1" src="kimetu no yaiba.jpeg" alt="kimetu no yaiba "
                    lancamento="13 de outubro de 2021">
            </div>
            <div class="card">
                <img class="imagem1" src="street.jpg" alt="street fighter 5" lancamento="16 de fevereiro de 2016">
            </div>
            <div class="card">
                <img class="imagem1" src="overwatch.jpeg" alt="overwatch" lancamento="3 de maio de 2016">
            </div>
            <div class="card">
                <img class="imagem1" src="injustice 2.jpeg" alt="injustice" lancamento="11 de maio de 2017">
            </div>





            <div class="c">CORRIDA</div>


            <div class="card">
                <img class="imagem1" src="the crew 2.jpeg" alt="the crew 2" lancamento="31 de maio de 2018">

            </div>
            <div class="card">
                <img class="imagem1" src="gran turismo 7.jpeg" alt="gran turismo 7" lancamento="4 de março de 2022">

            </div>
            <div class="card">
                <img class="imagem1" src="real racing 3.jpeg" alt="real racing 3" lancamento="28 de fevereiro de 2013">

            </div>
            <div class="card">
                <img class="imagem1" src="forza horizon 5.jpeg" alt="forza horizon 5"
                    lancamento="1 de novembro de 2021">

            </div>
            <div class="card">
                <img class="imagem1" src="project cars 3.jpeg" alt="project cars 3" lancamento="24 de agosto de 2020">

            </div>
            <div class="card">
                <img class="imagem1" src="grid autosport.webp" alt="grid autosport" lancamento="24 de junho de 2014">
            </div>
            <div class="card">
                <img class="imagem1" src="carx drift racing 2.jpg" alt="carx drift racing 2" lancamento="29 mai 2023">
            </div>
            <div class="card">
                <img class="imagem1" src="wsc 10.jpeg" alt="wsc 10" lancamento="31 de agosto de 2021">
            </div>
            <div class="card">
                <img class="imagem1" src="forza horizon 3.jpeg" alt="forza horizon 3"
                    lancamento="27 de setembro de 2016">
            </div>
`

let jogosHTML=document.querySelectorAll(".card img")
let jogos = []

for(let i=0;i<jogosHTML.length;i++){
    jogos.push(jogosHTML[i].alt)
}

localStorage.setItem("jogos",JSON.stringify(jogos))


jogos = []

for(let i=0;i<jogosHTML.length;i++){
    jogos.push(jogosHTML[i].getAttribute("lancamento"))
}

localStorage.setItem("lancamento",JSON.stringify(jogos))

jogos = []

for(let i=0;i<jogosHTML.length;i++){
    jogos.push(jogosHTML[i].getAttribute("src"))
}

localStorage.setItem("imagens",JSON.stringify(jogos))


function pesquisar(){
    let pai = document.getElementById("container")
    let input = document.getElementById("barraDePesquisa").value
    let jogosPesquisa = localStorage.getItem("imagens")
    jogosPesquisa = JSON.parse(jogosPesquisa)

    console.log(input)

    if(input == ""){
        pai.innerHTML = jogosPadrao
    }

    else{
        pai.innerHTML = ""
        for(let i = 0; jogosPesquisa.length; i++){
            if(jogosPesquisa[i].search(input) > -1){
                pai.innerHTML += 
                `
                <div class="card">
                    <img class="imagem1" src="${jogosPesquisa[i]}">

                </div>
                `
            }
        }
    }

}