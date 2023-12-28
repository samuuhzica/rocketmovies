import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: 
  'header'
  'content';
`;

export const Tags = styled.ul`
  list-style: none;
  
`