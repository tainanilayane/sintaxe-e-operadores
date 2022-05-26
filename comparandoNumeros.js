function comparaNumeros (n1,n2) {
    if(!n1 || !n2) return "Defina dois número!";
    
    const fraseUm = criarFraseUm(n1,n2); 
    const fraseDois = criarFraseDois(n1,n2);

    return `${fraseUm} ${fraseDois}`
}

function criarFraseUm(n1,n2) {
    let saoIguais = '';
    
    if(n1 !== n2) {
        saoIguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`
};

function criarFraseDois(n1,n2) {
    const soma = n1 + n2;

    let resultado10 ='menor';
    let resultado20 ='menor';

    const maior10 = soma > 10 ;
    const maior20 = soma > 20 ;

    if(maior10) {
        resultado10 = 'maior'
    }
    
    if(maior20) {
        resultado20 = 'maior'
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
  
console.log(comparaNumeros(5,6))