import { useState,useEffect } from "react";
import axios from "axios";
function Todo()
{

    // let todosInitialValue=["Cook","Workout","Gym","Studying"];
    let todosInitialValue=[{name:"Default name",status:" default status"}];
    let [todos,setTodos]=useState(todosInitialValue);
    let [todoEntered,setTodoEntered]=useState("Default");
    let [statusEntered,setStatusEntered]=useState("Default Status"); 

    useEffect(function(){
        console.log("Function called on log");
        getTodos();
    },[]);

    function getTodos()
    {
        axios.get("/todos")
        .then(function(response){
            console.log(response.data);
            setTodos(response.data);
        })
        .catch(function (error){
            console.log(error);
        });
    }
    function changeTodoEntered(e)
    {
        e.preventDefault();
         console.log(e.target.value);
        setTodoEntered(e.target.value);
    }
    function addTodo()
    {
        // let newTodoArray=[...todos,todoEntered];
        let newTodoObject={name: todoEntered,status:statusEntered};
        console.log(newTodoObject);
        axios.post("/todos",newTodoObject).then(function (response){
            console.log(response);
            if(response.data.status===1)
            {
                getTodos();
                setTodoEntered("");
                setStatusEntered("completed");
            }
        }).catch(function (error){
            console.log(error);
        });
    }
    function deleteTodo(indexToDelete)
    {
        // let newTodo=todos.filter(function(val,index){
        //     if(index===indexToDelete)
        //     {
        //         return false;
        //     }
        //     return true;
        // })
        // setTodos(newTodo);
        axios.delete(`/todos/${indexToDelete}`)
        .then(function(response)
    {
        console.log(response);
        getTodos();
    })
    .catch(function (error){
        console.log(error);
    })
    }
    return (
        <div className="out">
            <input type="text" name="todoitem" defaultValue={todoEntered} onChange={changeTodoEntered}/>
            <select onChange={function(e){
                setStatusEntered(e.target.value)
            }}>
                <option value="completed">Completed</option>
                <option value="incomplete">Not Completed</option>
            </select>
            <button onClick={addTodo}>Add Todo</button>
            {
                todos.map(function(val,index)
            {
                return(
                <div key={index}>
                    {val.name} <button onClick={function(){
                        deleteTodo(index);
                    }}>Delete</button>
                    <div>status: {val.status}</div>
                    <br/>
                </div>)
                
            })
            }
        </div>
    );
}
export default Todo;