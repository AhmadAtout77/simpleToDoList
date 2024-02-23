
let createTask = function () {

    if (addedTask.value == "") return;

    let task_div = document.createElement("div");
    task_div.className = "task-item";

    let input_checkbox = document.createElement("input");
    input_checkbox.type = "checkbox";
    input_checkbox.className = "checkItem";
    input_checkbox.name = "doneTask";
    input_checkbox.onclick = function () {
        if (input_checkbox.checked == true) {
            input_txt.style.textDecoration = "line-through";
        } else {
            input_txt.style.textDecoration = "initial";
        }
        changeProgress();
    }

    let input_txt = document.createElement('input');
    input_txt.className = "task-desc";
    input_txt.type = "text";

    input_txt.value = addedTask.value;
    input_txt.disabled = true;
    input_txt.style.backgroundColor = " #e6f9ff";

    let edit_button = document.createElement('button');
    edit_button.className = "item-b";
    edit_button.innerHTML = "&#9998;";
    edit_button.flag = 0;
    edit_button.onclick = function () {

        if (input_checkbox.checked == true) {
            return;
        }
        if (edit_button.flag == 0) {
            edit_button.style.color = "black";
            input_txt.disabled = false;
            input_txt.style.backgroundColor = "white";
            edit_button.flag = 1;
        } else {
            edit_button.style.color = "#6c8aa7";
            input_txt.disabled = true;
            input_txt.style.backgroundColor = " #e6f9ff";
            edit_button.flag = 0;

        }


    };
    let del_button = document.createElement('button');
    del_button.className = "item-b";
    del_button.innerHTML = "&#x2715;";
    del_button.onclick = function () {
        del_button.parentElement.remove();
        changeProgress();

    }

    task_div.append(input_checkbox);
    task_div.append(input_txt);
    task_div.append(edit_button);
    task_div.append(del_button);

    Tasks.append(task_div);

    document.getElementById("addedTask").value = "";

    changeProgress();
};
function removeChecked() {

    let tasks = document.getElementsByClassName("task-item");

    for (let i = tasks.length - 1; i >= 0; i--) {
        if (tasks[i].querySelector(".checkItem").checked == true) {
            tasks[i].remove();
        }
    }

    changeProgress();

}

function clearArea() {
    addedTask.placeholder = " ";
}
function addPlaceholder() {
    addedTask.placeholder = "What needs to be done?";
}

function changeProgress() {
    let checked_tasks = [];
    let index = 0;
    let tasks = document.getElementById("Tasks").children;
    let percentage = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].querySelector(".checkItem").checked == true) {
            checked_tasks[index] = tasks[i];
            index++;
        }
    }
    document.getElementsByClassName("progress")[0].innerHTML =
        checked_tasks.length + " of " + document.getElementById("Tasks").children.length + " tasks done";

    percentage = ((checked_tasks.length/document.getElementById("Tasks").children.length) * 100) +"%";
    document.getElementById("progbar").style.width = percentage;

}











