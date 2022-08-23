import styled from "styled-components";


export const ChefsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 40px;
    
    @media screen and (max-width: 768px) {
        margin-top: 80px;
        padding: 0 20px;
    }
`
export const ChefsTitle = styled.h1`
    font-family: 'Crimson Text', serif;
    font-size: 3rem;
    padding: 20px 0; 

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`
export const ChefsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: auto;
    }
`
export const ChefsCard = styled.div`
    display: flex;
    width: 100%;
`
export const Profile = styled.div`
    margin-right: 10px;
    
`

export const Description = styled.p`
    padding: 10px;
    color: #808080;
    line-height: 24px;
`
export const CardIcon = styled.div`

`