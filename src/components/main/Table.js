import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { TextareaAutosize } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    width: "50%",
    magin: "0 auto" 
  }
});
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);
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

export default function TableInfo() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead textalign="center">
            <StyledTableCell colSpan="2" align="center">
              株式会社ワールド
            </StyledTableCell>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.info}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
