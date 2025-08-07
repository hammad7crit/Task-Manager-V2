let createButton = document.querySelector(".createButton");
let tasksContainer = document.querySelector(".taskContainer");
tasksContainer.classList.add("flex",
  "flex-col",              // 👈 stacks tasks vertically on small screens
  "md:flex-row",           // 👈 row layout only on larger screens
  "flex-wrap",             // wrap still applies
  "gap-4",
  "p-6",
  "min-h-screen"  );

createButton.addEventListener("click", () => {
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
    taskDiv.classList.add("w-full", 
    "md:w-[calc(50%-0.5rem)]", 
    "h-auto",
    "min-h-[300px]",
    "border", 
    "border-purple-600", 
    "rounded-2xl", 
    "flex", 
    "flex-col", 
    "justify-center", 
    "gap-6",
    "p-4",
    "resize-none", 
    "opacity-0", 
    "transition-all", 
    "duration-500", 
    "ease-out", 
    "translate-y-4"
);
    tasksContainer.appendChild(taskDiv);
    requestAnimationFrame(() => {
        taskDiv.classList.remove("opacity-0", "translate-y-4");
        taskDiv.classList.add("opacity-100", "translate-y-0");
    });

    let taskName = document.createElement("input");
    let taskDescription = document.createElement("textarea");
    taskName.value = tasknameMain.value;
    taskDescription.value = taskdescMain.value;

    taskName.readOnly = true;
    taskDescription.readOnly = true;

    taskName.classList.add("bg-transparent", "border", "border-cyan-300", "rounded-2xl", "h-[15%]", "pl-4");
    taskDiv.appendChild(taskName);
    taskDescription.classList.add("bg-transparent", 
    "border", 
    "border-cyan-300", 
    "rounded-2xl", 
    "p-4",
    "flex-grow", // Added to make it expand
    "min-h-[100px]");
    taskDiv.appendChild(taskDescription);

    let actionsDiv = document.createElement("div");
    actionsDiv.classList.add("w-full", "flex", "justify-between");
    taskDiv.appendChild(actionsDiv);

    let taskCompletion = document.createElement("i");
    taskCompletion.classList.add("fa-solid", "fa-check",
  "bg-gradient-to-b", "from-orange-300", "to-orange-600",
  "w-10", "h-10", "sm:w-12", "sm:h-12", 
  "text-sm", "sm:text-base",
  "rounded-xl",
  "flex", "justify-center", "items-center",
  "cursor-pointer", "hover:scale-110",
  "transition-all", "duration-300");
    actionsDiv.appendChild(taskCompletion);

    let taskDelete = document.createElement("i");
    taskDelete.classList.add("fa-solid", "fa-trash",
  "bg-gradient-to-b", "from-red-300", "to-red-600",
  "w-10", "h-10", "sm:w-12", "sm:h-12", 
  "text-sm", "sm:text-base",
  "rounded-xl",
  "flex", "justify-center", "items-center",
  "cursor-pointer", "hover:scale-110",
  "transition-all", "duration-300");
    actionsDiv.appendChild(taskDelete);

    let taskEdit = document.createElement("i");
    taskEdit.classList.add("fa-solid", "fa-edit",
  "bg-gradient-to-b", "from-yellow-300", "to-yellow-600",
  "w-10", "h-10", "sm:w-12", "sm:h-12", 
  "text-sm", "sm:text-base",
  "rounded-xl",
  "flex", "justify-center", "items-center",
  "cursor-pointer", "hover:scale-110",
  "transition-all", "duration-300");
    actionsDiv.appendChild(taskEdit);

    taskCompletion.addEventListener("click", () => {
        taskCompletion.classList.toggle("from-green-300");
        taskCompletion.classList.toggle("to-green-600");
        taskCompletion.classList.toggle("from-green-500");
        taskCompletion.classList.toggle("to-green-900");
    });

    taskDelete.addEventListener("click", () => {
        const taskContainer = taskDelete.closest('div[class*="border-purple-600"]');
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

    tasknameMain.value = "";
    taskdescMain.value = "";
});