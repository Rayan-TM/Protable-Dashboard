import React from 'react'

export default function CompanySaleInfo({title, amount, color}) {
  return (
    <div className='last:border-l-0 border-l-[1px] border-gray-300 w-1/3'>
        <div className='flex gap-2 items-center text-sm mb-5' >
            <div className={`w-3 h-3 rounded-full ${color}`}></div>
            <span>{title}</span>
        </div>
        <span className='font-medium'>{amount}</span>
    </div>
  )
}
