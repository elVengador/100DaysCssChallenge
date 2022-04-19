import React from 'react'
import styled from 'styled-components'

export const OneHundredCssChallenge = () => {
    const Frame = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    margin-top: -200px;
    margin-left: -200px;
    border-radius: 2px;
    box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
    overflow: hidden;
    background: #fff;
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: linear-gradient(
        45deg,
        hsl(246deg 48% 42%) 0%,
        hsl(235deg 37% 48%) 20%,
        hsl(221deg 38% 51%) 40%,
        hsl(207deg 42% 53%) 60%,
        hsl(194deg 47% 55%) 80%,
        hsl(182deg 54% 55%) 100%
        );
    `
    const Center = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `
    const Number = styled.div`
        width: 200px;
        height: 100px;
        position: relative;
        /* border:  solid 1px white; */
    `
    const OneOne = styled.div`
        width: 20px;
        height: 40px;
        position: absolute;
        transform:  translateX(-16px) rotate(50deg);
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0px 0px 4px #666;
    `

    const OneTwo = styled.div`
        width: 23px;
        height: 100px;
        position: absolute;
        transform: translate(0px);
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 0px 0px 4px #666;
        z-index: 10;
    `

    const ZeroOne = styled.div`
        width: 100px;
        height: 100px;
        position: absolute;
        transform: translateX(15px);
        border: solid 25px #fff;
        border-radius: 50%;
        box-shadow: 0px 0px 4px #666;
        z-index: 9;
    `

    const ZeroTwo = styled.div`
        width: 100px;
        height: 100px;
        position: absolute;
        transform: translateX(100px);
        border: solid 25px #fff;
        border-radius: 50%;
        box-shadow: 0px 0px 4px #666;
        z-index: 8;
    `
    const MediumText = styled.div`
        color: #fff;
        font-size: 75px;
        font-weight: 900;
        text-size-adjust: 60px;
        line-height: 0.78;

    `
    const SmallText = styled.div`
        color: #fff;
        font-size: 25px;
        font-weight: 900;
    `


    return (
        <Frame>
            <Center>
                <Number>
                    <OneOne />
                    <OneTwo />
                    <ZeroOne />
                    <ZeroTwo />
                </Number>
                <MediumText>DAYS</MediumText>
                <SmallText>CSS CHALLENGE</SmallText>
            </Center>
        </Frame>
    )
}
