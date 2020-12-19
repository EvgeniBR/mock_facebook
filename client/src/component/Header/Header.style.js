import styled from "styled-components";

export const Container = styled.div`
  height: ${props => props.theme.headerHigth};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  background-color: ${props => props.theme.postBackground};
  border-bottom: 1px solid ${props => props.theme.dropDownBorder};
  .mainLogo{
    height: 40px;
    cursor: pointer;
    padding : 0 0.3rem; 
  }
  .rightSideBtns {
    display: flex;
    .p{
        color: ${props => props.theme.primaryText};
    }
  }
  .leftSideBtns {
    display: flex;
    margin : 0 0.3rem;
    padding : 0 0.3rem; 
  }
  .middleBtns{
    display: flex;
    .headerBtn{
        color: ${props => props.theme.primaryText};
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 25px;
        &:hover{
          background: ${props => props.theme.headerHoverColor};
          border-radius: 10px;
        }
      }
    @media (max-width: calc(650px)) {
      display: none;
    }
  }
`;

export const FacebookLogo = styled.img`
  height: 40px;
  cursor: pointer;
  padding : 0 0.3rem; 
`;

export const Search = styled.input`
  margin : 0 0.3rem;
  height: 40px;
  width: 270px;
  border:none;
  border-radius: 25px;
  font-family: FontAwesome;
  background-color: ${props => props.theme.postCommentBackground};
  color: ${props => props.theme.color};
  .mainLogo{
    cursor: pointer;
  }
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #A7AAAE;
    opacity: 1; /* Firefox */
    font-size: 1rem;
    text-align: left;
    padding-left: 20px
    }
`;

export const FacebookProfileBtn = styled.div`
    background-color: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    border-radius: 25%;
    &:hover{
        background-color: ${props => props.theme.postCommentBackground};
    }
    @media (max-width: calc(650px + 300px + 300px)) {
      display: none;
    }
`;

export const RigthBtn = styled.button`
  border: none;
  background-color: rgba(0,0,0,0);
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => props.theme.postCommentBackground};
  cursor: pointer;
  &:hover{
        background-color: ${props => props.theme.headerHoverColor};
  }
`;


