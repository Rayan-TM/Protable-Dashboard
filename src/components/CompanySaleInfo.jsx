import React from 'react'

export default function CompanySaleInfo({title, amount, color}) {
  return (
    <div className='last:border-l-0 border-l-[1px] galaxy:border-none border-gray-300 w-1/3'>
        <div className='flex gap-2 items-center text-sm mb-5 ipad:relative' >
            <div className={`w-3 h-3 rounded-full ${color} ipad:w-full ipad:h-1 ipad:absolute ipad:-bottom-2 ipad:left-1`}></div>
            <span>{title}</span>
        </div>
        <span className='font-medium'>{amount}</span>
    </div>
  )
}
