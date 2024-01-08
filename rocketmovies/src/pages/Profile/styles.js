import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: 'header' 'content';
`
export const Header = styled.div`
  grid-area: 'header';
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800_ROSE};

  > button {
    padding: 2rem;
    margin-left: 10rem;
  }
`
export const Form = styled.form`
  margin: 0 55rem ;
  display: flex;
  flex-direction: column;
  align-items: center ;
  

  >div:nth-child(4){
    margin-top: 1.6rem;
  }

`
export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 6.4rem;

  width: 19.6rem;
  height: 18.6rem;

  > img {
  width: 19.6rem;
  height: 18.6rem;
  border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`