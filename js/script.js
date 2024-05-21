document.addEventListener("DOMContentLoaded", function () {
    const BotaoAdd = document.getElementById('botao');
    const Input = document.getElementById('input-tarefa');
    const Tarefas = document.getElementById('tarefas');
    let marcado = false;

    function adicionarTarefa() {
        if (Input.value !== '') {
            const tarefa = document.createElement('p');
            tarefa.classList.add('tarefa');
            tarefa.innerText = '- ' + Input.value;
            Tarefas.appendChild(tarefa);
            Input.value = '';

            tarefa.addEventListener('click', function () {
                marcado = !marcado;
                tarefa.style.textDecoration = marcado ? 'line-through' : '';
            });

            tarefa.addEventListener('dblclick', function () {
                Tarefas.removeChild(tarefa);
            });
        }
    }

    BotaoAdd.addEventListener('click', adicionarTarefa);

    const BotaoRemoverConcluidas = document.getElementById('remover-concluidas');
    BotaoRemoverConcluidas.addEventListener('click', function () {
        const tarefasConcluidas = document.querySelectorAll('p.tarefa[style*="line-through"]');
        tarefasConcluidas.forEach(function (tarefa) {
            Tarefas.removeChild(tarefa);
        });
    });
});
