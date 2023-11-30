import React from 'react'

const Container = ({children,background=""}) => {
  return (
    <div className={`w-full px-12 flex justify-evenly  mx-auto ${background}`}>
       {children}
    </div>
  )
}

export default Container