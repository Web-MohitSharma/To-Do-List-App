let user_input = document.getElementById("input-box");
let list_container = document.getElementById("list-container");

function addtask() {
    if (user_input.value === "") {
        alert("You need to write some task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = user_input.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x"
        li.appendChild(span).firstElementChild;
    }
    user_input.value = "";
    saveData()
}
list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
    else if (e.target.tagName === "LI") {
        e.target.setAttribute("style", "text-decoration:line-through;background:green");
        e.target.firstElementChild.setAttribute("style", "background: red;cursor: pointer;text-decoration: none;color:#fff;");
        saveData()
    }
}, false);
function saveData() {
    localStorage.setItem("data", list_container.innerHTML);
};

function Showtask() {
    list_container.innerHTML = localStorage.getItem("data");
};
Showtask();