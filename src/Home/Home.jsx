import React, { useState } from 'react'
import styled from 'styled-components'
import { OneHundredCssChallenge } from '../challenges/Day1/OneHundredCssChallenge'
import { MenuIcon } from '../challenges/Day2/MenuIcon'
import { Pyramide } from '../challenges/Day3/Pyramide'
import { Loading } from '../challenges/Day4/Loading'
import { Statictics } from '../challenges/Day5/Statictics'

const challenges = [
    {
        name: '100CssChallenge',
        label: '1',
        component: <OneHundredCssChallenge />
    },
    {
        name: 'MenuIcon',
        label: '2',
        component: <MenuIcon />
    },
    {
        name: 'Pyramide',
        label: '3',
        component: <Pyramide />
    },
    {
        name: 'Loading',
        label: '4',
        component: <Loading />
    },
    {
        name: 'Statictics',
        label: '5',
        component: <Statictics />
    },
]

export const Home = () => {

    const HomeWrapper = styled.div`
        width: 100vw;
        height: 100vh;
        /* background-color: #363636; */
        background-color: #fff;
    `

    const HomeHeader = styled.header`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    const Title = styled.h1`
        color: #ebebeb;
        margin: 0px;
        text-align: center;
    `

    const Link = styled.a`
        color: #ebebeb;
        margin: auto;
        text-align: center;
    `

    const HomeViewer = styled.main`
        position: relative;
        width: 100vw;
        height: 420px;
    `

    const HomeControls = styled.div`
        display: flex;
        justify-content: center;
    `

    const Controls = styled.div`
        padding: 10px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(10,30px);
        grid-template-rows: repeat(10,30px);
        column-gap: 5px;
        row-gap: 5px;
        overflow-y: auto;
    `

    const HomeFooter = styled.footer`
        color: white;
        text-align: center;
    `

    const Control = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #0091ff;
        cursor: pointer;
        &:hover {
            background-color: #ff6a00;
        }
    `

    const [challengeSelected, setChallengeSelected] = useState(challenges[0]?.component)

    const processChallenge = Array(100)
        .fill({ name: 'unknown', component: null })
        .map((cur, idx) => ({ ...cur, label: idx + 1 }))
        .map((cur, idx) => challenges[idx] ? challenges[idx] : cur)

    return (
        <HomeWrapper>
            <HomeHeader>
                <Title>My solution 100 Css Challenge</Title>
                <Link href='https://100dayscss.com/'>100dayscss.com</Link>
            </HomeHeader>

            <HomeViewer>
                {challengeSelected}
            </HomeViewer>

            <HomeControls>
                <Controls>
                    {
                        processChallenge.map((cur, idx) => <Control
                            key={idx}
                            onClick={() => setChallengeSelected(cur.component)}
                            title={cur.name}>
                            {cur.label}
                        </Control>)
                    }
                </Controls>
            </HomeControls>

            <HomeFooter>
                by elVengador - {new Date().getFullYear()}
            </HomeFooter>
        </HomeWrapper>
    )
}
