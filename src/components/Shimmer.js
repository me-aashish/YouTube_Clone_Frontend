import React from 'react'

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(50)
        .fill("")
        .map((ele, index) => (
          <div className="p-2 m-3 h-36 w-56 rounded-lg bg-zinc-300" key={index}></div>
        ))}
    </div>
  );
}

export default Shimmer