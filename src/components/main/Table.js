
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';





function createData(name, info) {
  return { name, info };
}

const rows = [
  createData("創立", "平成3年8月"),
  createData("資本金", "3,000万円"),
  createData(
    "会社所在地",
    "〒500-8856 岐阜県岐阜市橋本町2-8濃飛ニッセイビル6階   ||  TEL 058-255-3066 / FAX 058-255-3633"
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



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          株式会社ワールド
        </Grid>
        {rows.map(row => (
          <Grid 
          key={row.name}
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
         >
            <Grid item xs={6} >
              {row.name}
            </Grid>
            <Grid item xs={6}>
              {row.info}
            </Grid>
          </Grid>
       ))}
      </Grid>
     
    </div>
  );
}
