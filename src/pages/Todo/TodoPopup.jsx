import { useRecoilState } from "recoil";
import { todoInput } from "../../Atoms";
import { useEffect } from "react";
import TodoDetailButton from "../../Components/TodoDetailButton";

export default function TodoPopup({
   todoId,
   updateText,
   buttonEvent,
   close,
   deleteEvent,
   updatePriority,
}) {
   const [input, setInput] = useRecoilState(todoInput);

   useEffect(() => {
      if (updateText) {
         setInput({ todo: updateText || "", priority: updatePriority });
      }
   }, [updateText]);
   const handleInpit = (e) => {
      const { name, value } = e.target;

      setInput((prev) => ({
         ...prev,
         [name]: value,
      }));
   };
   return (
      <div className="w-full h-full absolute top-0 left-0">
         <form
            onSubmit={(e) => e.preventDefault()}
            className="absolute w-[500px]
        bg-amber-900 right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 z-10
        text-center flex flex-col rounded-lg p-3"
         >
            <label>
               {updateText ? "할 일 수정하기 :" : "할 일 추가하기 :"}
               <input
                  name="todo"
                  className="border-b-1 border-amber-50 mt-2 mb-2"
                  value={input.todo || ""}
                  onChange={handleInpit}
               />

               <div>
                  <h2>우선 순위</h2>
                  <select
                     value={input.priority}
                     onChange={handleInpit}
                     name="priority"
                     className="border-1 rounded-lg mt-3 mb-3"
                  >
                     <option>먼저 해야해</option>
                     <option>조금 천천히</option>
                     <option>별로 안급해</option>
                     <option>안해도 될거</option>
                  </select>
               </div>

               <div className=" m-auto bottom-0  text-center">
                  <TodoDetailButton
                     className="p-3 bg-amber-400 rounded-lg cursor-pointer"
                     event={buttonEvent}
                     text={todoId ? "수정하기" : "추가하기"}
                  ></TodoDetailButton>
                  {close ? (
                     <TodoDetailButton text={"닫기"} event={close}>
                        닫기
                     </TodoDetailButton>
                  ) : null}
                  {todoId ? (
                     <TodoDetailButton text={"삭제"} event={deleteEvent}>
                        삭제
                     </TodoDetailButton>
                  ) : null}
               </div>
            </label>
         </form>
      </div>
   );
}
