export const List = ({ todo, hamaagui }) => {
  return (
    <div className="w-full flex justify-between  bg-[#F3F4F6] p-4 rounded-lg">
      <div className="text-black flex gap-2.5 items-center ">
        <input
          className="cursor-pointer w-5 h-5"
          type="checkbox"
          checked={todo.checked}
          onChange={() => hamaagui(todo.id)}
        />
        {todo.text}
      </div>
      <button
        // onClick={deleteBtn}
        className="text-[#ef4444] cursor-pointer rounded-lg bg-[#fef2f2] w-[67] h-[30]"
      >
        Delete
      </button>
    </div>
  );
};
