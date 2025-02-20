import { useRecoilValue } from "recoil"

import {todoListState} from '../../Atoms'

export default function TodoList(){
    const todoList = useRecoilValue(todoListState);
    console.log(todoList)
    return(
        <ul className="ml-5">
            
        </ul>
    )
}