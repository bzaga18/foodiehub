import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const EditorsChoiceWrap = styled.div`
    background-color: #f7f5f0;
    padding-bottom: 50px;
`
export const EditorsChoiceTitle = styled.div`
    text-align: center;
    padding-top: 50px;
    padding-bottom: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
`

export const EditorsChoiceContent = styled.div`
    position: relative;
    display: flex;
    padding: 16px;
    font-family: 'Crimson Text', serif;
`

export const ImageContentOverlay = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
    background-color: rgba(224, 56, 82, 0.7); 
    border-radius: 50%;
    font-family: 'Crimson Text', serif;
    width: 45%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        width: 32%;
        height: 45%;
    }

    &:hover {
        background-color: #e03852;
        transition: 0.3s ease-in-out;
        cursor: pointer;
    }
`