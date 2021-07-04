import { IconButton } from "@material-ui/core";
import styled from "styled-components";

export const CheckoutStyle = styled.aside`
font-family: Arial, sans-serif;
width: 500px;
padding: 20px;
`;

export const Separator = styled.div`
font-family: Arial, sans-serif;
border-top: 2px solid lightblue;
padding: 20px;
`;

export const CheckoutItemStyle = styled.div`
display: flex;
  justify-content: space-between;
  font-family: Arial, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  
  div{
    flex: 1;
  }
  
  .information,
  .buttons{
    display: flex;
    justify-content: space-between;
  }
  
  img{
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;

export const StyledButton = styled(
  IconButton
)`
`