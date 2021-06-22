import React from "react";
import styled from "styled-components";
import SkillsPanel from "./skillsPanel";
import HorizontalListPanel from "./horizontalListPanel";

export const AboutSection = ({ headline, experiences, passions, skills, tools, schools }) => {
  return (
    <div>
      <div className="clearfix">
        <BlueWrapper>
          <div className="container">
            <div className="row">
              <WhiteTitle className="col-md-5 col-lg-3">About</WhiteTitle>
              <h5 className="col-md-5 col-lg-8">{headline}</h5>
            </div>
            <SkillsPanel skills={skills} />
          </div>
        </BlueWrapper>
      </div>
      <div className="container">
        <HorizontalListPanel items={tools} title="Tools" />
        <HorizontalListPanel items={passions} title="Passions" />
        <RowWrapper
          style={{
            backgroundColor: "#F7FAFF",
            borderTopLeftRadius: "200px",
            paddingTop: "5rem",
            paddingBottom: "4rem",
            marginTop: "3rem",
          }}
        >
          <div className="row">
            <div className="col-lg-2">
              <OutlineTitle>Education</OutlineTitle>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <EducationList schools={schools} />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-2">
              <OutlineTitle>Experience</OutlineTitle>
            </div>
            <div className="col-lg-8 offset-lg-2">
              <ExperiencesList experiences={experiences} />
            </div>
          </div>
        </RowWrapper>
      </div>
    </div>
  );
};

const ExperiencesList = ({ experiences }) => (
  <div className="row">
    {experiences.map((e) => (
      <div className="col-lg-6 my-2">
        <Experience className="px-3 py-3 h-100">
          <DateLine>{e.years}</DateLine>
          <ItemName>{e.title}</ItemName>
        </Experience>
      </div>
    ))}
  </div>
);

const Experience = styled.div`
  border-radius: 0px 30px 0px 0px;
  box-shadow: 0px 4px 20px rgba(51, 76, 203, 0.16);
  background-color: white;
`;

const EducationList = ({ schools }) => (
  <BorderedLeftList>
    {schools.map((s) => (
      <div>
        <DateLine>{s.years}</DateLine>
        <ItemName>{s.title}</ItemName>
      </div>
    ))}
  </BorderedLeftList>
);

const BorderedLeftList = styled.div`
  border-left: 1px solid #0b217b;
  padding-left: 1rem;
`;
const DateLine = styled.p`
  padding: 0;
  margin: 0;
  line-height: 1.5rem;
  color: #0b217b;
  font-size: 1rem;
`;
const ItemName = styled.h4`
  font-size: 1.25rem;
  margin-top: 0;
  font-weight: 60;
  color: #0b217b;
`;

const BlueWrapper = styled.div`
  background-color: #334ccb;
  border-radius: 0 200px 0 0;
  padding: 3rem;
  color: white;
  padding-bottom: 8rem;
`;

export const RowWrapper = styled.div`
  padding: 2rem 3rem;
  padding-bottom: 0;
`;
const WhiteTitle = styled.h2`
  color: white;
`;
export const MiniTitle = styled.h3`
  font-size: 1.5rem;
  color: #0b217b;
  font-weight: 600;
`;
const OutlineTitle = styled.h3`
  color: white;
  text-shadow: -1px -1px 0 #334ccb, 1px -1px 0 #334ccb, -1px 1px 0 #334ccb, 1px 1px 0 #334ccb;
`;
