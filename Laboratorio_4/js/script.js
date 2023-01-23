$("#ButtonPost").click(TodoPost)
$("#ButtonClear").click(TodoClear)
$("#ButtonMark").click(TodoMark)
$("#ButtonDelete").click(TodoDelete)


function TodoPost(e){
    e.preventDefault()
    let todo = $("#todoText").val()
    $("#todoList").append(`<input type="checkbox" name="todo" /> <label>${todo} </label>  <br>    `)
}

function TodoClear(){
    let todos = $("[name='todo']")
    for(let i =0;i < todos.length; i++){
       todos[i].checked = false
    }
}

function TodoMark(){
    let todos = $("[name='todo']")
    for(let i =0;i < todos.length; i++){
     todos[i].checked = true
  }
 }

function TodoDelete(){
    $("#todoList").html("")
}