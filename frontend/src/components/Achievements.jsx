import React from 'react'
import Title from './Title'
import AchievementDetails from './AchievementDetails'

const Achievements = () => {
  return (
    <div>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'OUR'} text2={'ACHIEVEMENTS'}/>
      </div>
      <AchievementDetails />
    </div>
  )
}

export default Achievements