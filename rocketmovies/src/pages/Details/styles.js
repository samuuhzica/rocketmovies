import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: 
  'header'
  'content';

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
`;

export const Tags = styled.ul`
  list-style: none;
  
`

export const Content = styled.div`
  max-width: 115rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > h1 {
    padding-top: 6.4rem ;
    font-weight: 500;
    font-size: 3.6rem;
  }
  > p {
    font-size: 1.6rem;
    text-align: justify;
    margin-top: 1.6rem;
  }
`