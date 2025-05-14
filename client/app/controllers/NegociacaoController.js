class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._negociacoes = new Negociacoes();
    this._negociacoesView = new NegociacoesView("#negociacoes");
    this._negociacoesView.update(this._negociacoes);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView("#mensagemView");
    this._mensagemView.update(this._mensagem);
  }
  adicionar(event) {
    event.preventDefault();
    this._negociacoes.adiciona(this._criaNegociacao());
    //this._negociacoes.adiciona(negociacao);
    this._mensagem.texto = "Negociação adicionada com sucesso!";
    this._negociacoesView.update(this._negociacoes);
    // imprime a lista com o novo elemento
    console.log(this._negociacoes.paraArray());

    this._mensagemView.update(this._mensagem);
    this._limpaFormulario();
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }

  _criaNegociacao() {
    // retorna uma instância de negociação
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseInt(this._inputQuantidade.value),
      parseFloat(this._inputValor.value)
    );
  }
}
