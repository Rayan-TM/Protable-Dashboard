import React from "react";
import SmallButton from "./SmallButton";
import Avatar from "./Avatar";

export default function TodoParticipants({ participants }) {
  return (
    <div className="flex flex-row-reverse">
      {participants.map((participant, index) => (
        <SmallButton
          key={index}
          styles={{
            marginRight: `${index === participants.length - 1 ? "0" : "-13px"}`,
          }}
          isInTodoList
          title={participant.username}
        >
          <div className="border-2 border-white rounded-full hover:z-10 inline-block">
            <Avatar src={participant.image} avatarSize={30} />
          </div>
        </SmallButton>
      ))}
    </div>
  );
}
