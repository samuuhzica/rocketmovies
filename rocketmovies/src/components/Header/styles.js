import styled from "styled-components";

export const Container = styled.header`
  grid-area: 'header';

  height: 11.5rem;
  width: 100%;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  align-items: center;

  padding: 0 12.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 2.4rem;
    margin-right: 6.4rem;
  }
  `

  export const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 30rem;
    margin-left: 6.4rem;

    > img {
      height: 5.6rem ;
      width: 5.6rem ;
      border-radius: 50%;
    } 

    > div {
      display: flex;
      flex-direction: column;
      margin-right: 1.6rem;
      line-height:2.4rem;

      span {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: 1.4rem;
        display: flex;
        align-self: flex-end;
      }
      strong {
        width: 100%;
        display: inline-flex;
        text-align: end;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.8rem;
        white-space: nowrap; 
        
      }
    }
  
  `