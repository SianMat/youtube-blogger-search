import React from "react";
import "./filterBar.css";
import Collapsible from "react-collapsible";
import subjects from "./subjects";
import FilterBarHeader from "./filterBarHeader";

function FilterBar(props) {
  function renderLessons(lessons) {
    return lessons.map((lesson) => (
      <li className="searchTerm" onClick={props.onClick}>
        {lesson}
      </li>
    ));
  }

  function renderTopics(topics) {
    let filterList = [];
    for (const topic in topics) {
      const topicHeading = <h3 className="topicHeading">{topic}</h3>;
      filterList.push(
        <Collapsible trigger={topicHeading} expandIcon=">" className="topic">
          {renderLessons(topics[topic])}
        </Collapsible>
      );
    }
    return filterList;
  }

  function renderSubjects(subjects) {
    let filterList = [];
    for (const subject in subjects) {
      const subjectHeading = <h2 key={subject} className="subjectHeading">{subject}</h2>;
      filterList.push(
        <div className="subject">
          <Collapsible trigger={subjectHeading}>
            {renderTopics(subjects[subject])}
          </Collapsible>
        </div>
      );
    }
    return filterList;
  }

  return (
    <div className="filterBar">
      <FilterBarHeader searchTerm={props.searchTerm} />
      {renderSubjects(subjects)}
    </div>
  );
}

export default FilterBar;
