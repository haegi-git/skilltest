import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../Atoms";
import axios from "axios";

export default function TodoForm() {
   const [todoInput, setTodoInput] = useState("");

   const [alertText, setAlertText] = useState(false);

   const [todoList, setTodoList] = useRecoilState(todoListState);

   const handleInput = (e) => {
      setTodoInput(e.target.value);

      if (alertText === true) {
         setAlertText(false);
      }
   };

   const handleForm = async (e) => {
      e.preventDefault();
      if (!todoInput.trim()) {
         setAlertText(true);
      }
      axios.post("http://localhost:3000/todo", {
         todo: todoInput,
         complete: false,
         priority: 0,
      });
      setTodoInput("");
   };

   return (
      <div className="absolute bottom-0 left-0 w-full p-3">
         <form onSubmit={handleForm}>
            {alertText ? (
               <p className="text-red-500">할 일을 입력해주세요.</p>
            ) : null}
            <input
               value={todoInput}
               onChange={handleInput}
               className="border-2 border-blue-300 rounded-lg w-full p-2"
               placeholder="오늘의 할 일은?"
            />
         </form>
      </div>
   );
}
