export const Alert = ({ niitTask }) => {
  return (
    <div className="flex justify-between w-full">
      <p className="text-[#6B7280] text-[14px]">
        {" "}
        0 of {niitTask} tasks completed
      </p>
      <button className="text-[#EF4444] text-[14px] cursor-pointer">
        Clear completed
      </button>
    </div>
  );
};
