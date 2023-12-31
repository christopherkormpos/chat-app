import React from 'react'

const Message = () => {
  return (
    <div className='message'>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1690789658239-b22677655e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" alt="" />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1690789658239-b22677655e96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80" alt="" />
      </div>
    </div>
  )
}

export default Message
