import React, { useEffect } from "react";
import {
  Typography,
  Button,
  Popover,
  Fade,
  Paper,
  Box,
  Link,
  InputBase,
  IconButton,
  Slide,
  Stack,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import SendIcon from "@mui/icons-material/Send";
import ChatItem from "./ChatItem";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
import { getMessages } from "../../redux/action-creators/messages";
import { useActions } from "../../redux/hooks/useActions";

const SupportLiveChat = () => {
  const { messages, error } = useTypedSelector((state) => state.messages);
  const { getMessages } = useActions();

  useEffect(() => {
    getMessages();
  }, []);

  console.log(messages);
  const CHARACTER_LIMIT = 140;

  const [values, setValues] = React.useState({
    message: "",
  });

  const handleChange =
    (message: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [message]: event.target.value });
    };
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div
      style={{
        position: "absolute",
        top: "90%",
      }}
    >
      <Slide direction="up" in={!open}>
        <Button
          sx={{
            minWidth: "10px !important",
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            backgroundColor: "#3e71f4",
            marginRight: "50px",
            transitionProperty: "display",
            transitionDuration: "1s",
            transitionTimingFunction: "ease-out",
          }}
          variant="contained"
          onClick={handleClick}
        >
          <ChatBubbleRoundedIcon
            sx={{
              width: "25px",
              height: "25px",
            }}
          />
        </Button>
      </Slide>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: "280px",
            height: "420px",
            p: "23px 11px 16px 13px",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              direction: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  font: "18px Inter",
                  color: "#000000",
                }}
              >
                Contact Us
              </Typography>
              <IconButton onClick={handleClose}>
                <KeyboardArrowUpRoundedIcon
                  sx={{ width: "17px", height: "17px" }}
                />
              </IconButton>
            </Box>
            <Link
              underline="none"
              sx={{
                font: "12px Inter",
                transform: "translate(0,-10%)",
              }}
              onClick={handleClose}
            >
              See how we process personal data{" "}
              <LaunchIcon sx={{ width: "10px", height: "10px" }} />
            </Link>
            <Box>
              {messages.map((messageItem) => (
                <ChatItem
                  sender={messageItem.sender}
                  isOnline={messageItem.isOnline}
                  messageText={messageItem.messageText}
                />
              ))}
            </Box>
            <Typography
              sx={{
                font: "13px Inter",
                color: "#7F7F7F",
                m: "6px 0 ",
              }}
            >
              Contact us directly via email or phone:
            </Typography>
          </Stack>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Button
              sx={{
                borderRadius: "50px",
                width: "110px",
                font: "12px Inter",
                border: "1px solid #2B64F5",
              }}
              size="small"
              variant="outlined"
              onClick={handleClose}
            >
              <Typography
                sx={{
                  p: "2px 0",
                  font: "11px Inter",
                  color: "#2B64F5",
                }}
              >
                +370 685 24435
              </Typography>
            </Button>
            <Button
              sx={{
                borderRadius: "50px",
                width: "125px",
                textTransform: "none",
                border: "1px solid #2B64F5",
                mt: "5px",
              }}
              size="small"
              variant="outlined"
              onClick={handleClose}
            >
              <Typography
                sx={{
                  p: "2px 0",
                  font: "12px Inter",
                  color: "#2B64F5",
                }}
              >
                info@smefinance.lt
              </Typography>
            </Button>
          </Box>
          <Paper
            component="form"
            elevation={0}
            sx={{
              mt: "12px",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              backgroundColor: "#F8F8F8",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <InputBase
                sx={{
                  width: "100%",
                  ml: "13px",
                  flex: 1,
                  font: "14px Inter",
                }}
                multiline
                placeholder="Write your question here"
                inputProps={{
                  maxlength: CHARACTER_LIMIT,
                  "aria-label": "post",
                }}
                onChange={handleChange("message")}
              />
              <IconButton
                sx={{
                  m: "18px 12px 0 10px",
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#2B64F5",
                  color: "white",
                }}
                onClick={handleClose}
              >
                <SendIcon sx={{ width: "19px", height: "19px" }} />
              </IconButton>
            </Box>
            <Typography
              sx={{
                color: "#C2C0C0",
                font: "9px Inter",
                m: "0 0 9px 15px",
              }}
            >
              {`${values.message.length}/${CHARACTER_LIMIT}`}
            </Typography>
          </Paper>
        </Paper>
      </Popover>
    </div>
  );
};

export default SupportLiveChat;
