export default class Project {    
    tasks = [];
    constructor(name) {
        this.name = name;
    }

    get name () {
        return this._name;
    }

    set name (newName) {
        newName === null ? alert("Please choose a name for your project.") : this._name = newName;
    }

    getTasks() {
        return this.tasks;
    }

    addTasks(task) {
        this.tasks.push(task);
    } 


    deleteTask = (deletedTask) => {
        this.tasks = this.tasks.filter((task) => task.name !== deletedTask.name)
    }
}
