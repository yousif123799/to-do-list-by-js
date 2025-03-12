const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');


function addtask(){
    const task = input.value;
    if(task===""){
        alert("Please enter a task");
    }
    else{
        const hr = document.createElement('hr');
        const text = document.createElement('span');
        const li = document.createElement('li');
        const btndel = document.createElement('button');
        const btndone = document.createElement('button');
        btndone.style.marginLeft = "10px";
        btndel.style.marginLeft = "10px";
        
        text.textContent = task;
        
        btndel.innerHTML = "Delete";
        btndone.innerHTML = "Done";

        li.appendChild(text);
        li.appendChild(btndone);
        li.appendChild(btndel);
        list.appendChild(li );
        list.appendChild(hr);
        input.value = "";
        
        btndel.addEventListener('click',() => {
            li.remove();
            hr.remove();
        });
        btndone.onclick = function(){
            if(li.style.backgroundColor === "lightgreen"){
                li.style.backgroundColor = "white";
            }
            else{
                li.style.backgroundColor = "lightgreen";
            }
        }
        btndone.innerHTML = "Done";
    btndone.style.backgroundColor = "green";
    btndone.style.color = "white";
    btndone.style.border = "none";
    btndone.style.padding = "5px 10px";
    btndone.style.borderRadius = "5px";
    btndone.style.cursor = "pointer";

    btndel.innerHTML = "Delete";
    btndel.style.backgroundColor = "red";
    btndel.style.color = "white";
    btndel.style.border = "none";
    btndel.style.padding = "5px 10px";
    btndel.style.borderRadius = "5px";
    btndel.style.cursor = "pointer";
        

    }
}
button.addEventListener('click',addtask);
