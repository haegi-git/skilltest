import { useRecoilState } from "recoil";

import { todoListState } from "../../Atoms";
import TodoItem from "./TodoItem";
import Search from "./Search";
import { useEffect } from "react";
import axios from "axios";

export default function TodoList() {
   const [todoList, setTodoList] = useRecoilState(todoListState);

   useEffect(() => {
      axios.get("http://localhost:3000/todo").then((res) => {
         console.log(res);
         setTodoList(res.data);
      });
   }, []);
   return (
      <>
         <Search todoList={todoList} />

         <ul className="ml-5 mr-5">
            {todoList.map((item) => {
               return <TodoItem item={item} key={item.id} />;
            })}
         </ul>
      </>
   );
}
