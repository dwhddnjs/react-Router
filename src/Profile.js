import React from "react";

const profileData = {
  dwhddnjs: {
    name: "이종원",
    description: "Frontend Engineer",
  },

  homer: {
    name: "호머 심슨",
    description: "심슨에 나오는 아빠 역할",
  },
  per1215: {
    name: "jongwon lee",
    description: "영어 이름 소개",
  },
};

export default function Profile({ match }) {
  console.log(match);
  const { username } = match.params;
  const profile = profileData[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다</div>;
  }

  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}
