import React from "react";
import useFetch from "../hooks/useFetch";
import { Toast1 } from "../components/Toast";
import NewForm from "../components/NewForm";

export default function NewContact() {
  const { setItem } = useFetch("http://localhost:4000/contacts");
  const initValues = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    gender: "other",
    status: "true",
  };

  return (
    <NewForm
      title="مخاطب جدید"
      initValues={initValues}
      submitFunc={(values, { setSubmitting, resetForm }) => {
        values.status = values.status === "true"

        setTimeout(() => {
          setItem(values);
          setSubmitting(false);
          Toast1.fire({
            title: "مخاطب جدید ذخیره شد",
            icon: "success",
          });
          resetForm(initValues);
        }, 3000);
      }}
    />
  );
}
