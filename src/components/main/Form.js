import React from "react";
import "./Form.css";
import Heading from "./Heading";
export default function Form(Props) {
  return (
    <div id="entryForm">
    <Heading  heading="Entry" />
    <div className="container">
      <form action={Props.data.action}　className="contact-box">
      <div className="left"></div>
      <div className="right">
  
      {Props.data.items.map((item, index) => {
          return (
              <div>
                <input className = "field"
                  key={index}
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}        
                />
              </div>      
          );
        }
        )}
        <textarea name="entry.1253529684" placeholder="何か質問がありますか？" className="field"></textarea>
        <input type ="submit" value ="応募" className="btn"/>
      </div>

      </form>
    </div>
    </div>
  );
}
