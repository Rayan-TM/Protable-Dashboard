import React from "react";
import useFetch from "../hooks/useFetch";
import { Toast1 } from "../components/Toast";
import NewForm from "../components/NewForm";
import { useParams, useNavigate } from "react-router-dom";

export default function EditContact() {
  const baseUrl = "http://localhost:4000/contacts";
  const params = useParams();
  const navigate = useNavigate();
  const { datas, isPending, editItem } = useFetch(
    `${baseUrl}/${params.contactID}`
  );

  return isPending ? (
    <span>Loading...</span>
  ) : (
    <NewForm
      title="ویرایش مخاطب"
      initValues={datas}
      submitFunc={(values, { setSubmitting }) => {
        values.status = values.status === "true"
        setTimeout(() => {
          editItem(baseUrl, params.contactID, values)
          setSubmitting(false);
          Toast1.fire({
            title: "مخاطب با موفقیت ویرایش شد",
            icon: "success",
          });
          navigate("/contacts");
        }, 3000);
      }}
    />
  );
}
