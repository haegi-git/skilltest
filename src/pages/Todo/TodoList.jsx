import { useRecoilState } from "recoil";

import { todoListState } from "../../Atoms";
import TodoItem from "./TodoItem";
import Search from "./Search";
import { useEffect } from "react";
import axios from "axios";

export default function TodoList() {
   const [todoList, setTodoList] = useRecoilState(todoListState);
   const userId = sessionStorage.getItem("userId");
   const user = sessionStorage.getItem("user");
   console.log(userId, user);

   useEffect(() => {
      axios
         .get(`http://localhost:3000/todo/${userId}`)
         .then((res) => {
            console.log(res);
            setTodoList(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   if (!todoList) {
      <>
         <Search todoList={todoList} />

         <h1>데이터없음</h1>
      </>;
   }

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
