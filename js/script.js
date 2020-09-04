"use strict";
class Todo {
    constructor(form, input, todoList, todoCompleted, todoContainer) {
        this.todoContainer = document.querySelector(todoContainer);
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.todoData = new Map(JSON.parse(localStorage.getItem("toDoList")));
    }

    addToStorage() {
        localStorage.setItem("toDoList", JSON.stringify([...this.todoData]));
    }

    render() {
        this.todoList.textContent = "";
        this.todoCompleted.textContent = "";
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }

    createItem(todo) {
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.setAttribute("key", `${todo.key}`);
        li.insertAdjacentHTML(
            "beforeend",
            `
        <span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
        `
        );
        if (todo.completed) {
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();

        if (this.input.value.trim()) {
            const newTodo = {
                value: this.input.value,
                completed: false,
                key: this.generateKey(),
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        } else {
            alert("Необходимо заполнить поле");
        }
    }

    generateKey() {
        return (
            Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
        );
    }

    deleteItem(elem) {
        const li = elem.closest(".todo-item"),
            keyLi = li.getAttribute("key");
        this.todoData.delete(keyLi);
        this.addToStorage();
        li.remove();
    }

    completedItem(elem) {
        const li = elem.closest(".todo-item"),
            keyLi = li.getAttribute("key"),
            complete = this.todoData.get(keyLi).completed;
        if (complete) {
            this.todoData.get(keyLi).completed = false;
        } else {
            this.todoData.get(keyLi).completed = true;
        }
        this.render();
    }

    handler() {
        this.todoContainer.addEventListener("click", e => {
            const target = e.target;
            if (target.className === "todo-remove") {
                this.deleteItem(target);
            }

            if (target.className === "todo-complete") {
                this.completedItem(target);
            }
        });
    }

    init() {
        this.form.addEventListener("submit", this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}

const todo = new Todo(
    ".todo-control",
    ".header-input",
    ".todo-list",
    ".todo-completed",
    ".todo-container"
);
todo.init();
