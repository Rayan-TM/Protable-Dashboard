import React, {useContext} from 'react'
import SingleContact from './SingleContact'
import useFetch from '../hooks/useFetch'
import { globalContext } from "../Contexts/globalContext";

export default function ProfileContacts() {
  const {toggleShadow} = useContext(globalContext)

  const {datas, isPending, error} = useFetch('http://localhost:4000/users')
  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container mt-8 text-sm`}>
        <span>ارتباطات</span>
        <div className='flex flex-wrap gap-8 my-8'>
            {datas.map(contact => <SingleContact key={contact.id} {...contact} />)}
        </div>
    </div>
  )
}
