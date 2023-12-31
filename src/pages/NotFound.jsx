import React from 'react'

export default function NotFound() {
  return (
    <div className='flex mt-36 justify-center items-center'>
      <div className='flex flex-col gap-5 text-center'>
        <h1 className='font-bold text-9xl'>404</h1>
        <h2 className='font-medium text-2xl'>صفحه پیدا نشد</h2>
        <p>منبع درخواست شده در این سرور یافت نشد!</p>
      </div>
    </div>
  )
}
