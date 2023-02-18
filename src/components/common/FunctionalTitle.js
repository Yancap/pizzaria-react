import React from 'react'

export const FunctionalTitle = ({name, classType}) => {
  return (
    <div className={classType}>
        <h3>{name}</h3>
    </div>
  )
}
