
import { getUser } from "./dom.js";

///////GET
let getData = async function(){
    try {
        let {data} = await axios.get("https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents");    
        getUser(data);
    }
    catch (error) {
        console.log(error);
    }
}
///////ADD

let addUser = async function(myUser){
    try {
        let {data} = await axios.post("https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents", myUser);    
        getData()
    }
    catch (error) {
        console.log(error);
    }
}
/// EDIT
let editUser = async function(id, user){
    try {
        let {data} = await axios.put(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents/${id}`, user);    
        getData()
    }
    catch (error) {
        console.log(error);
    }
}
////////Delete

let deleteUser = async function(id){
    try {
        let {data} = await axios.delete(`https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/documents/${id}`);    
        getData()
    }
    catch (error) {
        console.log(error);
    }
}

export {getData, addUser, editUser, deleteUser}