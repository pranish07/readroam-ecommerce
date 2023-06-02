import React from 'react'

export const Auth = () => {
  return (
    <div>
        <button onClick={()=>console.log(localStorage.getItem("encodedToken"))}>get Token</button>
    </div>
  )
}
