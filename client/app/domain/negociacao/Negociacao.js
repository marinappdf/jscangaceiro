class Negociacao {
  /** Pausa para entender o que é construtor
  Esse cara gera as propriedades do objeto
  O construtor é um método especial para criar e inicializar
  objetos criados a partir da classe*/
  /**
    constructor() {
      this._data = new Date();
      this._quantidade = 1;
      this._valor = 0.0;
    }
    */

  /** 
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;

    /**  Qual o sentido da mudança?
    O objeto só será criado se das variáveis existirem
    Elas estão sendo criadas no script do index_cap2 em 
    var n1 = new Negociacao(new Date(), 10, 100) 
    Adicionalmente, as propriedades que contenham _ (underline) 
    só poderão ser acessadas pelos próprios métodos da classe.
    Adiciona os _ e testa novo, qual valor aparece no console?
    Nenhum, porque o _ bloqueia ao acesso ao valor.
    Object.freeze(this); // Congela o objeto, não permite que ele seja alterado
  }*/

  // Reescrevendo o construtor para otmizar o código
  /** Concisão: Reduz a quantidade de código necessário para atribuir 
      múltiplas propriedades.
      Legibilidade: Facilita a leitura e compreensão do código,
      especialmente em classes com muitas propriedades.
      Manutenção**: Se você precisar adicionar ou remover propriedades
      no futuro, basta ajustar o objeto literal dentro de `Object.assign`, 
      sem precisar alterar várias linhas de código. */
  constructor(_data, _quantidade, _valor) {
    Object.assign(this, { _quantidade, _valor });
    this._data = new Date(_data.getTime());
    Object.freeze(this);
  }

  // Método, funções dentro de uma classe
  //obtemVolume() {
  getVolume() {
    return this._quantidade * this._valor;
  }

  // Getters
  // getPropeiedade() -> método
  // get propriedade() -> é acessada como uma propriedade, mesmo sendo ummetodo

  //getData() {
  get data() {
    // return this._data;
    return new Date(this._data.getTime());
    // Cada vez que é chamado, um novo objeto é criado com o valor da propriedade congelada.
    // Isso é importante para evitar que o objeto original seja alterado
  }

  // getQuantidade() {
  get quantidade() {
    return this._quantidade;
  }

  //getValor() {
  get valor() {
    return this._valor;
  }
}
