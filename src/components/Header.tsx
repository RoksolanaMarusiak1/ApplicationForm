import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-right: 35%;
  background: #f5f5f5 0% 0% no-repeat padding-box;
`;

const AppTitle = styled.span`
  color: #000000;
  font: 25px Inter;
`;

const FillLater = styled.span`
  font: 16px Inter;
  letter-spacing: 0px;
  color: #2b64f5;
`;

const Logo = styled.h1`
  font: SemiBold normal 600 35px Inter;
  color: #2b64f5;
  margin-left: 80px;
  display: flex;

  span {
    background: #2b64f5;
    display: block;
    width: 20px;
    height: 5px;
    margin-top: 7px;
    margin-left: 8px;
    &:nth-child(2) {
      width: 12px;
    }
    &:nth-child(3) {
      width: 5px;
      border-radius: 50%;
    }
  }
`;

export default function Header() {
  return (
    <div>
      <StyledHeader>
        <Logo>
          smeGo
          <div>
            {" "}
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Logo>

        <AppTitle>Application</AppTitle>
        <FillLater>Fill in Later</FillLater>
      </StyledHeader>
    </div>
  );
}
