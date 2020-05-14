function mostraMaior(){
  var n1 = document.getElementById("n1").value;
  var n2 = document.getElementById("n2").value;
  var n3 = document.getElementById("n3").value;
  var lista = [];

  lista.push(n1);
  lista.push(n2);
  lista.push(n3);
  lista.sort((a,b) => a - b);
  var maior = lista.pop();
  alert("O maior é: " + maior);
}
