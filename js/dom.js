import { addUser, editUser, deleteUser } from "./api.js";

let form1 = document.querySelector(".form1")
let form2 = document.querySelector(".form2")
let modal = document.querySelector(".modal")

window.onclick = (e)=>{
    if(e.target == modal){
        modal.style.display = "none"
    }
}


form1.onsubmit  =(e)=>{
    e.preventDefault();
    let myUser = {
        'id': new Date().getTime(),
        'type_document' : e.target["type"].value,
        'description' : e.target["description"].value,
        'status' : e.target["status"].value
    }
    addUser(myUser)
    form1.reset();
}

function getUser(ar){
    let table = document.querySelector("table")
    table.innerHTML = ''
    ar.forEach(element => {
        let tR = document.createElement("tr")
        let id1 =  document.createElement("td")
        let type1 =  document.createElement("td")
        let description1 =  document.createElement("td")
        let status1 =  document.createElement("td") 
        id1.innerHTML = element["id"]
        type1.innerHTML = element["type_document"]
        description1.innerHTML = element["description"]
        status1.innerHTML = element["status"]
        //edit
        let edit =  document.createElement("button")
        edit.innerHTML = "Edit"
        edit.onclick = ()=>{
            modal.style.display = "block";
            form2["type"].value = element["type_document"];
            form2["description"].value = element["description"];
            form2["status"].value = element["status"];
            form2.onsubmit = (e)=>{
                e.preventDefault();
                let user = {
                    'type_document' : e.target["type"].value,
                    'description' : e.target["description"].value,
                    'status' : e.target["status"].value
                }   
                editUser(element.id, user)
                form2.reset();
                modal.style.display = "none"
            }
        }
        ////////Delete
        let del =  document.createElement("button")
        del.innerHTML = "Delete"
        del.onclick = ()=>{
            deleteUser(element.id)
        }


        tR.appendChild(id1)
        tR.appendChild(type1)
        tR.appendChild(description1)
        tR.appendChild(status1)
        tR.appendChild(del)
        tR.appendChild(edit)
        table.appendChild(tR)

    });
}

export {getUser}