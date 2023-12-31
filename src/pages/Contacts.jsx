import React from "react";
import { LargeTable } from "../components";
import useFetch from "../hooks/useFetch";

export default function Contacts() {
  const url = "http://localhost:4000/contacts";
  const { datas, removeItem } = useFetch(url);
  const theadTitles = ["شناسه", "مخاطب", "ایمیل", "تلفن", "وضعیت", "آدرس"];

  const removeContact = (id) => {
    removeItem(url, id);
  };

  return (
    datas.length !== 0 && (
      <LargeTable
        pageTitle="مخاطبین"
        subject="contacts"
        onRemove={removeContact}
        thead={theadTitles}
        tbody={datas}
      />
    )
  );
}
