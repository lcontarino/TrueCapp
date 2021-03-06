import { useState, createContext, useContext } from "react";

import swal from 'sweetalert'

const SwalNotification = ({swaltitle,swallmessage, swalseverity}) => {
  swal({
    title : swaltitle,
    text  : swallmessage,
    icon  : swalseverity,
    button: "Accept"
})
}

const Notification = ({ message, severity }) => {

    const notificationStyles = {
      position: 'absolute',
      top: 100,
      right: 5,
      width: 'auto',
      height: 'auto',
      backgroundColor: severity === 'error' ? 'red' : 'green',
      padding: '10px 20px 10px 20px',
      color: 'white',
      borderRadius: 5
    }

    if(message === '') {
        return 
    }
  
    return (
      <div style={notificationStyles}>
        { message }
      </div>
    )
  }

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }   

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}