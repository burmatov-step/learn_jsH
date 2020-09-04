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
                    <button class="todo-edit"></button>
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

    deleteItem(li) {
        const keyLi = li.getAttribute("key");
        let count = 0;
        const senInt = setInterval(() => {
            li.style.transform = `translateX(${count}%)`;
            count -= 10;
            if (count < -120) {
                clearInterval(senInt);
                this.todoData.delete(keyLi);
                this.addToStorage();
                li.remove();
            }
        }, 20);
    }

    animateItem(li, keyLi, bool) {
        let count = 0;
        const senInt = setInterval(() => {
            li.style.transform = `translateX(${count}%)`;
            count -= 5;
            if (count < -120) {
                clearInterval(senInt);
                this.todoData.get(keyLi).completed = bool;
                this.render();
            }
        }, 20);
    }

    completedItem(li) {
        const keyLi = li.getAttribute("key"),
            complete = this.todoData.get(keyLi).completed;
        if (complete) {
            this.animateItem(li, keyLi, false);
        } else {
            this.animateItem(li, keyLi, true);
        }
    }
    editItem(li) {
        const span = li.querySelector("span"),
            keyLi = li.getAttribute("key");
        span.setAttribute("contenteditable", "true");
        span.focus();
        span.addEventListener("blur", () => {
            span.setAttribute("contenteditable", "false");
            this.todoData.get(keyLi).value = span.textContent;
            this.render();
        });
    }

    handler() {
        this.todoContainer.addEventListener("click", e => {
            const target = e.target,
                li = target.closest(".todo-item");

            if (target.className === "todo-remove") {
                this.deleteItem(li);
            }

            if (target.className === "todo-complete") {
                this.completedItem(li);
            }

            if (target.className === "todo-edit") {
                this.editItem(li);
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
