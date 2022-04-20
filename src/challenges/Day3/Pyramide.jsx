import React from 'react'
import './Pyramide.css'


export const Pyramide = () => {
    return (
        <div className='frame pyramide'>
            <div className='center'>
                <div className="circle">
                    <div className="circle--sky"></div>
                    <div className="circle--sun">
                        <div className="sun"></div>
                    </div>
                    <div className="circle--pyramide-a"></div>
                    <div className="circle--pyramide-b"></div>
                    <div className="circle--pyramide-shadow"></div>
                    <div className="circle--land"></div>
                </div>
            </div>
        </div>
    )
}
