// comece a criar a sua função add na linha abaixo
function add(val1,val2) {
    let soma = val1 + val2
    return soma
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(val1,val2) {
    let produto = 0
    for( let i = 0; i < val1; i++ ){
        produto = add(produto,val2)
    }
    return produto
}

// descomente a linha seguinte para testar sua função
 console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n) {
    let potencia = 1
    for( let i = 0; i < n; i++ ){
        potencia = multiply(potencia,x)
    }
    return potencia
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let factor = 1
    for (let i = 1; i <= x; i++){
      factor = multiply(factor,i)
    }
    return factor
  }

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
