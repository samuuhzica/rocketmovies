import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:100vh;

  display: grid;
  grid-template-rows: 11.5rem auto ;
  grid-template-areas: 
  'header'
  'content';

  > h1{
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
export const Content = styled.div`
`;
export const Search = styled.div`
`;
export const NewNote = styled.button `
`;