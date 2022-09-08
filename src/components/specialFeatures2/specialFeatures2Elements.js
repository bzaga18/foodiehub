import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    align-items: center;
    padding-top: 60px;

    @media screen and (max-width: 768px) {
        padding: 20px;
    }
`
export const Header = styled.div`
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export const TopRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 40px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
`

export const BottomRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 40px;
    margin-top: 40px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
    }
`

export const Content = styled.div`
    padding: 10px 15px;
    color: #fff;
`

export const Card = styled.div`
    width: 250px;
    height: 360px;
    background-color: #181818;
    overflow: hidden;
    object-fit: cover;
    
    @media screen and (max-width: 768px) {
        width: 170px;
    }
`