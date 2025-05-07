class NegociacaoController {
  adicionar(event) {
    // Previne o comportamento padrão do evento, impedir a submissão do formulário
    event.preventDefault();

    // realizando o bind, $ mantém document como seu contexto this

    let $ = document.querySelector.bind(document);
    let inputData = $("#data");
    let inputQuantidade = $("#quantidade");
    let inputValor = $("#valor");
    console.log(inputData.value);
    console.log(parseInt(inputQuantidade.value));
    console.log(parseFloat(inputValor.value));

    //alert("Formulário enviado com sucesso pelo controller!");
  }
}
