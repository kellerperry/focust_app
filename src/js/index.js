import "../styles/style.css";
import "boxicons";
import { loadImages } from "../loadImages";
import Task from "./Task";
import Project from "./Project";

//Default Objects__________________

const projectStorage = [];
const Inbox = new Project("Inbox");

projectStorage.unshift(Inbox);

/* DOM-Related Code 
___________________________________ */

const addTaskMainBtn = document.querySelector("#addTaskMainBtn");

addTaskMainBtn.addEventListener("click", () => {
  loadTaskDialog();
  const taskDialog = document.querySelector("#taskDialog");
  const taskForm = document.querySelector("#addTaskForm");
  taskForm.reset();
  taskDialog.showModal();
});

const addProjectSidebarBtn = document.querySelector("#add-project-sidebar");

addProjectSidebarBtn.addEventListener("click", () => {
  loadProjectDialog();
  const projectDialog = document.querySelector("#projectDialog");
  const projectForm = document.querySelector("#addProjectForm");
  projectForm.reset();
  projectDialog.showModal();
});

/* Task Modal __________________*/

function loadTaskDialog() {
  const taskDialog = document.createElement("dialog");
  const taskForm = document.createElement("form");
  const topSection = document.createElement("div");
  const bottomSection = document.createElement("div");
  const taskNameInput = document.createElement("input");
  const priorityDiv = document.createElement("div");
  const taskPriority = document.createElement("button");
  const taskDueDate = document.createElement("button");
  const taskProjectInput = document.createElement("input");
  const confirmAddBtn = document.createElement("button");
  const cancelAddBtn = document.createElement("button");

  const formElements = [topSection, bottomSection];

  taskNameInput.setAttribute("placeholder", "Task name");
  taskProjectInput.setAttribute("placeholder", "Project name");

  taskDialog.setAttribute("id", "taskDialog");
  taskDialog.setAttribute("class", "dialog");
  taskForm.setAttribute("id", "addTaskForm");
  topSection.setAttribute("id", "topFormSection");
  bottomSection.setAttribute("id", "bottomFormSection");
  taskNameInput.setAttribute("id", "task-name-input");
  priorityDiv.setAttribute("id", "priority-div");
  taskDueDate.setAttribute("id", "task-due-date");
  taskProjectInput.setAttribute("id", "task-project-input");

  confirmAddBtn.setAttribute("id", "confirm-add-btn");
  cancelAddBtn.setAttribute("id", "cancel-add-btn");

  taskPriority.textContent = "Priority";
  taskDueDate.textContent = "Due date";
  taskProjectInput.textContent = "Project";
  confirmAddBtn.textContent = "Add";
  cancelAddBtn.textContent = "Cancel";

  priorityDiv.appendChild(taskPriority);
  priorityDiv.appendChild(taskDueDate);
  topSection.appendChild(taskNameInput);
  topSection.appendChild(priorityDiv);

  confirmAddBtn.addEventListener("click", addTask);
  cancelAddBtn.addEventListener("click", closeDialog);

  bottomSection.appendChild(confirmAddBtn);
  bottomSection.appendChild(cancelAddBtn);
  bottomSection.appendChild(taskProjectInput);

  formElements.forEach((item) => taskForm.appendChild(item));

  taskDialog.appendChild(taskForm);
  taskDialog.addEventListener("click", clickOutsideModal);
  document.body.appendChild(taskDialog);

  return taskDialog;
}

function getDialogTaskInput() {
  const name = document.getElementById("task-name-input").value;
  const priority = document.getElementById("priority-div").value;
  const dueDate = document.getElementById("task-due-date").value;
  let projectName = document.getElementById("task-project-input").value;
  let project;
  if (projectName === "") {
    projectName = "Inbox";
    project = projectName;
  } else if (getProject(projectName)) {
    project = projectName;
  } else {
    let newProject = new Project(projectName);
    projectStorage.push(newProject);
    project = newProject.name;
  }

  return new Task(name, priority, dueDate, project);
}

function addTask(event) {
  event.preventDefault();
  const newTask = getDialogTaskInput();
  const projectName = newTask.project;
  const project = getProject(projectName);

  if (newTask.name === "") {
    alert("Please give your task a name.");
  } else {
    project.addTasks(newTask);
    loadAllTasks();
    loadProjectList();

    const taskDialog = document.querySelector("#taskDialog");
    taskDialog.close();
  }
}

function removeTask(task) {
  const project = task.project;
  const findProject = projectStorage.find((item) => item.name === project);
  findProject.deleteTask(task);
  loadAllTasks();
}

function closeDialog(event) {
  event.preventDefault();
  const dialog = document.querySelector(".dialog");
  dialog.close();
}

function clickOutsideModal(event) {
  if (event.target.tagName === "DIALOG") {
    event.target.close();
  }
}

/* Task Card __________________*/

