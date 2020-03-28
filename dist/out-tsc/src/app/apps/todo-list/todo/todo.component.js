import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let TodoComponent = class TodoComponent {
    constructor(fb) {
        this.todoArray = [
            { task: 'Meeting with Urban Team', completed: false },
            { task: 'Duplicate a project for new customer', completed: false },
            { task: 'Project meeting with CEO', completed: false },
            { task: 'Follow up of team zilla', completed: false },
            { task: 'Level up for Antony', completed: false }
        ];
        this.form = fb.group({
            todoitem: ['', Validators.required]
        });
    }
    ngOnInit() {
    }
    addTodo() {
        let newTodoList = { task: '', completed: false };
        newTodoList.task = this.form.value.todoitem;
        this.todoArray.push(newTodoList);
        this.form.reset();
    }
    removeTodoItem(item) {
        for (let i = 0; i <= this.todoArray.length; i++) {
            if (item === this.todoArray[i]) {
                this.todoArray.splice(i, 1);
            }
        }
    }
    changeTodoStatus(event, index) {
        if (event.target.checked) {
            this.todoArray[index]['completed'] = true;
        }
        else {
            this.todoArray[index]['completed'] = false;
        }
    }
};
TodoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-todo',
        templateUrl: './todo.component.html',
        styleUrls: ['./todo.component.scss']
    })
], TodoComponent);
export { TodoComponent };
//# sourceMappingURL=todo.component.js.map