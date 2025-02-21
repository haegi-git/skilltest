export default function TodoUpdatePopup({updateText,handleUpdate,setUpdateText}){

    return(
            <form className="absolute w-[200px] h-[100px] bg-amber-900 right-1/2 translate-x-1/2 top-15 z-10">

                <label>
                    할 일 수정하기
                    <input value={updateText} onChange={(e)=> setUpdateText(e.target.value)}/>
                    <button onClick={handleUpdate}>ㅇㅋ</button>
                </label>
                

            </form>
    )
}