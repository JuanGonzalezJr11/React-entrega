import './Button.css'

const Button = ({label, background, color, action}) => {
    return  <button
            className='Button'
            style={{
                background: background,
                color: color
            }}
            onClick={action}
            >
                {label}
            </button>
}

export default Button