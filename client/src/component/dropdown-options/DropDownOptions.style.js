import styled from "styled-components";

export const Container = styled.div`
    color:  ${props => props.theme.primaryText};
    padding: "10px";
    .dropDownAccount__header{
        border-bottom: 1px solid ${props => props.theme.dropDownBorder};
    }
    .dropDownAccount__title{
        margin-left: ${props => props.theme.postMargin};
    }
`;

export const DropDown = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    .dropDownOptions{
        position: absolute;
        right: 0;
        width: 250px;
        top: ${props => props.theme.headerHigth};
        border-radius: 0 0 5px 5px;
        z-index: 5;
        background-color: ${props => props.theme.postBackground};
        border: ${props => props.theme.dropDownBorder};
    }
`;
