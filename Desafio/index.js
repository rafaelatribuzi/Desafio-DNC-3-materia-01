let completedTasks = 0;

document.addEventListener("DOMContentLoaded", function () {
document.getElementById("create-todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addtask();
    });
});


function addtask() {
    
    //Captura dos Inputs
    let taskInput = document.getElementById ('taskInput');
    let tagInput = document.getElementById ('tagInput');
    let taskText = taskInput.value.trim();
    let tagText = tagInput.value.trim();


    if(taskText === "") {
        alert ('Por favor, insira o nome da tarefa!');
        return;
    }

    //Criação do Item da Lista - elementos HTML

    let taskList = document.getElementById ('task-list'); //cria a lista
    let listItem = document.createElement ('li'); // cria os elementos da lista
    listItem.classList.add ('task-item'); // cria uma classe para essa lista

    // Criando Elementos da Tarefa

    let taskName = document.createElement ('p'); // Cria o elemento <p>
    taskName.classList.add ('task-name'); // Adiciona a classe CSS
    taskName.textContent = taskText; // Define o texto da tarefa

    //Criando a tag
    
    let taskTag = document.createElement ('span'); //Cria o elemento <span>
    taskTag.classList.add ('task-tag'); // Adiciona a classe CSS
    taskTag.textContent = tagText; // Define o texto da Tag
    
    //Criando a data - O código adiciona a data no formato local.

    let date = new Date().toLocaleDateString(); 
    let taskDate = document.createElement ('small');
    taskDate.classList.add('task-date');
    taskDate.textContent = `Criado em: ${date}`;

    //Criando o botão Concluir


    let completedBtn = document.createElement('button');
    completedBtn.classList.add ('completed-btn')
    completedBtn.textContent = 'Concluir';


    // Criando o ícone de check (inicalmente oculto)

    let checkIcon = document.createElement ('span');
    checkIcon.classList.add ('check-icon');
    checkIcon.innerHTML = '✔';
    completedBtn.textContent = 'Concluir'; // VERIFICAR SE É COMPLETEDBTN MESMO OU CHECKICON
    checkIcon.style.display = 'none';

    // Adicionando evento de clique ao botão
    completedBtn.addEventListener('click', function () {
    completedBtn.style.display = 'none'; // Esconde o botão
    checkIcon.style.display = 'inline'; // Exibe o ícone de check
});

    //Criando o container da tag e data

    let tagDateContainer = document.createElement("div");
    tagDateContainer.classList.add ('tag-date-container');
    
    tagDateContainer.appendChild (taskTag);
    tagDateContainer.appendChild (taskDate);
    

    // Criando o container do nome e da TagDateContainer

    let taskContend = document.createElement ('div');
    taskContend.classList.add ('task-contend');

    taskContend.appendChild (taskName);
    taskContend.appendChild (tagDateContainer);



    
    // Montando e adicionado os elementos

    //listItem.appendChild(taskName); // Nome da tarefa
    //listItem.appendChild(tagDateContainer); // Container tag e data
    listItem.appendChild(taskContend); //Container name e container tag e data
    listItem.appendChild(completedBtn); // Botão
    listItem.appendChild(checkIcon); //Icone de check
    
    taskList.appendChild(listItem); //Adiciona a tarefa à lista


    // Limpando os campos

    taskInput.value = "";
    tagInput.value = "";




}