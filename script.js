function ConverterDolar() {
    let valorElemento = document.getElementById("valor");
    let valor = valorElemento.value;
    let valorDolar = parseFloat(valor); // transforma string em número
  
    let valorReal = valorDolar * 5.16;
    console.log(valorReal);
  
    let elementoValorConvertido = document.getElementById("valorConvertido");
    let valorConvertido = `R$ ${valorReal}`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    let valorElemento = document.getElementById("valor").value;
    let valorEuro = parseFloat(valorElemento);
    
    let valorReal = valorEuro * 5.64;
    let elementoValorConvertido = document.getElementById("valorConvertidoEuro");
    let valorConvertido = `R$ ${valorReal}`;
    elementoValorConvertido.innerHTML = valorConvertido;
    
  }
  
  function ConverterBitcoin() {
    let valorElemento = document.getElementById("valor").value;
    let valorBitcoin = parseFloat(valorElemento);
    
    let valorReal = valorBitcoin * 202.642;
    let elementoValorConvertido = document.getElementById("valorConvertidoBitcoin");
    let valorConvertido = `R$ ${valorReal}`;
    elementoValorConvertido.innerHTML = valorConvertido;
  }