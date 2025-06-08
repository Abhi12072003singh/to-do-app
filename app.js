/*
 * This file is part of Todo App.
 *
 * Todo App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Todo App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Todo App.  If not, see <https://www.gnu.org/licenses/>.
 */


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