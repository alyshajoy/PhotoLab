import React from "react";
import "../styles/TopicList.scss";
import "../styles/TopicListItem.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, setApiUrl }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
        <TopicListItem topic={topic} key={topic.id} setApiUrl={setApiUrl}/>
        )
      })}
    </div>
  );
};

export default TopicList;
