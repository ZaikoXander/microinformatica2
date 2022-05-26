var numeros = [];

botao.onclick = function() { 
  //alert("OK");
  //criar o parágrafo
  if (d2.hasChildNodes()) {
    let child = d2.lastElementChild; 
    while (child) {
      d2.removeChild(child);
      child = d2.lastElementChild;
    }
  }

  let p = document.createElement("p");
  // definir o conteúdo do parágrafo
  p.innerHTML = `[ ${numeros} ]`;  //"Fatec";
  d2.appendChild(p);
  
}

b2.onclick = function() {
  // pegar o valor no input, converter para número
  // colocar o número no vetor
  let n = Number(input1.value);
  numeros.push(n);
}

function somar() {
  let soma = 0
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
  }
  return soma
}

b3.onclick = function() {
  let p = document.createElement("p");
  p.innerHTML = `A soma dos itens resultou em ${somar()}`
  d2.appendChild(p)
}

b4.onclick = function() {
  maior = numeros[0]
  for (let i = 1; i < numeros.length; i++) {
    if(numeros[i] > maior) {
      maior = numeros[i]
    }
  }
  let p = document.createElement("p");
  p.innerHTML = `O maior número dos itens é ${maior}`
  d2.appendChild(p)
}

b5.onclick = function() {
  menor = numeros[0]
  for (let i = 1; i < numeros.length; i++) {
    if(numeros[i] < menor) {
      menor = numeros[i]
    }
  }

  let p = document.createElement("p");
  p.innerHTML = `O menor número dos itens é ${menor}`
  d2.appendChild(p)
}

b6.onclick = function() {
  let media = somar() / numeros.length

  let p = document.createElement("p");
  p.innerHTML = `A média dos itens é ${media}`
  d2.appendChild(p)
}

b7.onclick = function() {
  numeros.sort(function(a, b){return a-b})
  let p = document.createElement("p");
  p.innerHTML = `A mediana dos itens é ${numeros.length % 2 == 0 ? ((numeros[numeros.length / 2] + numeros[numeros.length / 2 - 1]) / 2) : numeros[Math.floor(numeros.length / 2)]}`
  d2.appendChild(p)
}

b_graph.onclick = function() {
  var xValues = [];
  for (let i = 0; i < numeros.length; i++) {
    xValues.push(i)
  }
  var yValues = numeros;

  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 0}}],
      }
    }
  });
};