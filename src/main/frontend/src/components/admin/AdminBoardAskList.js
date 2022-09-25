import React, { useState, useEffect } from "react";
import { Pagination, Stack } from "@mui/material";
import AdminBoardAsk from "./AdminBoardAsk";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const AdminBoardAskList = ({ style, askTotal }) => {
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios
      .get(API_BASE_URL + "/admin/ask", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
        },
        params: {
          page: page - 1,
        },
      })
      .then((response) => {
        setBoardList(response.data.askList.content);
        setCount(response.data.askList.totalPages);
      })
      .catch((e) => {
        console.log(e.data.error);
      });
  }, [page]);
  return (
    <div className={`${style.boardBox} ${style.boardList}`}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <p className={style.adminTitle}>물어방</p>
        <div
          style={{
            width: "50%",
            minWidth: "300px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>총 게시글: {askTotal}</p>
          <p>신규 게시글: 3</p>
          <p>신규 댓글: 13</p>
        </div>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th className={style.boardNo}>No</th>
            <th className={style.boardTitle}>제목</th>
            <th className={style.boardWriter}>작성자</th>
            <th className={style.boardCount}>조회수</th>
            <th className={style.boardRegDate}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board, index) => (
            <AdminBoardAsk key={index} board={board} style={style} />
          ))}
        </tbody>
      </table>
      <Stack spacing={2}>
        <Pagination
          count={count} //총 페이지 수
          page={page} //현재 페이지
          onChange={(e, p) => {
            setPage(p);
          }}
        />
      </Stack>
    </div>
  );
};

export default AdminBoardAskList;