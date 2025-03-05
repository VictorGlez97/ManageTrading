import TradeIcon from '../../assets/img/trade.png'

const Start = () => {
    return (
        <>
            <img alt='logo' src={ TradeIcon } height='45' onClick={() => { navigate('/') }}></img>
        </>
    )
}

export default Start;