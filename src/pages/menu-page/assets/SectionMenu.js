import React from 'react'

export const SectionMenu = ({subtitle, children}) => {
  return (
    <div>
        <div>
            <p>{subtitle}</p>
        </div>
        <div>
            <div>
                {children[0]}
            </div>
            <div>
                {children[1]}
            </div>
            <div>
                {children[2]}
            </div>
        </div>
    </div>
  )
}
