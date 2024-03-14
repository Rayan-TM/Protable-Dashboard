import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [datas, setDatas] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  function getItem(getUrl) {
    fetch(getUrl)
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => setError(err));
  }

  function setItem(newItem) {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }).then(res => getItem(url))
  }

  async function removeItem(url, id) {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    getItem(url)
  }

  async function editItem(url, id, newItem){
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    getItem(url)
  }

  useEffect(() => {getItem(url)}, []);

  return { datas, isPending, error, setItem, removeItem, editItem };
}
