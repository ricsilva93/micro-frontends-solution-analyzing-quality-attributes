import styled from "styled-components";
import {IconButton} from "@material-ui/core";

export const NavStyle = styled.div`
navDisplayFlex: {
    display: flex,
    justifyContent: space-between
  },
linkText: {
    textDecoration: none,
    textTransform: uppercase,
    color: white
    }
`;

export const Wrapper = styled.div`
margin: 40px;
`;

export const StyledButton = styled(
  IconButton
)`
`