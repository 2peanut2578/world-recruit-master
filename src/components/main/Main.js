import React from "react";
import Description from "./Description";
import ImageList from "./ImageList";
import Media from "./Media";
import TextList from "./TextList";
import ViewList from "./ViewList";
import Form from "./Form";
import Image from "./Image";

function ComponentSelector(section, index) {
  switch (section.type) {
    case "Description":
      return <Description key={index} data={section} />;
    case "ImageList":
      return <ImageList key={index} data={section} />;
    case "Media":
      return <Media key={index} data={section} />;
    case "Image":
      return <Image key={index} data={section} />;
    case "TextList":
      return <TextList key={index} data={section} />;
    case "ViewList":
      return <ViewList key={index} data={section} />;
    case "Form":
      return <Form key={index} data={section} />;
    default:
      return "";
  }
}

function Sections(props) {
  return (
    <section>
      {props.data.map((section, index) => {
        return ComponentSelector(section, index);
      })}
    </section>
  );
}

const Main = (props) => {
  console.log(props.data);
  return <Sections data={props.data.sections} />;
};

export default Main;
