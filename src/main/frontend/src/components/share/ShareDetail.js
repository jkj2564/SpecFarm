import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "../../styles/share/detail.module.css";
import { Button } from "@mui/material";
import CommentContainer from "./CommentContainer";
import Comment from "./Comment";
import axios from "axios";
import { API_BASE_URL } from "../../app-config";

const ShareDetail = () => {
  const [share, setShare] = useState({});
  const { shareIdx } = useParams();
  const [shareReply, setShareReply] = useState([]);
  const [user, setUser] = useState({});

  //share 상세페이지
  useEffect(() => {
    axios
      .get(API_BASE_URL + "/community/share/shareDetail?shareIdx=" + shareIdx)
      .then((response) => {
        console.log(response);
        setShare(response.data);
      });
    //share 댓글 반환
    axios
      .get(API_BASE_URL + "/community/share/comment/" + shareIdx)
      .then((response) => {
        console.log(response);
        setShareReply(response.data.data);
      });

    //로그인 유저 정보
    axios
      .get(API_BASE_URL + "/user/getUser", {
        headers: {
          Authorization: "Bearer" + sessionStorage.getItem("ACCESS_TOKEN"),
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.user !== null && response.data.user !== undefined)
          setUser(response.data.user);
      });
  }, []);

  //share 댓글 입력
  const insertShareReply = (shareReply) => {
    axios({
      method: "post",
      url: API_BASE_URL + `/community/share/${shareIdx}/insertComment`,
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("ACCESS_TOKEN"),
      },
      data: shareReply,
    }).then((response) => {
      console.log(response);
      setShareReply(response.data.shareReplyList);
    });
    console.log(shareReply);
  };

  return (
    <div className={styles.detailBox}>
      <div className={styles.title}>
        <p>{share.shareYn === "Y" ? "나눔" : "완료"}</p>
        <h1>{share.shareTitle}</h1>
        <div className={styles.btns}>
          <Button
            style={{
              border: "1px solid #1d5902",
              color: "#1d5902",
              height: "38px",
            }}
            href="/community/share"
            className={styles.deleteBtn}
            onClick={() => (
              (window.location = "/share"), alert("삭제되었습니다.")
            )}
          >
            삭제
          </Button>
          <Button
            style={{
              backgroundColor: "#1d5902",
            }}
            type="submit"
            color="primary"
            variant="contained"
            onClick={() => (
              (window.location = "./detail"), alert("등록되었습니다.")
            )}
            className={styles.mdfBtn}
          >
            수정
          </Button>
        </div>
      </div>
      <div className={styles.detailBoxTop}>
        <div className={styles.contentTop}>
          <img
            className={styles.detailImg}
            src={
              share.shareImgName
                ? `/upload/share/${share.shareImgName}`
                : "/upload/share/shareImg.png"
            }
            alt="img"
          />
        </div>
        <div id="askDetailContainer" style={{ width: "800px" }}>
          <div
            id="detailContentBox"
            style={{
              width: "100%",
              minHeight: "355px",
            }}
          >
            <div>
              <div className={styles.detailWriterTop}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="detailWrite">
                    <img
                      id="profileImg"
                      src={
                        share.user &&
                        `/upload/profile/${share.user.userProfileName}`
                      }
                      alt="프로필사진"
                      style={{ borderRadius: "50%" }}
                    />
                    {share.user && share.user.userNick}
                  </div>
                </div>
                <p>{share.shareRegDate}</p>
              </div>
              <div className="detailContent">{share.shareContent}</div>
            </div>
          </div>
        </div>
      </div>

      <div id="detailReply">
        <div
          style={{
            padding: "20px",
            boxShadow: "5px 5px 15px rgb(0 0 0 / 15%)",
            borderRadius: "15px",
            background: "white",
            zIndex: "1",
            borderBottom: "1px solid rgb(230,230,230)",
            borderTopRightRadius: "15px",
            borderTopLeftRadius: "15px",
          }}
        >
          <CommentContainer
            id={0}
            insertShareReply={insertShareReply}
            shareIdx={shareIdx}
            setShareReply={setShareReply}
            user={user}
            share={share}
          />
          {shareReply.map((comment) => (
            <Comment
              key={comment.shareReplyIdx}
              comment={comment}
              user={user}
              share={share}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareDetail;
