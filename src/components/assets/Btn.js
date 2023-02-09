import React from 'react'

export const Btn = ({name, link, classBtn, classAnchor}) => {
  return (
    <div className={`btn btn-primary  ${classBtn}`}>
      <a href={link} className={classAnchor}>{name}</a>
    </div>
  )
}
