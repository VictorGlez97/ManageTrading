import TradeIcon from '../../assets/img/trade.png'

const Start = () => {
    return (
        <div className='flex flex-column justify-content-center'>
            <img alt='logo' src={ TradeIcon } height='35' onClick={() => { navigate('/') }}></img>
        </div>
    )
}

export default Start;