// CAP. 1 Criando array para os dados do formulário
//alert("Olá, mundo!");

var campos = [
  document.querySelector("#data"),
  document.querySelector("#valor"),
  document.querySelector("#quantidade"),
];

console.log(campos);

var tbody = document.querySelector("table tbody");

// Repare que a classe chamada é a form, a do formulário, não a do botão, por quê?
document.querySelector(".form").addEventListener("submit", function (event) {
  //alert("Formulário enviado com sucesso!");
  console.log("Formulário enviado com sucesso!");
  // cria elemento tr
  var tr = document.createElement("tr");

  // cria um elemento td PARA CADA campo do formulário, cada item do array
  campos.forEach(function (campo) {
    // cria td
    var td = document.createElement("td");
    // adiciona o valor de cada campo do formulário/índice do array
    td.textContent = campo.value;
    // adiciona td como filho de tr!
    tr.appendChild(td);
  });

  // rcriar td para o volume
  var tdVolume = document.createElement("td"); // cria td
  tdVolume.textContent = campos[1].value * campos[2].value; // calcula o volume, quem são os índices 1 e 2?
  tr.appendChild(tdVolume); // adiciona tdVolume como filho de tr

  // por que não está no foreach?
  // Poderia estar, mas , para isso ,o array campos teria que ter 4 elementos, o que não faz sentido, já que o volume é um cálculo a partir de dois campos do formulário.

  // adiciona tr como filho de tbody
  tbody.appendChild(tr);

  // Se testar agora, não vamos ver o resultado porque o submit do formulário recarrega a páginaão queremos submeter o formulário,
  // Para apenas pegar os dados do formulpario no evento submit,
  // cancelarmos o comportamento padrão do evento com:
  event.preventDefault();
  // testa agora

  // limpa os campos do formulário
  campos.forEach(function (campo) {
    campo.value = "";
  });
  // campos[0].value = '';
  // campos[1].value = 1;
  // campos[2].value = 0;

  campos[0].focus(); // coloca o foco no primeiro campo do formulário
});
