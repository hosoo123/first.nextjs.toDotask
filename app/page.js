"use client";
import { List } from "./_components/list";
import { Alert } from "./_components/alert";
import { useState } from "react";
import { adapter } from "next/dist/server/web/adapter";

export default function Home() {
  const [index, setIndex] = useState(0);

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

  const [inputString, setinputString] = useState("");

  const [inputArray, setinputArray] = useState([]);

  console.log("arrrrr", inputArray);

  const handleAdd = () => {
    if (!inputString.trim()) {
      return;
    }
    setIndex(index + 1);
    setinputArray([
      ...inputArray,
      {
        id: index,
        text: inputString,
        checked: false,
      },
    ]);

    setinputString("");
  };
  const toggleTask = (id) => {
    setinputArray(
      inputArray.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task,
      ),
    );
  };

  const toggleTask2 = () => {
    setinputArray(inputArray.map(() => {}));
  };

  const filteredTask = inputArray.filter((inputArr) => {
    if (select === "All") {
      return inputArr;
    } else if (select === "Active") {
      return !inputArr.checked;
    } else if (select === "Completed") {
      return inputArr.checked;
    }
  });

  return (
    <div className="bg-white-900 drop-shadow-1g max-w-full flex justify-center pt-[60]">
      <div className=" w-[377] border drop-shadow-lg flex p-6 text-center rounded-xl flex-col bg-white gap-8">
        <div className="flex gap-5 flex-col">
          <p className="text-black text-xl font-bold font-sans">To-Do List</p>
          <div className="flex gap-1.5">
            <input
              value={inputString}
              onChange={(event) => setinputString(event.target.value)}
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
        {inputArray.length > 0 ? (
          <div className="flex gap-[22px] flex-col text-left">
            {filteredTask.map((item, index) => {
              return <List todo={item} hamaagui={toggleTask} key={item.id} />;
            })}
          </div>
        ) : (
          <div className="flex text-sm text-[#6B7280] justify-center py-4">
            No tasks yet. Add one above!
          </div>
        )}
        <hr className="border-gray-100" />
        <Alert niitTask={index} />
        <div className="text-[#6B7280] text-xs">
          Powered by{" "}
          <span className="text-blue-600 cursor-pointer">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
}
