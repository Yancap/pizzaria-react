import React from 'react'

export const Btn = ({name, link, classType}) => {
  return (
    <div className={`btn ${classType}`}>
      <a href={link}>{name}</a>
    </div>
  )
}
