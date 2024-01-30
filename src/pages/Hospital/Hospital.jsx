import React from 'react'
import { Link } from 'react-router-dom'

function Hospital() {
  return (
   <div>
     <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
          <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
            <span className=" text-white">
             <Link to="/home">
              Home
             </Link>
            </span>
            <h4 className="text-gray-400">~Hospital</h4>
          </div>
        </div>
   </div>
  )
}

export default Hospital