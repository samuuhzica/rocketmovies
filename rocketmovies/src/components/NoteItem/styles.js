import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE};

  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-right:1.6rem;

  > button {
    color: ${({ theme }) => theme.COLORS.PINK};
    border:none;
    background:none;
  }
  > input {
    height:5.6rem;
    width:100%;

    padding:1.2rem;
    background:transparent;
    border:none;

    color:${({ theme }) => theme.COLORS.WHITE};
    
    &::placeholder{
      color:${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`;

