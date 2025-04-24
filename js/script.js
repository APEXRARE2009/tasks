let inputTime = document.querySelector(".time");
let blockTime = document.querySelector(".times");

let times = new Date();
let h = times.getHours();
let m = times.getMinutes();
let s = times.getSeconds();
if (m < 10) {
    m = "0" + m;
} else if (s < 10) {
    s = "0" + s;
}
inputTime.value = `${h}:${m}`;

function deleteTask(id) {
    if (confirm("delete task")) {
        fetch(`delete_task.php?id=${id}`)
            .then(() => {
                window.location.reload();
            })
    }
}

function listTasks() {
    fetch("get_tasks.php")
        .then((response) => {
            return response.json();
        })
        .then((content) => {
            let list = document.querySelector(".task-list");
            list.innerHTML = "";
            content.forEach((elem) => {
                let item = document.createElement("li");
                item.classList.add("item");
                let date = document.createElement("div");
                date.classList.add("dateEl", "item-elem");
                date.innerHTML = `<div class="dateTxt txt">date:</div> ${elem.task_date}`;
                item.appendChild(date);
                let time = document.createElement("div");
                time.classList.add("timeEl", "item-elem");
                time.innerHTML = `<div class="timeTxt txt">time:</div> ${elem.task_time}`;
                item.appendChild(time);
                let priority = document.createElement("div");
                priority.classList.add("priority", "item-elem");
                priority.innerHTML = `<div class="priorityTxt txt">priority:</div> ${elem.priority}`;
                item.appendChild(priority);
                let task = document.createElement("div");
                task.classList.add("task", "item-elem");
                task.innerHTML = `<div class="taskTxt txt">task:</div> ${elem.task}`;
                item.appendChild(task);
                item.innerHTML += `<button onclick=\"deleteTask(${elem.id})\" class=\"btn\">delete</button>`
                list.appendChild(item);
            });
        })
}

listTasks();

function time() {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    console.log(`${h}:${m}:${s}`);
    inputTime.setAttribute("min", `${h}:${m}`)
    blockTime.textContent = `${h}:${m}:${s}`;
}

setInterval(() => {
    time();
}, 100);