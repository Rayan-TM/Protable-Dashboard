import React from "react";
import { LargeTable } from "../components";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

export default function Products() {
  const url = "http://localhost:4000/products";
  const { datas, error, isPending, removeItem } = useFetch(url);
  const theadTitles = ["شناسه", "محصول", "موجودی", "وضعیت", "قیمت"];

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
        pageTitle="محصولات"
        subject="products"
        onRemove={remove}
        thead={theadTitles}
        tbody={datas}
      />
      )}
    </div>
  );
}
