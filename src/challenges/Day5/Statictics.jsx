import React from 'react'
import './Statictics.css'
import SVG from 'react-inlinesvg';

import { Frame } from '../../Frame/Frame'

export const Statictics = () => {
    return (
        <Frame style={{ background: '#42A7A1' }}>
            <div className="statictics">
                <div className="statictics--header">
                    <h1 className='info-lg left'>WEEKLY REPORT</h1>
                    <span className='info-sm right'>Revenue</span>
                    <span className='info-sm left'>01. Feb - 07. Feb</span>
                    <span className='info-lg right'>$ 3621.79</span>
                </div>
                <div className="statictics--body">
                    <div className="leyends">
                        <div className='leyend-blue'>Purchases</div>
                        <div className='leyend-red'>Views</div>
                    </div>
                    <div className="chart">
                        <SVG src="red-line.svg" className="chart-red">Favorite Icon</SVG>
                        <SVG src="blue-line.svg" className="chart-blue">Favorite Icon</SVG>
                        <hr className="top-line" />
                        <hr className="middle-line" />
                        <hr className="bottom-line" />
                        <div className="days">
                            <span>MON</span>
                            <span>TUE</span>
                            <span>WED</span>
                            <span>THU</span>
                            <span>FRI</span>
                            <span>SAT</span>
                            <span>SUN</span>
                        </div>
                    </div>
                    {/* <img src="/chart.svg" alt="" className='line' /> */}
                </div>
            </div>
        </Frame>
    )
}
