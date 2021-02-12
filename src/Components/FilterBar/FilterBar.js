import React from "react";
import "./FilterBar.css";
import Collapsible from "react-collapsible";

const subjects = {
  Maths: {
    Number: ["Fractions", "Decimals", "Percentages"],
    Graphs: ["Linear Graphs"],
    Calculus: ["Differentiation", "Integration"],
  },
  Science: {},
};

function FilterBar(props) {

  function renderLessons(lessons) {
    return lessons.map((lesson) => <li className="searchTerm" onClick={props.onClick}>{lesson}</li>);
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
      const subjectHeading = <h2 className="subjectHeading">{subject}</h2>;
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
      <h1>Filter by topic</h1>
      {renderSubjects(subjects)}
    </div>
  );
}

export default FilterBar;
