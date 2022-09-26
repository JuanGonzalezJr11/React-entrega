import './Loading.css'
import logo from './assets/Exposure_Round_Logo_Small.png'

const Loading = () => {
    return (
        <div className='div-Loading'>
            <h2>Loading...</h2>
            <img src={logo} alt='Loading...'/>
        </div>
    )
}

export default Loading