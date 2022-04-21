import React from 'react'
import './Loading.css'

import { Frame } from '../../Frame/Frame'

export const Loading = () => {
    return (
        <Frame style={{ background: '#E56262' }}>
            <div className="loading">
                <div className="circle-lg"></div>
                <div className="circle-md"></div>
                <div className="circle-sm"></div>
            </div>
        </Frame>
    )
}
