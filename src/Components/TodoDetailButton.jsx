export default function TodoDetailButton({ text, event }) {
   return (
      <button
         onClick={event}
         className="p-3 ml-3 mr-3 bg-amber-400 rounded-lg cursor-pointer"
      >
         {text}
      </button>
   );
}
