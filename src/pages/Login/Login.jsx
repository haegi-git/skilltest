import { Link } from "react-router-dom";

export default function Login() {
   return (
      <div className="m-auto text-center">
         <input
            className="border-b-2 border-gray-500 p-3 b-bo"
            placeholder="닉네임을 입력해주세요."
         />
         <Link to={"/todo"}>접속</Link>
      </div>
   );
}
