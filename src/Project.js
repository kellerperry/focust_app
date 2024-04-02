export default class Project {    
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    get name () {
        return this._name;
    }

    set name (newName) {
        newName === null ? alert("Please choose a name for your project.") : this._name = newName;
    }

    getTasks() {
        return this._tasks;
    }

    addTasks(task) {
        this.tasks.push(task);
    } 


    removeTask = (deletedTask) => {
        this.tasks = tasks.filter((task) => task.name !== deletedTask.name)
    }
}
