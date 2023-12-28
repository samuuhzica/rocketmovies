import styled from "styled-components";

export const Container = styled.section`
  margin: 2.8rem 0 5.6rem;
  
  > h2 {
    margin-bottom: 2.4rem;
    padding-bottom: 1.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 2rem;
    font-weight: 400;
  }
`