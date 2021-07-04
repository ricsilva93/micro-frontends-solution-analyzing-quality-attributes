import styled from "styled-components";

export const Wrapper = styled.div`
table {
    border-collapse: collapse;
    margin: 50px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
  }
td, th {
    border: 1px solid #999;
    padding: 12px 15px;
  }
  thead tr {
    background-color: rgba(52, 41, 174, 1);
    color: #ffffff;
    text-align: left;
}

tbody tr {
    border-bottom: 1px solid #dddddd;
}

.text {
  margin: 50px 50px;
}
`;