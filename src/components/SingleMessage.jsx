import React from 'react'
import Avatar from './Avatar'

export default function SingleMessage({avatarSrc, name, time, message}) {
    
  return (
    <div className='p-3 flex gap-3'>
        <Avatar avatarSize={30} src={avatarSrc}/>
        <div>
            <span className='font-medium text-sm mb-2 block'>{name}</span>
            <div className='text-xs text-gray-300 font-bold'>
                <span className='ml-2'>{time}</span>
                <span> {message}</span>
            </div>
        </div>
    </div>
  )
}
