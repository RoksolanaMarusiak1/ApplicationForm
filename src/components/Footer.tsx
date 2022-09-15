import styled from "styled-components";
import SupportLiveChat from "./SupportLiveChat/Chat";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 90px;
  background: #f5f5f5;
`;

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <SupportLiveChat/>
      </StyledFooter>
    </div>
  );
}
