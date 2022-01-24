import React, { FC, useState } from 'react'

interface IProps {}

/**
* @author
* @function @Dropdown
**/

export const Dropdown:FC<IProps> = (options, onOptionSelect ) => {
    const [isActive, setActive] = useState(false);
    return (
      <>
      <button onClick={() => setActive(!isActive)}>
        Options
      </button>
      <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${isActive === true ? 'block' : 'hidden'}`}>
        {options instanceof Array && options.map((option: any) => <div key={option} onClick={(e) => onOptionSelect(option)}>{option}</div>)}
      </div>
      </>
    )
  }