function createTaskCard(task) {
  const taskListContainer = document.getElementById("task-list-container");
  const taskContainer = document.createElement("div");
  const taskTitle = document.createElement("p");
  const taskProject = document.createElement("button");
  const deleteTaskBtn = document.createElement("button");
  // const deleteTaskTooltip = document.createElement('span');

  taskContainer.setAttribute("class", "task-container");
  taskTitle.setAttribute("class", "taskTitle");
  taskProject.setAttribute("class", "task-project project-link");
  deleteTaskBtn.setAttribute("class", "taskCard-delete-task deleteBtn");
  // deleteTaskTooltip.setAttribute('class', 'tooltip');

  taskTitle.innerText = task.name;
  taskProject.innerText = task.project;
  deleteTaskBtn.innerText = "X";
  // deleteTaskTooltip.innerText = "Delete task";

  const project = getProject(task.project);

  taskProject.addEventListener("click", () => {
    loadTaskList(project);
  });

  deleteTaskBtn.addEventListener("click", () => {
    removeTask(task);
  });

  taskContainer.appendChild(taskTitle);
  taskContainer.appendChild(deleteTaskBtn);
  taskContainer.appendChild(taskProject);

  taskListContainer.appendChild(taskContainer);
}

/* Task List __________________*/

function refreshList(list) {
  list.innerHTML = "";
}

function changeListHeader(project) {
  const currentProject = document.getElementById("current-project-header");
  currentProject.innerText = `${project.name}`;
}

function loadAllTasks() {
  const taskList = document.getElementById("task-list-container");
  refreshList(taskList);
  for (const projects of projectStorage) {
    const tasks = projects.tasks;
    for (const task of tasks) {
      createTaskCard(task);
    }
  }
}

function loadTaskList(project) {
  const taskList = document.getElementById("task-list-container");
  if (project.name === "Inbox") {
    loadAllTasks();
    changeListHeader(project);
    return;
  }
  refreshList(taskList)
  changeListHeader(project);

  const tasks = project.tasks;
  for (const task of tasks) {
    createTaskCard(task);
  }
}


/* Project List __________________*/

function createProjectLink(project) {
  const projectListContainer = document.getElementById(
    "project-list-container"
  );
  const projectLinkContainer = document.createElement("div");
  const projectLink = document.createElement("button");
  const projectIconSpan = document.createElement("span");
  const projectIcon = document.createElement("box-icon");
  const projectName = document.createElement("div");
  const projectMenuButtonDiv = document.createElement("div");
  const projectMenuButton = document.createElement("button");
  const projectMenuButtonIcon = document.createElement("box-icon");
  const projectDropdown = createProjectDropdown();

  projectLinkContainer.setAttribute("class", "project-link-container");
  projectLinkContainer.setAttribute("id", `${project.name}`);
  projectLink.setAttribute("class", "project-menu-title project-link");
  projectIcon.setAttribute("class", "project-menu-icon");
  projectName.setAttribute('class', "project-menu-name")
  projectName.setAttribute("id", `project-menu-title-${project.name}`);

  projectMenuButtonDiv.setAttribute("class", "project-dropdown-button-div");
  projectMenuButton.setAttribute("class", "project-dropdown-btn");
  projectMenuButtonIcon.setAttribute("class", "project-dropdown-icon");
  projectMenuButtonIcon.setAttribute("name", "dots-horizontal-rounded");

  projectIcon.setAttribute("name", "folder");
  projectIcon.setAttribute("type", "");

  projectName.innerText = project.name;

  projectMenuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const activeDropdown = document.querySelector(".show");
    if (activeDropdown) {
      activeDropdown.classList.toggle("show");
    }
    projectDropdown.classList.toggle("show");
  });

  document.documentElement.addEventListener("click", () => {
    if (!projectDropdown) {
      return;
    } else if (projectDropdown.classList.contains("show")) {
      projectDropdown.classList.toggle("show");
    }
  });

  projectLinkContainer.addEventListener("click", () => {
    loadTaskList(project);
  });

  projectIconSpan.appendChild(projectIcon);

  projectLink.appendChild(projectIconSpan);
  projectLink.appendChild(projectName);

  projectMenuButton.appendChild(projectMenuButtonIcon);
  projectMenuButtonDiv.appendChild(projectMenuButton);

  projectLinkContainer.appendChild(projectLink);
  projectLinkContainer.appendChild(projectMenuButtonDiv);
  projectLinkContainer.appendChild(projectDropdown);
  projectListContainer.appendChild(projectLinkContainer);
}

