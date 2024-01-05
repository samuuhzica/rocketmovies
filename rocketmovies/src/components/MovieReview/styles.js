import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  margin-top: 4rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    > h1 {
      margin-right: 2rem;
    }
  }

`

export const Rating = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  margin-top: 0.8rem;

  > li {
    margin-right: 1rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > svg {
    background-color: ${({ theme }) => theme.COLORS.PINK} ;
  }
`