export const Alert = ({ niitTask, completedCount }) => {
  return (
    <div className="flex justify-between w-full">
      <p className="text-[#6B7280] text-[14px]">
        {" "}
        {completedCount} of {niitTask} tasks completed
      </p>
      <button
        className={`text-[#EF4444] text-[14px] cursor-pointer` ${}}
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
};
