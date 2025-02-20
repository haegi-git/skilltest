import { useRecoilValue } from "recoil"

import {todoListState} from '../../Atoms'

export default function TodoList(){
    const todoList = useRecoilValue(todoListState);
    console.log(todoList)
    return(
        <ul className="ml-5 mr-5">
            {todoList.map((item,idx)=>{
                return(
                    <li 
                     className="p-3 border-b-1 border-b-blue-300"
                     key={idx}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}