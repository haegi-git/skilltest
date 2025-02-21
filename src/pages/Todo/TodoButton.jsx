export default function TodoButton({clickEvent,text}){
    return (
        <span
        onClick={clickEvent}
        className="p-2 mr-2 border-1
        border-blue-300 rounded-lg bg-blue-300 cursor-pointer">
            {text}
            </span>
    )
}