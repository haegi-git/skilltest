import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div className="relative w-[700px] h-200 bg-red-200 m-auto">
            <header className="text-center w-full">
                <h1 className="text-2xl font-bold pt-5 mb-5">오늘의 할 일</h1>
            </header>
            <Outlet/>
        </div>
    )
}