import React, {useContext} from 'react'
import PerformanceScore from './PerformanceScore'
import { globalContext } from "../Contexts/globalContext";

export default function CustomerSatisfaction() {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container w-1/2 flex flex-col gap-5 text-sm laptop:w-full`}>
        <span className='mb-5'>رضایت مشتری</span>
        <div className='font-medium'><span className='text-2xl'>9.8</span> <span className='text-xs text-green-500'>2.1%</span></div>
        <span className='font-medium text-gray-300'>امتیاز عملکرد</span>
        <PerformanceScore />
    </div>
  )
}
