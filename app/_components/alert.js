export const Alert = ({ niitTask, completedCount, clearCompleted }) => {
  return (
    <div className="flex justify-between w-full">
      <p className="text-[#6B7280] text-[14px]">
        {" "}
        {completedCount} of {niitTask} tasks completed
      </p>
      <button
        className={`text-[#EF4444] text-[14px] cursor-pointer ${clearCompleted}`}
        onClick={() => {
          if (confirm("ustgahdaa itgelte bnu bandia")) {
            clearCompleted();
          }
        }}
      >
        Clear completed
      </button>
    </div>
  );
};
