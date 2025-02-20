import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="w-[700px] h-200 bg-red-200 m-auto">
            <header>
                <h1>오늘의 할 일</h1>
            </header>
            <Outlet/>
        </div>
    )
}