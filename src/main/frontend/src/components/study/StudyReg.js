import React, { useRef } from "react";
import styles from "../../styles/study/StudyReg.module.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const StudyReg = () => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 3.8 + ITEM_PADDING_TOP,
        width: 120,
      },
    },
  };

  const [maxMemberCnt, setMaxMemberCnt] = React.useState("");

  const handleChange = (event) => {
    setMaxMemberCnt(event.target.value);
  };

  const menuItemList = () => {
    const result = [];
    for (let index = 1; index < 11; index++) {
      result.push(
        <MenuItem key={index} value={index}>
          {index}명
        </MenuItem>
      );
    }
    return result;
  };

  const defaultContentValue = `  스터디 모집글을 아래 양식을 참고해 작성해주세요. 
  꼼꼼히 작성하면 멋진 스터디 팀원을 만나실 수 있을거예요. 
  
  [스터디 모집 내용 예시]
  
  스터디 주제 :
  스터디 목표 : 
  예상 스터디 일정(횟수) :
  예상 커리큘럼 간략히 :
  예상 모집인원 :
  스터디 소개 : 
  스터디 주의사항 : 
  스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.)`;

  const readImage = (file) => {
    // 인풋 태그에 파일이 있는 경우
    if (file) {
      // FileReader 인스턴스 생성
      const reader = new FileReader();

      // 이미지가 로드가 된 경우
      reader.onload = (e) => {
        const preImg = document.getElementById("studyImgPreview");
        preImg.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.studyRegContainer}>
      <div className={styles.leftContainer}>
        <img
          className={styles.studyImgPreview}
          src="https://velog.velcdn.com/images/kshired/post/d8a48a1f-4106-480f-8307-d20eae1f9486/image.png"
          alt="미리보기"
          id="studyImgPreview"
          title="사진을 추가하려면 클릭하세요."
          onClick={() => {
            document.getElementById("uploadImg").click();
          }}
          style={{ cursor: "pointer" }}
        ></img>
        <div className={styles.selectorWrapper}>
          <Box
            sx={{
              minWidth: 120,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#8cbf75",
                },
              },
            }}
          >
            <FormControl fullWidth>
              <InputLabel
                id="maxSelectLabel"
                sx={{
                  "&.MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#8cbf75",
                    },
                  },
                  "&.MuiInputLabel-root": {
                    "&.Mui-focused": {
                      color: "#1d5902",
                    },
                  },
                }}
              >
                최대인원
              </InputLabel>
              <Select
                labelId="maxSelectLabel"
                id="maxSelect"
                value={maxMemberCnt}
                label="MaxMemberCnt"
                onChange={handleChange}
                MenuProps={MenuProps}
              >
                {menuItemList()}
              </Select>
            </FormControl>
          </Box>
        </div>
        <input
          hidden
          type="file"
          className={styles.uploadImg}
          id="uploadImg"
          onChange={(e) => {
            readImage(e.target.files[0]);
          }}
        ></input>
      </div>
      <div className={styles.rightContainer}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "750px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="studyTitleInput"
            label="제목"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#8cbf75",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "#1d5902",
                },
              },
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "750px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="studyContentInput"
            label="내용"
            multiline
            rows={15}
            defaultValue={defaultContentValue}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#8cbf75",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "#1d5902",
                },
              },
            }}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "750px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="studyContactInput"
            label="연락수단"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#8cbf75",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "#1d5902",
                },
              },
            }}
          />
        </Box>
        <div className={styles.submitBtnWrapper}>
          <Link to={".."}>
            <button className={styles.studyRegCancel}>취소</button>
          </Link>

          <button type="submit" className={styles.studyRegBtn}>
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyReg;
