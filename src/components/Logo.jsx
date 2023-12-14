import React from "react";

function Logo({width = '100px'}){
      return(
      <div className="flex lg:flex-1">
            <div href="#" className="-m-1.5 p-1.5">
                  <div className="text-3xl font-semibold text-[#1e9fab] font-Poppins relative">
                        <p>Alpha</p>
                        <span className='absolute right-[-15px] text-[2em] text-[#444444] -top-2.5'>.</span>
                  </div>
            </div>
      </div>
      )
}

export default Logo