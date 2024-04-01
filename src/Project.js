export default class Project {    
    tasks = [];

    constructor(name) {
        this.name = name;
    }

    getName = () => {
        return this.name;
    }

    setName = (newName) => {
        newName === null ? alert("Please choose a name for your project.") : this.name = newName;
    }

    addTask = (task) => {
        task.setProject = this.getName();
        this.tasks.push(task);
    }

    removeTask = (deletedTask) => {
        this.tasks = tasks.filter((task) => task.getName() !== deletedTask.getName())
    }
}