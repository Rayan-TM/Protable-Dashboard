import React from "react";
import { LargeTable } from "../components";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Contacts() {
  const url = "http://localhost:4000/contacts";
  const { datas, isPending, error, removeItem } = useFetch(url);
  const theadTitles = ["شناسه", "مخاطب", "ایمیل", "تلفن", "وضعیت", "آدرس"];

  const remove = (id) => {
    removeItem(url, id);
  };

  return (
    <div className="min-h-screen flex items-center">
      {error && error}
      {isPending ? (
        <Loader />
      ) : (
        <LargeTable
          pageTitle="مخاطبین"
          subject="contacts"
          onRemove={remove}
          thead={theadTitles}
          tbody={datas}
        />
      )}
    </div>
  );
}
