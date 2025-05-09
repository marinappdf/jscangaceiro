class NegociacaoController {
  constructor() {
    // Chamar no construtor melhora a performance poruqe o código só percorre o DOM uma vez.
    // realizando o bind, $ mantém document como seu contexto this
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
  }

  adicionar(event) {
    // Previne o comportamento padrão do evento, impedir a submissão do formulário
    event.preventDefault();

    // let $ = document.querySelector.bind(document);
    // let inputData = $("#data");
    // let inputQuantidade = $("#quantidade");
    // let inputValor = $("#valor");
    // console.log(this._inputData.value);
    // console.log(parseInt(this._inputQuantidade.value));
    // console.log(parseFloat(this._inputValor.value));
    //alert("Formulário enviado com sucesso pelo controller!");

    // agora o Date recebe um array
    let data = new Date(
      ...this._inputData.value.split("-").map((item, indice) => {
        return item - (indice % 2); // para os índices 0 e 2 , o módulo é 0, para o índice 1, o módulo é 1// o método map() cria um novo array com os resultados da chamada de uma função
        // O método map() cria um novo array com os resultados da chamada de uma função
      })
    );
    console.log(data);

    // Criando uma instância de Negociacao/ um objeto
    let negociacao = new Negociacao(
      //this._inputData.value,
      data,
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    console.log(negociacao);
  }
}
