import { useRecoilState } from "recoil"
import { todoListState } from "../../Atoms"
import TodoButton from "./TodoButton"
import { useState } from "react"
import TodoUpdatePopup from "./TodoUpdatePopup"

export default function TodoItem({item}){

    const [todoList,setTodoList] = useRecoilState(todoListState)
    const [updateText,setUpdateText] = useState(item.text);

    const [update,setUpdate] = useState(false)

    const handleDelete = () =>{
        setTodoList(todoList.filter((todo)=> todo.id !== item.id))
    }

    const togglePopup = () =>{
        setUpdate(!update)
    }

    const toggleComplete = () =>{
        setTodoList(
            todoList
            .map((todo)=> todo.id === item.id ? {...todo,complete:!todo.complete} : todo)
        )
    }

    const handleUpdate = (e) =>{
        e.preventDefault();
        setTodoList(
            todoList
            .map((todo)=> todo.id === item.id ? {...todo,text:updateText} : todo))
            setUpdate(false)
    }

    if(!item){
        return(
            <h1>할 일 없음</h1>
        )
    }

    return(
        <li className="relative p-3 border-b-1 border-b-blue-300">
            {item.text}

                <div className="absolute right-0 top-0 translate-y-1/2">

                    <TodoButton clickEvent={handleDelete} text={"삭제"}/>

                    <TodoButton clickEvent={togglePopup} text={"수정"}/>

                    <TodoButton clickEvent={toggleComplete} text={item.complete ? "완료" : "미완료"} />

                </div>
                {update ? <TodoUpdatePopup
                     setUpdateText={setUpdateText}
                      handleUpdate={handleUpdate}
                      updateText={updateText}/> : null}
        </li>
    )
}