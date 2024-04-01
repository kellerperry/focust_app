export default class Task {
    constructor(title, project, priority, dueDate) {
        this.title = title;
        this.project = project;
        this.priority = priority;
        this.dueDate = dueDate;
    }

    getTitle = () => {
        return this.title;
    }

    setTitle = (newTitle) => {
        newTitle = null ? alert("Please give your task a name.") : this.title = newTitle;
    }

    getProject = () => {
        return this.project;
    }

    setProject = (newProject) => {
        newProject === null ? this.project = "today" : this.project = newProject;
    }

    getPriority = () => {
        return this.priority
    }

    setPriority = (newPriority) => {
        newPriority = null ? this.priority = 0 : this.priority = newPriority;
    }

    getDueDate = () => {
        return this.dueDate;
    }

    setDueDate = (newDueDate) => {
        this.dueDate = newDueDate;
    }

}