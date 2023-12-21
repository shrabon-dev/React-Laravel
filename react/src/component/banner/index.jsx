import React from 'react';
import banner from '../../assets/banner2.jpg';
import logo from '../../assets/light-logo.png'
import { CiSearch } from "react-icons/ci";

export default function Banner() {
    let logoStyle = {
        width:'200px',
        display:'block'
    }
    let aStyle = {
        fontSize:'20px',
        fontWight:'200',
        padding:'1px 20px',
        textTransform:'uppercase'
    }
    let searchStyle = {
        width: '550px',
        minWidth: '300px',
        fontSize: '24px',
        fontWeight: '400',
        color: '#e44717',
        borderRadius: '6px',
        background: '#ffffff',
        border:'none',
        padding:'10px 20px',
        margin:'0 auto'

    }
  return (
    <>
        <section style={{ backgroundImage:`url(${banner})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'100vh',width:'100wh',objectFit:'cover',}}>
            <nav style={{ position:'fixed',top:'0',width:'100%' }}>
                <div className='container d_flex justify_space_between align_item_center'>
                    {/* Logo Start */}
                    <div className="logo">
                        <picture>
                            <img style={logoStyle} src={logo} alt="vplay logo" />
                        </picture>
                    </div>
                    <ul className='d_flex'>
                        <li><a style={aStyle} href="#">Home</a></li>
                        <li><a style={aStyle} href="#">TV</a></li>
                        <li><a style={aStyle} href="#">Premium</a></li>
                        <li><a style={aStyle} href="#">Seriese</a></li>
                    </ul>
                    {/* Login & Signup */}
                    <div className="btn">
                        <a style={{ marginRight:'10px',background:'linear-gradient(00deg, #054950 10%, #129aa8 81%)',padding:'10px 20px',borderRadius:'6px'}} href="#">Login</a>
                        <a style={{ background:'linear-gradient(0deg, #8e2100 10%, #e44717 81%)',padding:'10px 20px',borderRadius:'6px' }} href="#">Sign up</a>
                    </div>
                </div>
            </nav>
            <div className='container'>
                {/* Banner Content Start */}
                    <div style={{ paddingTop:`max(250px)` }}>
                    <h2 style={{ textAlign:'center',fontWeight:'700',fontSize:'52px',color:'#ffffff',fontFamily: `'Inter Tight', sans-serif` }}> Unlimited movies, TV shows, and more</h2>
                    <h6 style={{ textAlign:'center',fontWeight:'900',fontSize:'24px',padding:'10px 0',color:'#e44717', }}>Watch anywhere. Cancel anytime.</h6>
                    <p style={{ textAlign:'center',fontWeight:'600',fontSize:'14px',color:'#DE9437',fontFamily: `'Inter Tight', sans-serif` }}>Ready to watch? Enter your email to create or restart your membership.</p>
                    {/* Search Option Start */}
                        <div style={{ textAlign:'center',paddingTop:'50px' }}>
                            <input type='text' inputMode='search' style={searchStyle}/>
                            <button style={{ background:'linear-gradient(0deg, #8e2100 10%, #e44717 81%)',padding:'14px 20px',borderRadius:'6px',maxWidth:'140px',border:'none',display:'inline-flex',alignItems:'center',justifyContent:'center' }}><CiSearch style={{ display:'inline-block' }}/> Search</button>
                        </div>
                    {/* Search Option End */}
                    </div>
                {/* Banner Content End */}
            </div>
        </section>
    </>
  )
}
