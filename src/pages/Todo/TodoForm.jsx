import { useState } from "react"

export default function TodoForm(){

    const [todoInput,setTotoInput] = useState('');

    console.log(todoInput)

    return(
        <div className="absolute bottom-0 left-0 w-full p-3">
            <form>
                <input
                value={todoInput}
                onChange={(e)=>{setTotoInput(e.target.value)}}
                className="border-2 border-blue-300 rounded-lg w-full p-2"
                placeholder="오늘의 할 일은?"/>
            </form>
        </div>
    )
}