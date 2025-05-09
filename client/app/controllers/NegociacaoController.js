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
    event.preventDefault();

    // let converter = new DataConverter();
    // let data = converter.paraData(this._inputData.value);
    // let negociacao = new Negociacao(
    //   data,
    //   parseInt(this._inputQuantidade.value),
    //   parseFloat(this._inputValor.value)
    // );
    // let diaMesAno = converter.paraTexto(negociacao.data);
    // console.log(diaMesAno);

    let negociacao = new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
    console.log(negociacao);

    let diaMesAno = DateConverter.paraTexto(negociacao.data);
    console.log(diaMesAno);
  }
}
