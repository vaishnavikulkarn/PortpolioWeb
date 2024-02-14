import React from 'react'
import img from '../HomePage/Profile.jpg'
import img2 from '../HomePage/frame.png'
import { Link } from 'react-router-dom'
const QrCode = () => {
  return (
    <React.Fragment>

      <section className="qr-code p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-1">
              <button className='btn btn-dark mt-3 '><Link to={'/'}><i className='fa fa-close' style={{color:'orange'}}/></Link></button>
            </div>
            <div className="col-md-6 mx-auto ">
              <div className="card">
                <div className="card-body bg-dark">
                  <center>
                  <img src={img} alt="" className='image2'/>
                  <h3 className='text-warning p-2'>Vaishnavi Kulkarni</h3>
                  <h5 className='text-warning'>Full-Stack Web Developer</h5>
                  <img src={img2} alt="" className='mt-4'/>
                  </center>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </React.Fragment>
  )
}

export default QrCode
