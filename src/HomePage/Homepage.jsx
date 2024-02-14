import React from 'react'
import img from '../HomePage/Profile.jpg'
import { Link } from 'react-router-dom'
const Homepage = () => {

  return (
    <React.Fragment>
        <section className="portpolio p-5">
         <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-body bg-dark  ">
                 <div className="col-md-4">
                  <img src={img} alt="" className='image'/>
                 </div>
                 <div className="col-md-7">
                  <h3 className='text-warning'>Vaishnavi kulkarni</h3>
                  <h4 className='text-warning'>Full-Stack java Dev</h4>
                  <button className='btn btn-warning me-2 '><i className='fa fa-mobile'/></button>
                  <button className='btn btn-warning me-2 '><Link to={'https://mail.google.com/mail/u/0/#inbox'}><i className='fa fa-envelope' style={{color:'black'}}/></Link></button>
                  <button className='btn btn-warning'><Link to={'https://maps.app.goo.gl/smGEkoCZEjsiX5Me8'}><i className='fa fa-map-marker' style={{color:'black'}}/></Link></button>
                 </div>
                </div>
              </div>
            </div>
          </div>
         </div>
        </section>

        <section className='About'>
         <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto ">
              <div className="card">
                <div className="card-body bg-dark">
                  <h2 className='text-warning text-center '>About Me</h2>
                  <p className='text-warning text-center '>Hi. Vaishnavi this side from Qspiders,Wakad. As i am a fresher and currenty pursuing Full-Stack web development course. 
                  Seeking a job where I can challenge my potential, put my skills to good use and grow my career exponentially.</p>
                </div>
              </div>
            </div>
          </div>
         </div>
        </section>
        
        
        <section className='Contactus'>
          <div className="container p-5">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body bg-dark">
                   <h2 className='text-warning'><i className='fa fa-mobile me-2 '/>Contact Us</h2>
                   <p className='text-white'>-----------------------------------------------------</p>
                    <ul className='list-group text-decoration-none  '>
                      <li className='list-group-items list-group-item-action text-decoration-none'>
                        <h3 className='text-warning'>Call Us</h3>
                        <span className='text-white'>8378822142</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        <h3 className='text-warning'>Email</h3>
                        <span className='text-white'>vaishnavikulkarni124@gmail.com</span>
                      </li>
                      <li className='list-group-items list-group-item-action'>
                        <h3 className='text-warning'>Address</h3>
                        <span className='text-white'>Adarsh nagar,Hinjewadi,pune.</span>
                      </li>
                    </ul>
                  <button className='btn btn-warning my-3'><Link to={'https://maps.app.goo.gl/smGEkoCZEjsiX5Me8'}><i className='fa fa-location-arrow me-1  ' style={{color:'black'}}/></Link>Direction</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>


        <section className='Find-Us'>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                  <div className="card">
                    <div className="card-body bg-dark  ">
                       <h2 className='text-warning text-center '>Find Me Here</h2>
                       <p className='text-white'>--------------------------------------------------------</p>
                       <p className="h3 text-warning "><Link to={'https://www.linkedin.com/in/vaishnavi-kulkarni-ab0274210/'}> < i className="fab fa-linkedin-in fa-2x me-5" style={{backgroundColor: 'white',borderRadius:'10%'}}/></Link>LinkedIn</p>
                  </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className='insta p-4 '>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto ">
                <div className="card">
                  <div className="card-body bg-dark ">
                   <p className="h3 text-warning "><Link to={'https://www.instagram.com/vaish_kulkarni_/'}><i className='fab fa-instagram fa-2x me-5 ' style={{backgroundColor:'white',color:'hotpink'}}/></Link>Instagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='qrcode'>
          <div className="container">
            <div className="row">
              <div className="col-md-1">
                <div className="card">
                  <div className="card-body bg-black ">
                    <Link to={'/qrcode'} className='btn btn=warning text-center  '><i className='fa fa-qrcode ' style={{color:'orange'}}/></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
                <div className="card">
                  <div className="card-body bg-black ">
                    <Link to={'/qrcode'} className='btn btn-warning '><i className='fa fa-upload ' style={{color:'black'}}/></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    </React.Fragment>
  )
}

export default Homepage
