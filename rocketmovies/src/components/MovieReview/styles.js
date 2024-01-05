import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  margin-top: 0.8rem;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`

export const Rating = styled.ul`
  list-style: none;
  display: flex;
  border: 1px solid red;
  > li {
    margin-right: 1rem;
    text-align: left;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`