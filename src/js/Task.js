export default class Task {
    constructor(name, priority, dueDate, project) {
        this.name = name;
        this.priority = priority;
        this.dueDate = dueDate;
        this.project = project;
    }

    get name () {
        return this._name;
    }

    set name (newName) {
        newName = "" ? alert("Please give your task a name.") : this._name = newName;
    }

    get project () {
        return this._project;
    }

    set project (newProject) {
        newProject === null ? this.project = "Today" : this._project = newProject;
    }

    get Priority () {
        return this.priority
    }

    set Priority (newPriority) {
        newPriority = null ? this.priority = 0 : this._priority = newPriority;
    }

    get dueDate () {
        return this._dueDate;
    }

    set dueDate (newDueDate) {
        newDueDate === null ? this._dueDate = new Date() : this._dueDate = newDueDate;
    }

}