function changeProjectLinkColor() {
  const allProjectLinks = document.querySelectorAll(".project-link-container");

  allProjectLinks.forEach((projectLink) => {
    projectLink.addEventListener("click", (e) => {
      const selected = document.querySelector(".project-link-active");
      const allProjectIcons = document.querySelectorAll(".project-menu-icon");

      allProjectIcons.forEach((icon) => {
        icon.setAttribute("type", "regular");
      });

      if (selected) {
        selected.classList.remove("project-link-active");
      }
      projectLink.classList.add("project-link-active");
      const projectIcon = projectLink.querySelector(".project-menu-icon");
      projectIcon.setAttribute("type", "solid");
    });
  });
}

function loadProjectList() {
  const projectList = document.getElementById("project-list-container");
  refreshList(projectList);
  for (let project in projectStorage) {
    createProjectLink(projectStorage[project]);
  }
  changeProjectLinkColor();
}

function getProject(project) {
  const rightProject = projectStorage.find((item) => item.name === project);
  return rightProject;
}

function removeProject(project) {
   const rightProject = getProject(project);
   if(project === "Inbox") {
        alert("You can not delete the Inbox project. Please make another selection");
   } else if(confirm(`Are you sure you want to delete ${project}?`)){
        projectStorage.splice(projectStorage.indexOf(rightProject), 1);

        const inboxProject = getProject("Inbox");
        loadTaskList(inboxProject); 
        changeListHeader(inboxProject);
        loadProjectList();
   } else {
        return;
   }
}

/*Project Menu Dropdown __________________*/

function createProjectDropdown() {
  const dropdown = document.createElement("div");

  const editDiv = document.createElement("div");
  const editIcon = document.createElement("box-icon");
  const editBtn = document.createElement("button");

  const deleteDiv = document.createElement("div");
  const deleteIcon = document.createElement("box-icon");
  const deleteBtn = document.createElement("button");

  dropdown.setAttribute("class", "project-dropdown");
  editDiv.setAttribute("class", "project-edit");
  editBtn.setAttribute("class", "project-edit-btn");
  deleteDiv.setAttribute("class", "project-delete");
  deleteBtn.setAttribute("class", "project-delete-btn");

  editIcon.setAttribute("name", "pencil");
  deleteIcon.setAttribute("name", "x-circle");

  editBtn.textContent = "Edit";
  deleteBtn.textContent = "Delete";

  deleteDiv.addEventListener('click', (e) => {
   e.stopPropagation();
    const projectLink =  e.target.closest('.project-link-container');
   const projectName = projectLink.id;
   removeProject(projectName);
  })

  editDiv.appendChild(editIcon);
  editDiv.appendChild(editBtn);
  deleteDiv.appendChild(deleteIcon);
  deleteDiv.appendChild(deleteBtn);
  dropdown.appendChild(editDiv);
  dropdown.appendChild(deleteDiv);

  return dropdown;
}

/* Add Project Modal __________________*/

function addProject(event) {
  event.preventDefault();
  let project = document.getElementById("addproject-name-input").value;
  const projectDialog = document.getElementById("projectDialog");

  if (project === "") {
    alert("Please provide a name for your project.");
  } else if (getProject(project)) {
    alert(
      "This project already exists. Please choose a different name for your project."
    );
  } else {
    let newProject = new Project(project);
    projectStorage.push(newProject);
    createProjectLink(newProject);
    loadProjectList();
    projectDialog.close();
  }
}

function loadProjectDialog() {
  const projectDialog = document.createElement("dialog");
  const projectForm = document.createElement("form");
  const topSection = document.createElement("div");
  const bottomSection = document.createElement("div");
  const projectNameInput = document.createElement("input");
  const confirmAddBtn = document.createElement("button");
  const cancelAddBtn = document.createElement("button");

  const formElements = [topSection, bottomSection];

  projectNameInput.setAttribute("placeholder", "Project name");

  projectDialog.setAttribute("id", "projectDialog");
  projectDialog.setAttribute("class", "dialog");
  projectForm.setAttribute("id", "addProjectForm");
  topSection.setAttribute("id", "topProjectFormSection");
  bottomSection.setAttribute("id", "bottomProjectFormSection");
  projectNameInput.setAttribute("id", "addproject-name-input");

  confirmAddBtn.setAttribute("id", "confirm-add-project-btn");
  cancelAddBtn.setAttribute("id", "cancel-add-project-btn");

  confirmAddBtn.textContent = "Add";
  cancelAddBtn.textContent = "Cancel";

  topSection.appendChild(projectNameInput);

  confirmAddBtn.addEventListener("click", addProject);
  cancelAddBtn.addEventListener("click", closeDialog);

  bottomSection.appendChild(confirmAddBtn);
  bottomSection.appendChild(cancelAddBtn);

  formElements.forEach((item) => projectForm.appendChild(item));

  projectDialog.appendChild(projectForm);
  projectDialog.addEventListener("click", clickOutsideModal);
  document.body.appendChild(projectDialog);

  return projectDialog;
}

/* CSS Related Code
____________________________ */

loadImages();

/* Page Initialization Code 
____________________________ */

loadProjectList(projectStorage);
