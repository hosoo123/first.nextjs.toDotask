"use client";
import Image from "next/image";
import { List } from "./_components/list";
import { Alert } from "./_components/alert";
import { useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);

  const Btn = () => {
    setIndex(index + 1);
  };
  const [select, setSelected] = useState("All");
  const firstHandle = () => {
    setSelected("All");
  };
  const secondHandle = () => {
    setSelected("Active");
  };
  const thirdHandle = () => {
    setSelected("Completed");
  };
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    setTodos([...todos, value]);
    setValue("");
  };

  return (
    <div className="bg-white-900 drop-shadow-1g max-w-full flex justify-center pt-[60]">
      <div className=" w-[377] border drop-shadow-lg flex p-6 text-center rounded-xl flex-col bg-white gap-8">
        <div className="flex gap-5 flex-col">
          <p className="text-black text-xl font-bold font-sans" onClick={Btn}>
            To-Do List
          </p>
          Task - {index}
          <div className="flex gap-1.5">
            <input
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
              id="inputContain"
              className="text-black w-full border-gray-600 border rounded-lg p-1.5 text-sm"
              placeholder="Add a new task..."
            />
            <button
              onClick={handleAdd}
              className="flex w-[59] cursor-pointer text-sm h-10 text-white bg-blue-600 items-center justify-center rounded-xl"
            >
              Add
            </button>
          </div>
          <div className="flex gap-1.5 h-8 text-xs">
            <button
              className={`cursor-pointer rounded-lg px-3 transition-colors ${
                select === "All"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-black "
              }`}
              onClick={firstHandle}
            >
              All
            </button>
            <button
              className={`cursor-pointer rounded-lg "${
                select == "Active"
                  ? "text-black bg-blue-600 w-[60px]"
                  : " bg-gray-300 text-black w-[60px]"
              } `}
              onClick={secondHandle}
            >
              Active
            </button>
            <button
              className={`cursor-pointer rounded-lg "${
                select == "Completed"
                  ? "text-black bg-blue-600 w-[87px]"
                  : " bg-gray-300 text-black w-[87px]"
              } `}
              onClick={thirdHandle}
            >
              Completed
            </button>
          </div>
        </div>
        <div className="flex gap-[22px] flex-col">
          {todos.map((item) => (
            <List todo={item} />
          ))}
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
