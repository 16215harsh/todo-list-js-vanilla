let counter = 1;
function addtask(){
    let task = document.getElementById("todo-input");
    let taskval = task.value ;
    let newtask = document.createElement("li");
    counter++;
    newtask.setAttribute("id", "todo-"+counter);
    newtask.setAttribute("class","todo-item");
    newtask.innerHTML = `<span>${taskval}</span>
    <div class = "todo-actions">
        <button class = "delete" onclick = 'deletetask(${counter})'> Delete</button></div>`;
    document.getElementById("todo-list").appendChild(newtask);
}
function deletetask(value){
    let taskdel = document.getElementById("todo-"+value);
    taskdel.parentNode.removeChild(taskdel);
    console.log(value);
}