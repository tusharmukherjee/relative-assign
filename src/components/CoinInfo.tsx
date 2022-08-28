import React from 'react'
import Trend from '../Logo/Trend'
import Card from './Card'
import Cardfour from './Cardfour'
import Cardone from './Cardone'
import Cardthree from './Cardthree'
import Cardtwo from './Cardtwo'

const CoinInfo = () => {
    return (
        <>
            <div id='background' className=' bg-background w-screen h-screen flex items-center'>
                <div className=' px-20 w-screen'>
                    <div className=' mb-8 flex flex-row items-center'>
                        <Trend />
                        <h6 className=' w-fit ml-2 text-info'>Trending Assets</h6>
                    </div>
                    <div className=' py-20 grid grid-flow-col place-content-left gap-16 overflow-x-scroll h-scrollbar'>
                        <Card />
                        <Cardone />
                        <Cardtwo />
                        <Cardthree />
                        <Cardfour />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinInfo