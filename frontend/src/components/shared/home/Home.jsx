import React from 'react'
import HomeTitle from './HomeTitle'
import Text from './Text'

function Home() {
  return (
    <>
    <div className="flex mt-4 justify-center items-center ">

      <div className="border-white	border-2 max-w-md p-3 rounded-xl">

        <HomeTitle/>
        <Text/>
      </div>
    </div>
    </>
  )
}

export default Home