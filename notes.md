1. select the form with query selector or id selector
2. add an event listener to the form that is listening for a submit
3. add prevent event listener to the event listener on the submit
4. select the input value to fill and save it as a variable 
5. create an li item and save it as a li variable 
6. select the ul and set it as a variable 
7. put the li.innerHTML to the input value 
7. append the li to the ul 
--------------DELETE BUTTON ------------------------
1. create element button
2. innerHTML button "X"
3. append button to li 
4. addEventListener to button (click)
5. make function outside of event listener 
6. run debugger in function to see what e.target is 
------------------CHALLENGE---------------------------
1. add a dropdown in html between input and submit button(google drop down menu)
    -(or add innerHTML to the form)
2. google javascript retrieve dropdown selected value
3. go to console on page and drop the code change get element by id to the id you gave the select property.
3. add id to grab select tag 
var e = document.getElementById("priority");
var dropDownValue = e.value;
4. check out what e is => then what e.options is when changing drop down 
    -then check out what e.options[e.selectedIndex]
5.change css of task item based on what was selected in the drop down item


