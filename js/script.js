var jogadores = [];

exibeJogadorNaTela(jogadores);

function calculaPontos (jogador){
    var pontos = (jogador.vitórias * 3) + jogador.empates;
    return pontos;
}

function exibeJogadorNaTela(jogadores) {
    var elemento = "";
    for(var i = 0; i < jogadores.length; i++){
        elemento += "<tr>";
        elemento += "<td><img src=" + jogadores[i].avatar + "></td>";
        elemento += "<td>" + jogadores[i].nome + "</td>";
        elemento += "<td>" + jogadores[i].vitórias + "</td>";
        elemento += "<td>" + jogadores[i].empates + "</td>";
        elemento += "<td>" + jogadores[i].derrotas + "</td>";
        elemento += "<td>" + jogadores[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "<td><button onClick='removerJogador(" + i + ")'>Remover</button></td>"
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitórias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadorNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadorNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadorNaTela(jogadores);
}

function novoJogador (avatarURL, nomeJogador) {
    return (
        jogador = { avatar: avatarURL, 
                    nome: nomeJogador,
                    vitórias: 0,
                    empates: 0,
                    derrotas: 0,
                    pontos: 0 
        }
    )
}

function adicionarJogador() {
    var nomeJogador = document.getElementById("nomeJogador").value;
    var avatarURL = document.getElementById("avatarUrl").value;

    if(avatarURL === ""){
        avatarURL = "https://bsbr.com.br/wp-content/uploads/2017/10/Icon-user.png"
    }
    
    if (nomeJogador != "" && nomeJogador != "undefined") {
        jogadores.push(novoJogador(avatarURL, nomeJogador));
        exibeJogadorNaTela(jogadores);
    } else {
        alert("Digite seu nome.");
    }
    document.getElementById("avatarUrl").value = "";
    document.getElementById("nomeJogador").value = "";
}

function zerarPlacar(i) {
    for(var i = 0; i < jogadores.length; i++){
        jogadores[i].vitórias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
    }
    exibeJogadorNaTela(jogadores);
}

function removerJogador(i) {
    jogadores.splice(i, 1);
    exibeJogadorNaTela(jogadores);
}