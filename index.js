// const pessoas = ['Lucas', 'Matheus', 'Marcos']
// console.log(...pessoas)

// let pessoas1 = ['Lucas', 'Matheus', 'Marcos']
// let pessoas2 = ['João', 'Pedro', 'Paulo']

// pessoas1 = pessoas1.concat(pessoas2)

// pessoas1 = [...pessoas1, ...pessoas2]
// console.log(pessoas1)

const pessoa1 = { nome: 'Lucas', idade: 21}

const objetoClonado = { ...pessoa1 }
console.log(objetoClonado)
console.log(pessoa1)