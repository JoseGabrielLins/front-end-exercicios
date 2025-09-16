let xp = prompt("Quantos anos de experiancia ?");
let pontuacaoxp = 0;



if (xp < 5){
    pontuacaoxp = 10;
} else if (xp >= 5) {
    pontuacaoxp = 20;
}

let form = prompt("Qual sua formação ? 1 - Superior 2 - Pós Graduação 3 -Mestrado 4 -Doutorado");
let pont=0;


if (form == 1){
    pont = 10;
}else if( form ==2){
    pont = 20;
}else if (form==3){
    pont=30;
}else if (form == 4){
    pont =40;
}


let soma = pontuacaoxp + pont;
alert(soma);