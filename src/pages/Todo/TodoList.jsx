import { useRecoilValue } from "recoil"

import {todoListState} from '../../Atoms'
import TodoItem from "./TodoItem";

export default function TodoList(){
    const todoList = useRecoilValue(todoListState);
    console.log(todoList)
    return(
        <ul className="ml-5 mr-5">
            {todoList.map((item)=>{
                return(
                    <TodoItem item={item} key={item.id}/>
                )
            })}
        </ul>
    )
}