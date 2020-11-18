document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
 
    let form = document.querySelector("form");
    let new_list_item = document.getElementById("new-task-description");
    console.log(new_list_item.value)

// adds list item to form ----------------------
    form.addEventListener("submit",function(e){
      e.preventDefault();
      let li = document.createElement("li")
      let ul = document.getElementById("tasks")
      
      const dropDown = document.getElementById("priority");
      const dropDownValue = dropDown.options[dropDown.selectedIndex].value;
      if (dropDownValue === "red"){
        li.style.backgroundColor = "red";
      }
      if (dropDownValue === "yellow"){
        li.style.backgroundColor = "yellow";
      }
      if (dropDownValue === "green"){
        li.style.backgroundColor = "green";
      }
      
      // add delete button ----------------------
      let button = document.createElement("button")
      button.addEventListener("click",onClick)
      button.innerHTML = "X"
      button.style.marginLeft = "10px"
      li.innerHTML = new_list_item.value
      // console.log("Hello")
      ul.appendChild(li)
      li.appendChild(button)
      e.target.reset();
    })
    
   
});
function onClick(e){
  // console.log(e.target.parentElement)
  // debugger
  e.target.parentElement.remove()
}
