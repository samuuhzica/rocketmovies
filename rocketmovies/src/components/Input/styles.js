import styled from "styled-components";

export const Container = styled.div`
  width: 80%;

  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border-radius: 1rem;
  margin: 0 6.4rem ;

  > input {
    height: 5.6rem;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    padding: 1.2rem;
    background-color: transparent;
    border: 0;

    &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    }
  }
  > svg {
    margin-left: 1.6rem;
  }
`