import React from "react";

import "../styles/TopicList.scss";
import "../styles/TopicListItem.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const sampleDataForTopicList = props.topics;

  return (
    <div className="top-nav-bar__topic-list">
      {sampleDataForTopicList.map((topic) => {
        return (
        <TopicListItem topic={topic} key={topic.id} />
        )
      })}
    </div>
  );
};

export default TopicList;
