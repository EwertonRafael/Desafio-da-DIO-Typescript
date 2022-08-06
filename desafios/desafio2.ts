/* Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

//resposta

enum trabalho {
    Atriz,
    Padeiro
}

interface trabalhador {
    nome: string,
    idade: number,
    profissao: trabalho
}


let trabalhador1 : trabalhador = {
    nome : "maria",
    idade : 29,
    profissao : trabalho.Atriz
};


let trabalhador2 : trabalhador = {
    nome : "roberto",
    idade : 19,
    profissao : trabalho.Padeiro
};

let trabalhador3 : trabalhador = {
    nome: "laura",
    idade: 32,
    profissao: trabalho.Atriz
};

let trabalhador4 : trabalhador = {
    nome : "carlos",
    idade : 19,
    profissao : trabalho.Padeiro
}