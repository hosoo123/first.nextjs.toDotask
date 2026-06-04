import Image from "next/image";
import { List } from "./_components/list";
import { Alert } from "./_components/alert";

export default function Home() {
  return (
    <div className="bg-white-900 drop-shadow-1g max-w-full flex justify-center pt-[60]">
      <div className=" w-[377] border drop-shadow-lg flex p-6 text-center rounded-xl flex-col bg-white gap-8">
        <div className="flex gap-5 flex-col">
          <h1 className="text-black text-xl font-bold font-sans">To-Do List</h1>
          <div className="flex gap-1.5">
            <input
              id="inputContain"
              className="text-black w-full border-gray-600 border rounded-lg p-1.5 text-sm"
              placeholder="Add a new task..."
            />
            <button className="flex w-[59] cursor-pointer text-sm h-10 text-white bg-blue-600 items-center justify-center rounded-xl">
              Add
            </button>
          </div>
          <div className="flex gap-1.5 h-8 text-xs">
            <button className="text-white cursor-pointer rounded-lg bg-blue-600 w-[38]">
              All
            </button>
            <button className="text-black w-[60] rounded-lg cursor-pointer bg-gray-300">
              Active
            </button>
            <button className="text-black w-[87] cursor-pointer bg-gray-300 rounded-lg">
              Completed
            </button>
          </div>
        </div>
        <div className="flex gap-[22px] flex-col">
          <List />
          <List />
          <hr />
          <Alert />
        </div>
        <div className="flex text-sm text-[#6B7280] justify-center">
          No tasks yet. Add one above!
        </div>
        <div className="text-[#6B7280] text-xs">
          Powered by{" "}
          <span className="text-blue-600 cursor-pointer">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
