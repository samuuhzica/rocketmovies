import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;

  padding: 2rem 1.6rem;
  border-radius: 1rem;

  margin-right: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_750};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    }
`