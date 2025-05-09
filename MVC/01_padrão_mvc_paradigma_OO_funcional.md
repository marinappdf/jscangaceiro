# Padrão MVC (Model-View-Controller).

Este padrão cria uma separação marcante entre os dados da aplicação (model) e
sua apresentação (view).
O controller é responsável por processar as entradas do usuário e atualizar o modelo e a visão de acordo. Esse padrão permite uma melhor organização do código e facilita a manutenção e a escalabilidade da aplicação.

O interessante de separar o Model do View é que é possível ter várias representações visuais de um mesmo modelo sem que estas forcem qualquer alteração no
modelo.

View: index.html
Model: Negociacao.js
Controller: NegociacaoController.js

# Paradigma Orientado ao Objeto

O paradigma orientado a objetos (POO) é baseado no conceito de "objetos", que são instâncias de classes que encapsulam dados e comportamentos relacionados. Ele promove a reutilização de código por meio de herança, permite a abstração ao esconder detalhes internos, e facilita a modularidade e a manutenção do software. Os pilares principais do POO são: encapsulamento, herança, polimorfismo e abstração.

# Paradigma Funcional

O paradigma funcional é baseado em funções matemáticas e evita mudanças de estado e dados mutáveis. Ele enfatiza a aplicação de funções como o principal mecanismo de computação. Características importantes incluem funções de ordem superior, imutabilidade, e o uso de expressões em vez de instruções. Linguagens funcionais populares incluem Haskell, Lisp e Scala. Esse paradigma promove código mais previsível e fácil de testar.

## Principais Conceitos

- **Encapsulamento**: Esconde os detalhes internos de um objeto, expondo apenas o que é necessário.
- **Herança**: Permite que uma classe herde propriedades e métodos de outra classe.
- **Polimorfismo**: Permite que diferentes classes sejam tratadas como se fossem da mesma classe base.
- **Imutabilidade**: Dados que não podem ser alterados após sua criação.
- **Funções de Ordem Superior**: Funções que podem receber outras funções como argumentos ou retorná-las.
- **Separação de Responsabilidades**: Divisão clara entre diferentes partes do sistema, como no padrão MVC.

## Diferença entre expressões e instruções

No contexto de programação, uma **expressão** é uma construção que é avaliada para produzir um valor. Por exemplo, `2 + 3` é uma expressão que resulta no valor `5`. Já uma **instrução** é uma construção que realiza uma ação, como atribuir um valor a uma variável ou imprimir algo na tela. Por exemplo, `x = 5` é uma instrução que atribui o valor `5` à variável `x`. No paradigma funcional, o foco está no uso de expressões, enquanto paradigmas imperativos frequentemente utilizam instruções.

---
