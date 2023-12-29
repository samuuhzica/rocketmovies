import styled from "styled-components";
import backgroundImg from "../../assets/backgroundsignin.png"

export const Container = styled.div`
  height:100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  margin-right: 10rem;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  >h2 {
    font-size: 2.4rem;
    margin-top: 4.8rem;
    margin-bottom: 4.8rem;
  }
  > p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-top: -1rem;
  }
  > button:last-child {
    align-self: center;
    margin-left: 12.5rem;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`