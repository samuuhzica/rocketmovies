import styled from "styled-components";

export const Container = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;

  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;

  margin-right: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    }
`