import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Form.css";
export default function Form(Props) {
  return (
    <div className="wraper">
      <div>
        <Typography variant="title">
          <strong>
            <h3>ENTRY</h3>
          </strong>
          <p className="subtitle">エントリー</p>
        </Typography>
        <form action={Props.data.action} className="contact-box">
          <div className="left"></div>
          <div className="right">
            {Props.data.items.map((item, index) => {
              return (
                <div>
                  <input
                    className="field"
                    key={index}
                    type={item.type}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                </div>
              );
            })}
            <textarea
              name="entry.1253529684"
              placeholder="何か質問がありますか？"
              className="field"
            ></textarea>
            <input type="submit" value="応募" className="btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
