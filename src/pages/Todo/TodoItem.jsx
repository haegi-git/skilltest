import { useRecoilState } from "recoil";
import { todoInput, todoListState } from "../../Atoms";
import TodoButton from "../../Components/TodoButton";
import { useState } from "react";

import axios from "axios";
import TodoPopup from "./TodoPopup";

export default function TodoItem({ item }) {
   const [todoList, setTodoList] = useRecoilState(todoListState);
   const [input, setInput] = useRecoilState(todoInput);

   const [update, setUpdate] = useState(false);

   const { id, todo, priority, complete } = item;

   console.log(todoList);

   const handleDelete = async () => {
      axios
         .delete(`http://localhost:3000/todo/${id}`)
         .then((res) => {
            console.log(res);
            setTodoList(todoList.filter((todo) => todo.id !== id));
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const togglePopup = () => {
      setUpdate(!update);
   };

   const toggleComplete = async () => {
      axios
         .put(`http://localhost:3000/todo/${id}`, {
            complete: !complete,
         })
         .then((res) => {
            setTodoList(
               todoList.map((todo) =>
                  todo.id === id ? { ...todo, complete: !todo.complete } : todo
               )
            );
            console.log(res);
         });
   };

   const handleUpdate = async () => {
      const { todo, priority } = input;
      console.log(todo, priority);
      axios
         .put(`http://localhost:3000/todo/${id}`, {
            todo: todo,
            priority: priority,
         })
         .then((res) => {
            console.log(res, "성공");
            setTodoList(
               todoList.map((todoItem) =>
                  todoItem.id === id ? { ...todoItem, todo } : todoItem
               )
            );
            setInput({ todo: "", priority: "별로 안급해" });
            setUpdate(false);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   if (!item) {
      return <h1>할 일 없음</h1>;
   }

   return (
      <>
         <li className="relative p-3 border-b-1 border-b-blue-300">
            <span>{todo}</span>
            <span>: {priority}</span>

            <div className="absolute right-0 top-0 translate-y-1/2">
               <TodoButton clickEvent={togglePopup} text={"수정"} />

               <TodoButton
                  clickEvent={toggleComplete}
                  text={complete ? "완료" : "미완료"}
               />
            </div>
         </li>
         {update ? (
            <TodoPopup
               todoId={id}
               buttonEvent={handleUpdate}
               updateText={todo}
               deleteEvent={handleDelete}
               updatePriority={priority}
               close={togglePopup}
            />
         ) : null}
      </>
   );
}
