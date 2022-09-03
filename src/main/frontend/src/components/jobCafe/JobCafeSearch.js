import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../styles/skills/jobCafeSearch.module.css";

const JobCafeSearch = () => {
  return (
    <div>
      <div className={styles.search}>
        <TextField
          id="outlined-search"
          type="search"
          InputProps={{
            startAdornment: <SearchIcon color="inherit" />,
          }}
          size="small"
        ></TextField>
      </div>
    </div>
  );
};

export default JobCafeSearch;