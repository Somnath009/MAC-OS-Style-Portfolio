import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const date = now.toLocaleDateString('en-US', {
        weekday: 'short',
        day: '2-digit',
        month: 'short'
      }).replace(',', '')
      
      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
      
      setDateTime(`${date} ${time}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {dateTime.replace(',', '')}
    </div>
  )
}

export default DateTime