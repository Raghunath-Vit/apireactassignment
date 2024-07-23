import { useState } from "react";
function Hobby()
{
    let todosInitialValue=[];
    let [todos,setTodos]=useState(todosInitialValue);
    let [todoEntered,setTodoEntered]=useState("My Hobby"); 

    function changeTodoEntered(e)
    {
        e.preventDefault();
         console.log(e.target.value);
        setTodoEntered(e.target.value);
    }
    function addTodo()
    {
        let newTodoArray=[...todos,todoEntered];
        setTodos(newTodoArray);
    }
    function deleteTodo(indexToDelete)
    {
        let newTodo=todos.filter(function(val,index){
            if(index===indexToDelete)
            {
                return false;
            }
            return true;
        })
        setTodos(newTodo);
    }
    function clearHobby()
    {
        setTodos([]);
    }
    return (
        <div className="outer">
            <h1>What's Your Hobby</h1>
            <input type="text" name="todoitem" defaultValue={todoEntered} onChange={changeTodoEntered}/>
            <button className="fir" onClick={addTodo}>Add Your Hobby</button>
            {
                todos.map(function(val,index)
            {
                return(
                <div key={index} className="whi">
                    {val} <button onClick={function(){
                        deleteTodo(index);
                    }}>Delete Hobby</button>
                </div>)
            })
            }
            <button className="sec" onClick={clearHobby}>Clear All Hobby</button>
        </div>
    );
}
export default Hobby;