import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ setApiUrl, topic }) => {
  return (
    <div className="topic-list__item">
      <span onClick={() => setApiUrl(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
