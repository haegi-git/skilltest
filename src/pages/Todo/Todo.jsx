import { useRecoilState } from "recoil";

import TodoList from "./TodoList";
import axios from "axios";
import { useState } from "react";

import TodoPopup from "./TodoPopup";
import { todoInput, todoListState } from "../../Atoms";

export default function Todo() {
   const [input, setInput] = useRecoilState(todoInput);
   const [todoList, setTodoList] = useRecoilState(todoListState);

   const [toggle, setToggle] = useState(false);

   const togglePopup = () => {
      setToggle(!toggle);
   };

   const createTodo = () => {
      const { todo, priority } = input;
      if (!todo.trim()) {
         alert("공백입니다.");
      } else {
         axios
            .post("http://localhost:3000/todo", {
               todo: todo,
               complete: false,
               priority: priority,
               userId: sessionStorage.getItem("userId"),
            })
            .then((res) => {
               setTodoList([...todoList, res.data]);
            })
            .catch((err) => {
               console.log(err);
            });
         setInput({ todo: "", priority: "별로 안급해" });
         setToggle(false);
      }
   };

   return (
      <>
         <TodoList />

         <button
            className="absolute bottom-0
             left-1/2 -translate-1/2 w-[100px] h-[100px]
              rounded-full bg-amber-50"
            onClick={togglePopup}
         >
            +
         </button>
         {toggle ? (
            <TodoPopup buttonEvent={createTodo} close={togglePopup} />
         ) : null}
      </>
   );
}
