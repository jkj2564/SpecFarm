import React from "react";
import styles from "../../styles/findcourse/findcourse.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CourseSelector from "../../components/findCourse/CourseSelector";

const CourseContainer = () => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.courseSearchBar}>
        <input className={styles.courseinput} placeholder="검색"></input>
        <SearchIcon
          fontSize="large"
          color="action"
          style={{ position: "absolute", top: "12px", right: "20px" }}
        />
      </div>
      <div className={styles.popCourse}>
        <div className={styles.skillsBtns}>
          <a href="#">지게차 운전 기능사</a>
        </div>
        <div className={styles.skillsBtns}>
          <a href="#">건축기사</a>
        </div>
        <div className={styles.skillsBtns}>
          <a href="#">한식조리 기능사</a>
        </div>
        <div className={styles.skillsBtns}>
          <a href="#">중식조리 기능사</a>
        </div>
        <div className={styles.skillsBtns}>
          <a href="#">일식조리 기능사</a>
        </div>
        <div className={styles.skillsBtns}>
          <a href="#">양식조리 기능사</a>
        </div>
        <div className={styles.skillsBtns}>
          <a href="#">문식조리 기능사</a>
        </div>
      </div>
      <div className={styles.selectContainer}>
        <div className={styles.selectWrapper}>
          <CourseSelector></CourseSelector>
        </div>
      </div>
    </div>
  );
};

export default CourseContainer;