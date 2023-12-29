import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:100vh;

  display: grid;
  grid-template-rows: 11.5rem 11.5rem auto ;
  grid-template-areas: 
  'header'
  'newnote'
  'content';
  > h1{
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 0 8rem;
  }
  >div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5rem;
    padding: 0 8rem;

    h1 {
      font-weight: 400;
      font-size: 3.2rem;
    }
  }

  
`;
export const Content = styled.div`
    display: flex;
    flex-direction:column;
    margin: 0 auto;
`;
export const Search = styled.div`
`;
export const NewNote = styled.button `
  height: 4.8rem;
  padding: 1.6rem 3.2rem ;
  background-color: ${({ theme })=> theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUNG_600};
  border-radius: 0.8rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 0.8rem;
  }
`;