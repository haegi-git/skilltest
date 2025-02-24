import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../../Atoms";

export default function Search() {
   const [searchInput, setSearchInput] = useState("");
   const [todoList, setTodoList] = useRecoilState(todoListState);
   const userId = sessionStorage.getItem("userId");
   const handleSearch = (e) => {
      const { value } = e.target;
      setSearchInput(value);
   };

   useEffect(() => {
      axios
         .get(`http://localhost:3000/${userId}/${searchInput}`)
         .then((res) => {
            setTodoList(res.data);
         });
      if (!searchInput.trim()) {
         axios
            .get(`http://localhost:3000/todo/${userId}`)
            .then((res) => {
               setTodoList(res.data);
            })
            .catch((err) => {
               console.log(err);
            });
      }
   }, [searchInput]);
   return (
      <form className="text-center">
         <input
            value={searchInput}
            onChange={handleSearch}
            type="text"
            className="p-1 border-2 border-blue-500 rounded-lg"
         />
      </form>
   );
}
