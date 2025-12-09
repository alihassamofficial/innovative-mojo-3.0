import LeftSlide from './LeftSlide'
import RightSide from './RightSide'

const Hero = () => {
  return (
    <div className='max-w-[1220px] mx-auto md:py-20 py-10 flex flex-col md:flex-row gap-2 '>
       <div className="w-full md:hidden block">
      <RightSide/>
      </div>
      <LeftSlide/>
      <div className="w-full md:block hidden">
      <RightSide/>
      </div>
    </div>
  )
}

export default Hero