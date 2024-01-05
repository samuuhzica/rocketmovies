import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.5rem auto;
  grid-template-areas: 
  'header' 
  'content';

  > main {
    grid-area: 'content';
    overflow-y: scroll;
    padding: 0 12.8rem;
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.4rem;
  }
`
export const Form = styled.form`
  max-width: 115rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: left;
    flex-direction: column;
    
    margin-bottom: 4rem;

    a {
     font-size: 2rem;
     color:${({ theme }) => theme.COLORS.PINK};
     margin-bottom: 2.4rem;
    }
    
  }
  > div{
    display: flex;
    gap: 4rem;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.BLACK};
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }

`