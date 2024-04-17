import React from "react";
import "./rightbar.css";
import { Users } from "../../DummyData";
import Online from "./Online";
const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbarContainer">
          <img className="bithdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Dorel</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="friendlist">
          {Users.map((u) => (
            <Online key={u.id} users={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return <></>;
  };

  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">{profile ? <ProfileRightBar /> : <HomeRightbar />}</div>
      </div>
    </>
  );
};

export default Rightbar;
