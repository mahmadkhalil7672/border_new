import React from 'react'
import Hero from '../../Components/Hero/Hero'
import AIHero from '../../Components/AIComponent/AIComponent'
import VisionPartner from '../../Components/VisionPartner/VisionPartner'
import AIInnovation from '../../Components/AIInnovation/AIInnovation'
import AIIdeas from '../../Components/AIIdeas/AIIdeas'

function Home() {
  return (
    <div>
        <Hero/>
        <AIHero/>
        <VisionPartner/>
        <AIInnovation/>
        <AIIdeas/>
    </div>
  )
}

export default Home