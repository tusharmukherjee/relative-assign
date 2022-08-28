import Binance from '../Logo/Binance'
import Eth from '../Logo/Eth'
import Solana from '../Logo/Solana'
import SolBig from '../Logo/SolBig'

const Cardone = () => {
    return (
        <div className='z-20 w-fit box-border bg-gradient-to-t from-bordertop to-borderbottom rounded-2xl p-[1px] flex justify-center items-center font-Tomorrow font-semibold'>
            <div id='card' className=' z-20 flex justify-center h-80 w-64 rounded-2xl bg-backgrad backdrop-blur-backblur'>
                <div id='icon' className={` z-0 p-[7px] after:z-[-1] bg-background w-20 h-20 relative -top-[2.5rem] rounded-full border-b-[1px] border-borderbottom before:content-[''] before:h-[1.5rem] before:w-[1.5rem] before:absolute before:-left-[24%] before:top-[49.5%] before:rounded-tr-full before:shadow-round-tr before:border-t-[1px] before:border-t-borderbottom before:z-[-1]  after:content-[''] after:h-[1.5rem] after:w-[1.5rem] after:absolute after:-right-[24%] after:top-[49.5%] after:border-t-[1px] after:border-t-borderbottom after:rounded-tl-full after:shadow-round-tl `}>
                    <div className=' w-full h-full bg-gradient-to-t from-bordertop to-borderbottom rounded-full p-[1px]'>
                        <div className=' bg-gradient-to-t from-solpurple to-bitdark w-full h-full rounded-full z-30 flex justify-center items-center'>
                            <SolBig />
                        </div>
                    </div>
                </div>
                <div id='coin-info' className=' z-30 grid gap-2 absolute top-16 w-full px-8'>
                    <div className=' text-xs text-label'>Solana (SOL)</div>
                    <div className='  bg-background text-info flex justify-center items-center py-2 rounded-xl border-t-[1px] border-l-[1px] border-r-[1px] border-inborder'>
                        <p className=' text-sm'>
                            $32.83
                        </p>
                        <span className=' text-success absolute right-10 text-xs font-light'>
                            -12.32%
                        </span>
                    </div>
                    <div className=' text-xs text-label'>Price</div>
                    <div className=' bg-background text-info text-sm rounded-xl py-2 border-t-[1px] border-l-[1px] border-r-[1px] border-inborder'>$60,000</div>
                    <div className=' text-xs text-label'>tvl</div>
                    <div className=' flex flex-col justify-center items-center mt-1'>
                        <div className=' grid grid-flow-col gap-1 px-2 py-1 rounded-xl bg-background w-fit place-content-center'>
                            <Solana />
                            <Eth />
                            <Binance />
                        </div>
                        <p className=' text-xs text-label mt-1'>Popular pairs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardone