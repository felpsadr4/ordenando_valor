// Captura elementos HTML por seus IDs
const valores = document.getElementById('valores');  // Elemento para exibir valores
const adicionarElemento = document.getElementById('btn-adicionar');  // Botão para adicionar elemento
const ordenar = document.getElementById('btn-ordenar');  // Botão para ordenar
const misturar = document.getElementById('btn-misturar');  // Botão para misturar
let itens = [];  // Array para armazenar os itens

// Adicionar elemento à lista
adicionarElemento.addEventListener('click', (evento) => {
    evento.preventDefault();
    let input = document.querySelector('#elemento');
    itens.push(parseInt(input.value));
    console.log(itens);
    adicionandoElementoNaTela(itens);
});

// Função para adicionar elemento na tela
function adicionandoElementoNaTela(lista) {
    valores.innerHTML = '';  // Limpa o conteúdo anterior
    lista.forEach(item => {
        valores.innerHTML += `<li>${item}</li>`;
    });
}
// Função para atualizar a opção de ordenação selecionada
function atualizarSelect() {
    let select = document.querySelector("#organiza");
    let optionValue = select.options[select.selectedIndex];
    let valorSelect = optionValue.value;

    return valorSelect;
}

// Ordenar os elementos
ordenar.addEventListener('click', (evento) => {
    evento.preventDefault();
    let valorDoSelect = atualizarSelect();
    
    // Chama a função de ordenação de acordo com a opção selecionada
    if (valorDoSelect === "sorted") {
        selection_sort(itens);
        adicionandoElementoNaTela(itens);
    }
    if (valorDoSelect === "quick_sort") {
        quick_sort(itens);
        itens = quick_sort(itens);
        adicionandoElementoNaTela(itens);
    }
    if (valorDoSelect === "bubble_sort") {
        bubble_sort(itens);
        adicionandoElementoNaTela(itens);
    }
});

// Função para ordenar a lista usando o algoritmo Bubble Sort
function bubble_sort(lista) {
    var tamanhoLista = lista.length;  
    for (var i = 0; i < tamanhoLista; i++) {
        for (var j = 0; j < (tamanhoLista - i - 1); j++) {
            if(lista[j] > lista[j+1]) {
                var posicaoLista = lista[j]; 
                lista[j] = lista[j+1]; 
                lista[j+1] = posicaoLista; 
            }
        }        
    }
}

// Misturar os elementos
misturar.addEventListener('click', (evento) => {
    evento.preventDefault();
    shuffle(itens);
    adicionandoElementoNaTela(itens);
});

// Função para embaralhar a lista
function shuffle(lista) {
    for (var j, x, i = lista.length; i; j = Math.floor(Math.random() * i), x = lista[--i], lista[i] = lista[j], lista[j] = x);
    return lista;
}

// Função para ordenar a lista usando o algoritmo Quick Sort
function quick_sort(lista) {
    const pivo = lista[lista.length - 1];
    const leftLista = [];
    const rightLista = [];

    if (lista.length <= 1) {
        return lista;
    }
    for (let i = 0; i < lista.length - 1; i++) {
        lista[i] < pivo ? leftLista.push(lista[i]) :  rightLista.push(lista[i]);
    }
    return [...quick_sort(leftLista), pivo, ...quick_sort(rightLista)];
}

// Função para ordenar a lista usando o algoritmo Selection Sort
function selection_sort(lista) { 
    let tamanhoLista = lista.length;
    for (let i = 0; i < tamanhoLista; i++) {
        let posicao = i;
        for (let j = i + 1; j < tamanhoLista; j++) {
            if (lista[j] < lista[posicao]) {
                posicao = j; 
            }
         }
         if (posicao !== i) {
             let tmp = lista[i]; 
             lista[i] = lista[posicao];
             lista[posicao] = tmp;      
        }
    }
    return lista;
}
