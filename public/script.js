const catalogo = [
    {
        id: 1,
        titulo: "The Vampire Diares",
        tipo: "serie",
        ano: 2009,
        generos: ["romance", "terror", "drama", "suspense"],
        nota: 7.7,
        assistido: true
    },
    {
        id: 2,
        titulo: "The Originals",
        tipo: "serie",
        ano: 2013,
        generos: ["romance", "terror", "drama", "suspense"],
        nota: 6.2,
        assistido: false
    },
    {
        id: 3,
        titulo: "Pânico",
        tipo: "filme",
        ano: 1996,
        generos: ["terror", "suspense"],
        nota: 7.3,
        assistido: true
    },
    {
        id: 4,
        titulo: "Parasita",
        tipo: "filme",
        ano: 2019,
        generos: ["terror", "suspense", "drama"],
        nota: 8.5,
        assistido: true
    },
    {
        id: 5,
        titulo: "Sex and the City",
        tipo: "serie",
        ano: 1998,
        generos: ["romance", "comédia", "drama", "classico"],
        nota: 7.4,
        assistido: true
    },
    {
        id: 6,
        titulo: "Pretty Little Liars",
        tipo: "serie",
        ano: 2010,
        generos: ["drama", "crime", "suspense"],
        nota: 7.3,
        assistido: false
    }

];
console.log(catalogo); // mostra todo o catalogo
console.log("Primeiro título:", catalogo[0].titulo); //chama só o titulo com a posiçao 0 que é o primeiro
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano); //mostra o ultimo adicionado independente de que mais algum seja adicionado no futuro
// Mostra o segundo grenero do terceiro item e faz uma verificação se existe o segundo genero no terceiro item
if (catalogo[2].generos.length > 1) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
}
else {
    console.log("Esse item não possui um segundo gênero.");
}
// Mostra em lista o tipo, titulo e ano de cada item adicionado
catalogo.forEach(function (item) {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
// Coloca todos os itens em caixa alta usando o comando .toUpperCase
let titulosEmCaixaAlta = catalogo.map(function (item) {
    return item.titulo.toUpperCase();
})
console.log(titulosEmCaixaAlta);
// Filtra todos os itens não assistidos e conta eles mostrando a quantidade de não assistidos (filter)
let naoAssistidos = catalogo.filter(function (item) {
    return item.assistido === false;
})
console.log("Quantidade de itens não assistidos: ", naoAssistidos.length);
// Procura e faz verificação se tem item com a nota maior igua a 9
if (catalogo.find(item => item.nota >= 9)) {
    console.log(catalogo.find(item => item.nota >= 9).titulo);
}
else {
    console.log("Nenhum item com nota maior ou igual a 9 foi encontrado.")
}
//Soma todas as notas dos itens e calcula a media das notas
let somaTodasAsNotas = catalogo.reduce((contador, item) => {
    return contador + item.nota;
}, 0);

let mediaDasNotas = somaTodasAsNotas / catalogo.length;
console.log("A média das notas registradas é: " + mediaDasNotas.toFixed(2));
//Soma todas as notas dos itens assistidos e calcula a media das notas assistidas
let assistidos = catalogo.filter(item => item.assistido === true);

if (assistidos.length > 0) {

    let somaAssistidos = assistidos.reduce((contador, item) => contador + item.nota, 0);

    let mediaDasNotasAssistidas = somaAssistidos / assistidos.length;

    console.log("Média das notas dos filmes/series assistidos: " + mediaDasNotasAssistidas.toFixed(2));

} else {
    console.log("Nenhum item assistido.");
}
// Fala se exite algum item com o ano abaixo de 2000 respondendo em true ou false (boolean)
let existeAntes = catalogo.some(function (item) {
    return item.ano < 2000;
});
console.log("Existe item com ano menor que 2000: ", existeAntes);
// Fala se  todos do catalogo tem pelo menos um genero cadastrado respondendo em true ou false (boolean)
let todosTemGenero = catalogo.every(function (item) {
    return item.generos.length > 0;
});

console.log("Todos os itens tem pelo menos um gênero: ", todosTemGenero);

function Resumo() {
    let total = catalogo.length;//numero total de itens cadastrados

    let filmes = catalogo.filter(item => item.tipo === "filme").length;//numero total de filmes cadastrados
    let series = catalogo.filter(item => item.tipo === "serie").length;//numero total de series cadastrados

    let naoAssistidos = catalogo.filter(item => item.assistido === false).length;//ranking tem dois porque um é  pro console e outro pro html
    catalogo.sort((a, b) => b.nota - a.nota);
    let top3 = catalogo.slice(0, 3);
    let textoTop3 = top3
        .map((item, i) => `${i + 1}º - ${item.titulo} (${item.nota})`)
        .join("\n");

    let textoTop3html = top3
        .map((item, i) => `<li>${i + 1}º - ${item.titulo} (${item.nota})</li>`)
        .join("");

    console.log("Resumo: \n" +
        "Total de itens no catálogo: " + total +
        "\nQuantidade de filmes: " + filmes +
        "\nQuantidade de séries: " + series +
        "\nQuantidade de não assistidos: " + naoAssistidos +
        "\nMédia geral de notas: " + mediaDasNotas.toFixed(2) +
        "\n\nTop 3:\n" + textoTop3
    );//pra console

    let resumoHtml =
        `<h2>Resumo</h2>
    <p>Total de itens no catálogo: ${total}</p>
    <p>Quantidade de filmes: ${filmes}</p>
    <p>Quantidade de séries: ${series}</p>
    <p>Quantidade de não assistidos: ${naoAssistidos}</p>
    <p>Média geral de notas: ${mediaDasNotas.toFixed(2)}</p>

    <h3>Top 3</h3>
    <ul>
        ${textoTop3html}
    </ul>`;//pra html

    let output = document.getElementById('output'); //pegando elemento por ID
    output.innerHTML = resumoHtml; //usando o innerHTML
}
Resumo();//chamando a função