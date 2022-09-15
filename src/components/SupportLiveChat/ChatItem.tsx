import React from "react";
import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import styles from './message.module.scss';

interface messageItemInterface {
  sender: string;
  isOnline: boolean;
  messageText: string;
}

const ChatItem = (props: messageItemInterface) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          mb: "8px",
        }}
      >
        <Typography
          sx={{ font: "normal normal normal 13px Inter", color: "#7F7F7F" }}
        >
          {props.sender}
        </Typography>
        {props.isOnline ? (
          <CircleIcon
            sx={{
              color: "#95E980",
              width: "9px",
              height: "9px",
              m: "2px 0 0 3px",
            }}
          />
        ) : (
          <CircleIcon
            sx={{
              color: "#F7F7F7",
              width: "9px",
              height: "9px",
              m: "2px 0 0 3px",
            }}
          />
        )}
      </Box>
      <Box className={styles.messageItem}>
        <Typography
          sx={{ p: "3px 10px", font: "12px Inter", lineHeight: 1.3, color: "#000000", letterSpacing: '0px'}}
        >
          <pre>{props.messageText}</pre>
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
