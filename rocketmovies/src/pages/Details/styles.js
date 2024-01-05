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
    padding: 0 12.8rem;

  }
  
  .return-button{
    margin-bottom: 2.4rem;
  }
`;


export const Content = styled.div`
  max-width: 115rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > p {
    font-size: 1.6rem;
    text-align: justify;
    margin-top: 4rem;
    margin-bottom: 6.4rem;
  }
`