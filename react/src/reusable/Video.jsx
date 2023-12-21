import React from 'react'
import psOne from '../assets/poster/im1.png'
import psTwo from '../assets/poster/im2.jpg'

export default function Video() {
  return (
    <>
        <div className='video' style={{ maxWidth:'280px',maxHeight:'500px',border:'1px solid #63636360',borderRadius:'6px',overflow:'hidden' }}>
           <a href="#">
             {/* Video Poster or Image */}
             <div style={{ maxHeight:'380px',overflow:'hidden' }}>
                {/* <video poster='' src="" style={{ width:'100%' }}>
                    <source media="(min-width: )" srcset="" />
                </video> */}
                <picture>
                    <img style={{ width:'100%',display:'block',height:'100%' }} src={psOne} alt={psOne} />
                </picture>
            </div>
            {/* Video Details*/}
            <div style={{ padding:'10px' }}>
                {/* Movie Title */}
                <h2  style={{ textAlign:'center',fontWeight:'900',fontSize:'24px',color:'#101010', }}>The Dark Night</h2>
                <h6  style={{ textAlign:'center',fontWeight:'600',fontSize:'14px',color:'#e44717',fontFamily: `'Inter Tight', sans-serif`,padding:'10px 0' }}>2023</h6>
            </div>
           </a>
        </div>
    </>
  )
}
