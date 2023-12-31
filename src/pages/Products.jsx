import React from "react";
import { LargeTable } from "../components";
import useFetch from "../hooks/useFetch";

export default function Products() {
  const url = "http://localhost:4000/products";
  const { datas, removeItem } = useFetch(url);
  const theadTitles = ["شناسه", "محصول", "موجودی", "وضعیت", "قیمت"];

  const removeContact = (id) => {
    removeItem(url, id);
  };

  return (
    datas.length !== 0 && (
      <LargeTable
        pageTitle="محصولات"
        subject="products"
        onRemove={removeContact}
        thead={theadTitles}
        tbody={datas}
      />
    )
  );
}
