/** O app.js será o nosso arquivo executável,
 o index,  primeiro a ser rodado, é quem vai chamar os outros arquivos.
 Nesse sentido, ele faz parte do controller, ele é o painel de controle,
 o painel onde estão os botões.
 O nome do arquivo app.js é uma convenção, não é obrigatório.
 A letra maiúscula no início do nome do arquivo é uma convenção para 
 indicar que o arquivo não uma classe.
 */

let controller = new NegociacaoController();
// O controller é o responsável por controlar a aplicação,

/** Quando o botão do formulário for clicado, o evento submit será disparado, 
e vai chamar um método do controller.*/

document
  .querySelector(".form")
  .addEventListener("submit", controller.adicionar.bind(controller));
//   .addEventListener("submit", controller.adicionar;
// Toda função/método possui um this dinâmico que assume como valor o contexto no qual foi chamado -> por isso o uso do bind
/**
Quando você escreve `controller.adicionar`, está apenas dizendo ao JavaScript: 
"Aqui está a função que deve ser chamada quando o evento ocorrer."

O navegador será responsável por chamar essa função automaticamente quando o 
evento `submit` for disparado.

Se você colocasse `controller.adicionar()` com os parênteses, 
a função seria **executada imediatamente** no momento em que o código é lido.
Isso quebraria o comportamento esperado.
*/
