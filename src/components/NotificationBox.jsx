import React from 'react'
import SingleMessage from './SingleMessage'

export default function NotificationBox({toggleDisplay}) {

  const notificationData = [
    {id: 1, avatarSrc: "./assets/images/man_avatar1.jpg", name: "تونی استارک", time: "02:30 ب.ظ", message: "در سایت ثبت نام کرد"},
    {id: 2, avatarSrc: "./assets/images/man_avatar3.jpg", name: "بیل گیتس", time: "08:36 ب.ظ", message: "سرور را به روزرسانی کرد"},
    {id: 3, avatarSrc: "./assets/images/man_avatar2.jpg", name: "استیو جابز", time: "11:06 ب.ظ", message: "سفارش جدید ثبت کرد"},
    {id: 4, avatarSrc: "./assets/images/women_avatar1.jpg", name: "سارا رابرتز", time: "دیروز", message: "برنامه ها را به روز کرد"},
    {id: 5, avatarSrc: "./assets/images/women_avatar3.jpg", name: "امیلی رابرتز", time: "دیروز", message: "در سایت ثبت نام کرد"},
  ]
  return (
    <div className={`${toggleDisplay ? "block" : "hidden"} top-bar-boxes`}>
      <div className="relative before:absolute before:bg-white/80 before:content-[''] before:block before:inset-0 bg-mountain h-[80px] bg-cover bg-center">
        <div className=" flex flex-col h-full justify-center gap-2 text-center">
          <span className="font-medium z-10">اعلان ها</span>
        </div>
      </div>
      <div className="h-[300px] custom-scrollbar overflow-y-scroll">
        {notificationData.map(data => (
          <SingleMessage key={data.id} {...data}/>
        ))}
      </div>
    </div>
  )
}
