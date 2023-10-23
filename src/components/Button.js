import React from 'react'

const Button = ({list}) => {  
  return (
    <div className="">
        {list.map((btnItem, index) => {
            return (
              <button className="px-2 py-1 m-2 bg-gray-300 rounded-lg hover:bg-gray-400" key={index}>
                {btnItem}
              </button>
            );
        })}
        {/* <button className="px-2 py-1 m-2 bg-gray-300 rounded-lg">All</button> */}
        
        
    </div>
  )
}

export default Button