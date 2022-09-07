import styled from "styled-components";


export const SpecialFeaturesContainer = styled.div`
    width: 100%;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`

export const BGImg = styled.div`
    width: 100%;
    height: 600px;
    overflow: hidden;
    margin: 0;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }

`

export const SpecialFeaturesTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 50px;
    letter-spacing: 4px;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`
export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    text-align: center;
    padding: 40px 80px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`



export const Card1 = styled.div`
    font-size: 1rem;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`

export const Content = styled.div`
    position: absolute;
    top: 0;
    color: #fff;
    padding-top: 80px;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 500px;
    }


`