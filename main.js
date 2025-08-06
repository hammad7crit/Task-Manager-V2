let createButton = document.querySelector(".createButton");
let tasksContainer = document.querySelector(".taskContainer");
tasksContainer.classList.add("flex", "flex-wrap", "gap-4", "p-6", "h-[100vh]");

createButton.addEventListener("click", () => {

    // -----
    let tasknameMain = document.querySelector(".tasknameMain");
    let taskdescMain = document.querySelector(".taskdescMain");
    if (tasknameMain.value.trim() === "") {
        tasknameMain.classList.add("border-red-500");
    setTimeout(() => {
        tasknameMain.classList.remove("border-red-500");
    }, 1000);
    return;
    }  

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("w-[calc(50%-0.5rem)]", "h-[70vh]", "border", "border-purple-600", "rounded-2xl", "flex", "flex-col", "justify-center", "gap-12", "p-6", "resize-none", "opacity-0" ,"transition-all", "duration-500", "ease-out","translate-y-4")
    tasksContainer.appendChild(taskDiv);
    requestAnimationFrame(() => {
        taskDiv.classList.remove("opacity-0", "translate-y-4")
        taskDiv.classList.add("opacity-100", "translate-y-0")
    });

    // ------- Input and Text Area


    let taskName = document.createElement("input");
    let taskDescription = document.createElement("textarea");
    taskName.value = tasknameMain.value
    taskDescription.value = taskdescMain.value;

    // ----- Read only set to true for both inputs

    taskName.readOnly = true;
    taskDescription.readOnly = true;

    //------

    taskName.classList.add("bg-transparent", "border", "border-cyan-300", "rounded-2xl", "h-[15%]", "pl-4")
    taskDiv.appendChild(taskName);
    taskDescription.classList.add("bg-transparent", "border", "border-cyan-300", "rounded-2xl", "p-4");
    taskDescription.setAttribute("rows","8")
    taskDiv.appendChild(taskDescription);

    // ------ Icon creation

    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("w-full", "flex", "justify-between");
    taskDiv.appendChild(actionsDiv);

    let taskCompletion = document.createElement("i");
    taskCompletion.classList.add("fa-solid", "fa-check", "bg-gradient-to-b", "from-green-300", "to-green-600" ,"px-8", "py-4", "rounded-2xl", "flex" , "justify-center", "items-center", "cursor-pointer", "hover:scale-110", "transition-all", "duration-300");
    actionsDiv.appendChild(taskCompletion);

    let taskDelete = document.createElement("i");
    taskDelete.classList.add("fa-solid", "fa-trash", "bg-gradient-to-b", "from-red-300", "to-red-600" ,"px-8", "py-4", "rounded-2xl", "flex" , "justify-center", "items-center", "cursor-pointer", "hover:scale-110", "transition-all", "duration-300");
    actionsDiv.appendChild(taskDelete);

    let taskEdit = document.createElement("i");
    taskEdit.classList.add("fa-solid", "fa-edit", "bg-gradient-to-b", "from-yellow-300", "to-yellow-600" ,"px-8", "py-4", "rounded-2xl", "flex" , "justify-center", "items-center", "cursor-pointer", "hover:scale-110", "transition-all", "duration-300");
    actionsDiv.appendChild(taskEdit);

    // ----- Actions

    taskCompletion.addEventListener("click", () => {
        taskCompletion.classList.toggle("from-green-300");
        taskCompletion.classList.toggle("to-green-600");
        taskCompletion.classList.toggle("from-green-500");
        taskCompletion.classList.toggle("to-green-900");
    });

    taskDelete.addEventListener("click", () => {
        const taskContainer = taskDelete.closest('div[class*="border-purple-600"]')
        taskContainer.remove();
    });

    taskEdit.addEventListener("click", () => {
        taskEdit.classList.toggle("from-yellow-300");
        taskEdit.classList.toggle("to-yellow-600");
        taskEdit.classList.toggle("from-yellow-500");
        taskEdit.classList.toggle("to-yellow-900");

        const isEditing = taskEdit.classList.contains("from-yellow-500");

        if (isEditing) {
            taskName.readOnly = false;
            taskDescription.readOnly = false;

            taskEdit.classList.remove("from-yellow-300", "to-yellow-600");
            taskEdit.classList.add("from-yellow-500", "to-yellow-900");
            taskEdit.classList.replace("fa-edit", "fa-save");
            taskName.focus();

            
        } else {
            taskName.readOnly = true;
            taskDescription.readOnly = true;

      
            taskEdit.classList.remove("from-yellow-500", "to-yellow-900");
            taskEdit.classList.add("from-yellow-300", "to-yellow-600");
            taskEdit.classList.replace("fa-save", "fa-edit"); 
        }
    });
})
