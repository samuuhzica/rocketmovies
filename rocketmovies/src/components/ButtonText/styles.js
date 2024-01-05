import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  border: none;
  font-size: 1.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 4rem;
  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-right: 0.8rem;
  }
`