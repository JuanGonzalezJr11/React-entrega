import './notification.css'
import { createContext, useState } from "react"

const Notification = ({msg, severity}) => {
    if(msg === '') return

    return (
      <div className={severity === 'success' ? 'div-Notification success' : 'div-Notification error'}>
        {msg}
      </div>
    )
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, msg) => {
        setMessage(msg)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification msg={message} svt={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}