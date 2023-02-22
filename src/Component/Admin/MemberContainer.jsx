

import React from 'react'

const MemberContainer = ({member}) => {
  return (
    <div className='member__container'>
        <img src={member.image} alt={`${member.name}`} className="member_image"/>
        <div>{member.name}</div>
    </div>
  )
}

export default MemberContainer