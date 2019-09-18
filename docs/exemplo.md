# Desafio

Primeiramente, vamos criar um arquivo `index.html` com a estrutura básica de html.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <title>Carros API</title>
    <meta charset="UTF-8" />
  </head>

  <body></body>
</html>
```

Agora para organizar um pouco nossa página, vamos separá-la em duas partes, a primeira será para exibir os botões e opções e a segunda será para listar os dados (tabela).
Para isso, dentro da tag `body` vamos adicionar o seguinte trecho de código.

```html
<div class="opcoes">
  <h1>Marcas de carros</h1>
  <span id="carregar-dados">Carregar</span>
</div>
<div class="conteudo">
  <table class="tabela">
    <thead>
      <tr>
        <th style="width: 40px;">Código</th>
        <th>Marca</th>
      </tr>
    </thead>
    <tbody id="lista-marcas">
      <tr>
        <td>1</td>
        <td>Audi</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Ferrari</td>
      </tr>
    </tbody>
  </table>
</div>
```

Agora para dar vida a nossa página, vamos utilizar javascript, para recebermos os dados. Para isso, dentro da tag `body` do html, vamos adicionar uma tag `script` e dentro dela vamos criar algumas funções que já irei enumerar.

1. Carregar dados da Api
1. Listar dados na tabela (Aqui o bixo pega, pois iremos utilizar o famoso DOM `Document Object Model`)
1. Inicializar (Para iniciar o javascript com a página)

Nosso script ficara algo parecido com

```html
<script>
  const url = "https://fipeapi.appspot.com/api/1/carros/marcas.json";

  function iniciar() {
    const carregar = document.getElementById("carregar-dados");
    carregar.addEventListener("click", async function() {
      const marcas = await carregarDadosApi();
      listarMarcasTabela(marcas);
    });
  }

  async function carregarDadosApi() {
    const repsonse = await fetch(url).then(res => res.json());
    return repsonse;
  }

  function listarMarcasTabela(marcas = []) {
    const tbodyE = document.getElementById("lista-marcas");
    tbodyE.innerHTML = "";
    if (marcas.length === 0) {
      const trE = document.createElement("tr");
      const tdInfo = document.createElement("td");
      tdInfo.colSpan = 2;
      tdInfo.innerText = "Não há dados a listar";
      trE.appendChild(tdInfo);
      tbodyE.appendChild(trE);
      return false;
    }
    marcas.forEach(marca => {
      const trE = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdMarca = document.createElement("td");
      tdId.innerText = marca.id;
      tdMarca.innerText = marca.fipe_name;
      trE.appendChild(tdId);
      trE.appendChild(tdMarca);
      tbodyE.appendChild(trE);
    });
  }

  iniciar();
</script>
```

Se você entendeu tranquilamente o script acima, show de bola, vamos avançar mais rapido do que você imagina, caso não, vamos precisar rever algumas coisas, que são.

- Async/Await
- Arrow Functions
- Manipulação de arrays com forEach, map, filters e reduce

> Sugiro você dar uma lida sobre os assuntos antes de continuarmos!

Para finalizarmos, vamos adicionar um estilo nessa página, pois o que realmente importa para quem ta usando não é o javascript com await ou async usando filter ou map, mais que seja intuitivo e agradável (não que eu consegui fazer isso kkkkkkkk).

Então dentro da tag `head` vamos adicionar uma tag `style` com o seguinte conteudo

```html
<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap"
  rel="stylesheet"
/>
<style>
  *,
  a {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: rgb(29, 41, 81);
    box-sizing: border-box;
  }

  .opcoes {
    min-width: 100%;
    height: 60px;
    background-color: rgb(0, 128, 255);
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9em;
  }

  .opcoes h1,
  .opcoes span {
    color: white;
  }

  .opcoes span {
    margin: 10px;
    padding: 10px;
    cursor: pointer;
    transition: 3s ease;
  }

  .opcoes span:hover {
    border-bottom: 1px solid white;
  }

  .conteudo {
    max-width: 760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .tabela {
    margin-top: 40px;
    border: none;
    width: 100%;
    border: 0.5px rgb(15, 82, 186) solid;
    border-collapse: collapse;
  }

  .tabela thead tr {
    background-color: rgb(15, 82, 186);
  }

  .tabela thead th {
    color: white;
    padding: 10px;
    text-align: left;
  }

  .tabela tbody td {
    padding: 5px 10px;
  }
</style>
```
