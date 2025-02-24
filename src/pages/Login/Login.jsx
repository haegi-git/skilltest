import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
   const navigate = useNavigate();

   const [userData, setUserData] = useState({
      user: "",
      tag: "",
   });
   const handleLogin = async (e) => {
      e.preventDefault();

      axios
         .post("http://localhost:3000/user", {
            user: userData.user,
            tag: userData.tag,
         })
         .then((res) => {
            console.log(res);
            console.log("성공?");
            const { user, id } = res.data.user;
            sessionStorage.setItem("user", user);
            sessionStorage.setItem("userId", id);
            navigate("/todo");
         })
         .catch((err) => {
            if (err.status === 409) {
               console.log(err.response.data.message);
               const { id, user } = err.response.data.message;
               sessionStorage.setItem("user", user);
               sessionStorage.setItem("userId", id);
               navigate("/todo");
            }
         });
   };

   const handleInput = (e) => {
      const { name, value } = e.target;
      setUserData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };
   return (
      <div className="m-auto text-center">
         <form onSubmit={handleLogin}>
            <input
               name="user"
               value={userData.user}
               onChange={handleInput}
               className="border-b-2 border-gray-500 p-3 b-bo"
               placeholder="닉네임을 입력해주세요."
            />
            <input
               name="tag"
               value={userData.tag}
               onChange={handleInput}
               placeholder="4자리의 tag를 입력해주세요."
               className="border-b-2 border-gray-500 pt-3 pb-3 ml-3"
            />
            <button type="submit">접속</button>
         </form>
      </div>
   );
}
