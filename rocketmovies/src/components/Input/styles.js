import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_750};
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 1rem;
  margin: 0 ;
  margin-bottom: 0.8rem;

  > input {
    height: 5.6rem;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    
    padding: 1.2rem;
    background-color: transparent;
    border: 0;

    &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`