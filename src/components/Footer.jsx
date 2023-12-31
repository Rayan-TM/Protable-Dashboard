import React, {useContext} from 'react'
import { globalContext } from "../Contexts/globalContext";


export default function Footer() {
  const {toggleFixedFooter} = useContext(globalContext)

  return (
    <div className={`${toggleFixedFooter ? "sticky bottom-0 " : ""} text-xs flex justify-between py-5 px-5 bg-gray-200 font-medium`}>
     <span>طرح گرفته شده از وبسایت راست چین</span>
     <div>
        <ul className='flex gap-3'>
            <li><a href="#">مجوزها</a></li>
            <li><a href="#">تغییرات</a></li>
            <li><a href="#">راهنما</a></li>
        </ul>
     </div>
    </div>
  )
}
