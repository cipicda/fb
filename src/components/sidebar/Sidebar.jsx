import {
  Bookmark,
  CalendarToday,
  Chat,
  Group,
  HelpOutline,
  PlayCircle,
  School,
  WorkOutline,
} from "@mui/icons-material";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import React from "react";
import { Users } from "../../DummyData";
import CloseFrinds from "./CloseFrinds";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Feed</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Chat</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <PlayCircle className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Video</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Group</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Bookmarks</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Questions</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Jobs</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <CalendarToday className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Events</button>
              </span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">
                <button>Courses</button>
              </span>
            </li>
          </ul>

          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />

          <ul className="sidebarFriendList">
            {Users.map((u) => {
              return <CloseFrinds key={u.id} users={u} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
