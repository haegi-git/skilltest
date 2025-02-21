import { useState } from "react"
import { useRecoilState } from "recoil";
import { todoListState } from "../../Atoms";

export default function TodoForm(){

    const [todoInput,setTodoInput] = useState('');

    const [alertText,setAlertText] = useState(false)

    const [todoList,setTodoList] = useRecoilState(todoListState)

    const handleInput = (e) =>{
        setTodoInput(e.target.value)
        
        if(alertText === true){
            setAlertText(false)
        }
    }

    const handleForm = (e) =>{
        e.preventDefault()
        if(!todoInput.trim()){
            setAlertText(true)
        }

        setTodoList((prev)=>[
            ...prev,
            {id: Date.now(),
                text:todoInput,
                complete:false
            }
        ])

        setTodoInput('')
    }

    return(
        <div className="absolute bottom-0 left-0 w-full p-3">
            <form onSubmit={handleForm}>
                {alertText ? <p className="text-red-500">할 일을 입력해주세요.</p> : null}
                <input
                value={todoInput}
                onChange={handleInput}
                className="border-2 border-blue-300 rounded-lg w-full p-2"
                placeholder="오늘의 할 일은?"/>
            </form>
        </div>
    )
}