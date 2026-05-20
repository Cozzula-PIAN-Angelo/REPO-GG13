/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let tasks = [];
// Ogni task: { id: number, testo: string, completato: boolean }

let filtro = "tutti"; // "tutti" | "attivi" | "completati"

/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. Listener sul submit di #form-task (preventDefault, validazione, push, render)
   2. Funzione rendiLista() (filtra, crea <li>, aggiorna contatore)
   3. Listener su #lista-task con event delegation (Elimina + checkbox)
   4. Listener sui button .filtri (cambia filtro, classe attivo, render)
   EXTRA: localStorage per persistenza
*/

const formTask = document.querySelector("#form-task");
const campoTask = document.querySelector("#campo-task");
const errore = document.querySelector("#errore");
const lista = document.querySelector("#lista-task");
const contatore = document.querySelector("#contatore");

formTask.addEventListener("submit", (e) => {
  e.preventDefault();
  if (campoTask.value.trim() === "") {
    errore.textContent = "de per forza si va a letto";
    return;
  }
  errore.textContent = "";
  addItem();
  renderList();
  campoTask.value = "";
});

function addItem() {
  let task = {
    id: Date.now(),
    testo: campoTask.value,
    completato: false,
  };
  tasks.push(task);
  aggiornaContatore();
}

function renderList() {
  lista.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const cancella = document.createElement("button");
    cancella.classList.add("delete");
    if (task.completato) {
      span.style.textDecoration = "line-through";
    }

    checkbox.type = "checkbox";
    checkbox.checked = task.completato;
    span.textContent = task.testo;
    cancella.textContent = "Cancella";

    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);
    li.appendChild(cancella);

    cancella.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderList();
      aggiornaContatore();
    });
    checkbox.addEventListener("change", () => {
      task.completato = checkbox.checked;
      renderList();
      aggiornaContatore();
    });
  });
}

function aggiornaContatore() {
  const actives = tasks.filter((task) => !task.completato);
  contatore.textContent = actives.length;
}
