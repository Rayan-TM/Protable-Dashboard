import React, {useContext} from 'react'
import ButtonEdit from './ButtonEdit'
import { Edit } from './icons'
import useFetch from '../hooks/useFetch'
import { globalContext } from "../Contexts/globalContext";

export default function ProfileInfo() {
    const {toggleShadow} = useContext(globalContext)

    const {datas, isPending, error} = useFetch('http://localhost:4000/users/7')

    const profileInfoData = [
        ["نام", datas.firstname],
        ["نام خانوادگی", datas.lastname],
        ["سن", datas.age],
        ["شغل", datas.role],
        ["شهر", datas.city],
        ["آدرس", datas.address],
        ["تلفن", datas.phone],
        ["ایمیل", datas.email],
    ]

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container mt-8 text-sm`}>
        <div className='flex justify-between items-center mb-8'>
            <span>اطلاعات</span>
            <ButtonEdit classes='font-bold' title='ویرایش' icon={<Edit size={14} />}/>
        </div>
        <div className='flex flex-col gap-4'>
            {profileInfoData.map(data => (
                <div key={data[0]} className='flex font-medium'>
                    <span className='w-1/2 text-gray-300'>{data[0]}:</span>
                    <span className='w-1/2'>{data[1]}</span>
                </div>
            ))}
        </div>
    </div>
  )
}
