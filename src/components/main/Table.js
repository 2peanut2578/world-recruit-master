import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import list2 from "../../img/list2.jpg"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "50px auto"
  },
  table: {
    width: "50%",
    magin: "0 auto" 
  },
  row: {
    display: "flex",
    margin: " 0 20px 20px 0",
  },
  left: {
    marginRight: "10px",
    textAlign: "left",
    width: "20%",
  },
  right: {
    textAlign: "left",
    width: "80%"
  },
  img: {
    maxWidth: "100%"
  }
});



function createData(name, info) {
  return { name, info };
}

const rows = [
  createData("創立", "平成3年8月"),
  createData("資本金", "3,000万円"),
  createData(
    "会社所在地",
    "〒500-8856 岐阜県岐阜市橋本町2-8濃飛ニッセイビル6階 || TEL 058-255-3066 / FAX 058-255-3633"
  ),
  createData("代表者氏名", "代表取締役　清水貴士"),
  createData(
    "事業内容",
    "一般労働者派遣事業（般 21-300027）  ||   有料職業紹介事業 （21-ユ-300032）"
  ),
  createData(
    "ワールドグループ",
    "株式会社ワールドインデュース（業務請負業） || 株式会社グローバル・スタッフ(一般労働者派遣事業） ||  株式会社ガーデンエンジニア"
  )
];

export default function TableInfo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          {rows.map((row, index) => (
                    <span key = {index} className = {classes.row}>
                      <p className = {classes.left}>{row.name}</p>
                      <p className = {classes.right}>{row.info}</p>
                    </span>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}><img className = {classes.img} src = {list2}></img></Grid>  
       </Grid>
    </div>
  );
}

