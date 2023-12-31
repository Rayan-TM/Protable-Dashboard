import React, {useContext} from "react";
import Post from "./Post";
import { globalContext } from "../Contexts/globalContext";

export default function ProfilePost({ data }) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className={`${toggleShadow ? "shadow-active" : ""} box-container`}>
      <Post {...data} />
      {data.comments &&
        data.comments.map((comment) => <Post key={comment.id} isComment {...comment} />)}
    </div>
  );
}
