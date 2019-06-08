var selection = 0;
var todos = [];

//todos object template
function toDo(identifier, description, state){
  this.description = description,
  this.state = state,
  this.identifier = identifier
}

//function to see if every todo is complete
function areAllTodosComplete(){
  for (var i = 0; i < todos.length; i++){
  if (todos[i].state === 'notComplete')
    return false
  }
  
  return true
}

while (selection != 9) {

//checking for any todos
if (todos.length === 0){
  console.log("No todos created yet. Create one to get started.")
  
  console.log("enter description")
    var description = //input here
    
  console.log("enter brief identifier")
    var identifier = //input here
    
    todos.push(new toDo(identifier, description, "notComplete"))
}
  
//Menu
console.log("Hello there, here's a list of the following optionsf\n
To view todos press 1 \n
To view completed todos press 2
To view all todos (completed or not) press 3
To view a particular todo press 4
To create a new todo press 5
To mark a todo as complete press 6
To edit a todo press 7
To change the state of a todo press 8
To delete all completed todos press 9
To exit the program enter 10)

//User input here______________

switch(selection) {
  case 1:
    for (var i = 0; i < todos.length; i++)
      if (todos[i].state === "notComplete")
        console.log(todos[i])
    break;
  case 2:
    for (var i = 0; i < todos.length; i++)
      if (todos[i].state === "complete")
        console.log(todos[i])
    break;
  case 3:
    for (var i = 0; i < todos.length; i++)
      console.log(todos[i])
    break;
  case 4:
    console.log("enter identifier to view a particular todo")
    var identifier = input
    
    for (var i = 0; i < todos.length; i++)
      if (todos[i].identifier === identifier) {
        console.log(todos[i].description)
        console.log(todos[i].state)
      }
        
  case 4:
    console.log("enter description")
    var description = //input here
    
    console.log("enter brief identifier")
    var identifier = //input here
    
    todos.push(new toDo(identifier, description, "notComplete"))
    
    break;
  case 5:
    
    console.log("enter identifier")
    var identifier = //input here
    
    for (var i = 0; i < todos.length; i++){
        if (todos[i].identifier === identifier)
            todos[i].state = "complete"
    } 
    break;
  case 6:
    console.log("Select todo that you wish to edit (enter identifier)")
    var identifier = //input
    
    for (var i = 0; i < todos.length; i++)
        if (todos[i].identifier === identifier){
          console.log("enter description")
          todos[i].description = //input
        }
          
    
    break;
  case 7:
    console.log("enter desired state (complete or incomplete")
    var state = //input
    
    for (var i = 0; i < todos.length; i++)
        if (todos[i].identifier === identifier)
          todos[i].state = state
    break;
  case 8:
    for (var i = 0; i < todos.length; i++){
        if (todos[i].state === "complete"){
          todos.splice(i, 1)
          i--
        }
    }
    break;
  default:
    break
} 

//seeing if all todos are complete or not
if (areAllTodosComplete()){
  console.log('Congratulations, you have completed all of your todos.')
}

}

