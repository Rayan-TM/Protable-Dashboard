import React from "react";
import ProfilePost from "./ProfilePost";
import useFetch from "../hooks/useFetch";

export default function ProfilePosts() {

  const {datas, isPending, error} = useFetch('http://localhost:4000/posts?_embed=comments')

  return (
    <div className="flex flex-col gap-8 mt-8">
      {datas.map((post) => (
      <ProfilePost key={post.id} data={post} />
      ))}
    </div>
  );
}
