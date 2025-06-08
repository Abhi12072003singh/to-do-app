let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")

//adding task
function addTask(){
    let item = document.createElement("li")
    let task = inp.value.trim();
    
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    item.innerText = task;

    let delbtn = document.createElement("button") 
    delbtn.innerText = "delete"
    delbtn.classList.add("delete")


    item.appendChild(delbtn)
    ul.appendChild(item)
    inp.value = ""
}

//adding task using click 
btn.addEventListener("click",addTask);


//adding task using enter key
inp.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

//handle deletion

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let par = event.target.parentElement
        par.remove()
    }
})

// let delbtns = document.querySelectorAll(".delete")
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement
//         par.remove()
//     })
// }