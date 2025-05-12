class NegociacoesView {
  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
  constructor(selector) {
    this._elemento = document.querySelector(selector);
  }

  template(model) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody id="negociacoesView">
                ${model
                  .paraArray()
                  .map(
                    (negociacao) =>
                      // precisa converter antes de retornar!
                      `
                    <tr>
                        <td>${DateConverter.paraTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    `
                  )
                  .join("")}
            </tbody>
            <tfoot>
            <tr>
                <td colspan="3"></td>
                <td>${model.volumeTotal}</td>
            </tr>
            </tfoot>
        </table>
    `;
  }
}
