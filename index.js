    let inputArray = []

    function newElement(){
        let listDom = document.querySelector("#lu")
        let createList = document.createElement("li")
         createList.innerHTML = task.value

        if(task.value.trim() !== ""){
        listDom.append(createList)
        localStorage.setItem("input", task.value);  
        inputArray.push(localStorage.getItem("input"));
        console.log(inputArray)
        $("#success").toast("show")  
        }
        else{
        $("#failure").toast("show") 
        }
}