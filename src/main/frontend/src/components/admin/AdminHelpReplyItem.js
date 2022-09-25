import React from "react";
import { useNavigate, useLocation } from "react-router";

const AdminHelpReplyItem = ({ style, help }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {!!help ? (
        <tr
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate(`/community/ask/${help.askIdx}`, {
              state: {
                prevUrl: location.pathname,
              },
            });
          }}
        >
          <td className={style.helpNo}>{help.helpIdx}</td>
          <td className={style.helpTitle}>{help.helpTitle}</td>
          <td className={style.helpWriter}>{help.userId}</td>
          <td className={style.helpCount}>{help.helpCount}</td>
          <td className={style.helpRegDate}>{help.helpRegDate}</td>
        </tr>
      ) : null}
    </>
  );
};

export default AdminHelpReplyItem;