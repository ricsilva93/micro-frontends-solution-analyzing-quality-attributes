import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 2px solid lightblue;
  border-radius: 20px;
  height: 100%;
  
  IconButton{
    border-radius: 0 0 20px 20px;
    border-top: 1px solid lightblue;
  }
  
  img{
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    border-bottom: 1px solid lightblue;
    max-width: 588px;
  }
  
  div{
    font-family: Arial, sans-serif;
    padding: 1rem;
    height: 100%;
    border-top: 1px solid lightblue;
    border-bottom: 1px solid lightblue;
  }
`;