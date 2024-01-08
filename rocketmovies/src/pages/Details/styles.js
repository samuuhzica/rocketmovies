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
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > div {
    display: flex;

    > h1 {

    font-size: 3.6rem;
    margin-bottom: 2.4rem;
    margin-right: 2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    }
    > ul {
      margin-top: 0.8rem;
    }

  }
  > span {
    display: flex;
    align-items: center;
    font-size: 1.6rem;

     img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

     svg 
      {
        margin-left: 0.8rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
      p{
        margin-left: 0.8rem;
      }
    
  }
  
  > p {
    font-size: 1.6rem;
    text-align: justify;
    margin-top: 4rem;
    margin-bottom: 6.4rem;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`