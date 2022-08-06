/* Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */



//resposta 1

let funcionario = {
    code: 10,
    name: 'John'
}

//resposta 2

interface funcionario  {
    code: number,
    name: string
}

let funcionario1 : funcionario = { 
    code:  10,
    name: 'John'
}
console.log(funcionario.name)
console.log(funcionario.code)
