import React from "react";
import { height } from "@material-ui/system";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";

const Dashboard = () => {
  return (
    <Wrapper>
      <WrapperLogoMenu>
        <StyledLogo>Logo</StyledLogo>
        <StyledMenu>Menu</StyledMenu>
      </WrapperLogoMenu>
      <WrapperSidebarContent>
        <div>Sidebar</div>
        <div>Content</div>
      </WrapperSidebarContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const WrapperLogoMenu = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
`;

const WrapperSidebarContent = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
`;

const StyledLogo = styled.div`
  background-color: pink;
`;

const StyledMenu = styled.div`
  background-color: gray;
`;

export default Dashboard;
