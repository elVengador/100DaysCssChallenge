import React from 'react'
import styled from 'styled-components'

export const Frame = ({ style = {}, children = null }) => {
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

    return (
        <Frame className='frame' style={style}>
            <Center className='center' >
                {children}
            </Center>
        </Frame>
    )
}
