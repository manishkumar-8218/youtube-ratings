import React from 'react'
import { Carousel } from 'react-carousel3';
import img from '../images/2023.png'

const style = {
  width: 297,
  height: 296,
};

function home() {
  return (
    <div className='flex flex-row w-screen h-screen bg-orange-300'>
      <div className=' w-1/3'></div>

      <div className='w-2/3 flex justify-center items-center '>
        <Carousel  height={600} width={600}  yOrigin={42} yRadius={48} autoPlay={true}>
          <div key={1} style={style}>
            <img alt="" src={img} />
          </div>
          <div key={2} style={style}>
            <img alt="" src={img} />
          </div>
          <div key={3} style={style}>
            <img alt="" src={img} />
          </div>
          <div key={4} style={style}>
            <img alt="" src={img} />
          </div>
          <div key={5} style={style}>
            <img alt="" src={img} />
          </div>
          <div key={6} style={style}>
            <img alt="" src={img} />
          </div>
        </Carousel>

      </div>
    </div>
  )
}

export default home