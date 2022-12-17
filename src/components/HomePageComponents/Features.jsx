import React from 'react'

function Features() {
  return (
    <>
        <section id="features">
      <div className="row scroll-fix">
        <div className="col-lg-4 text-centered " data-aos="zoom-in-right" data-aos-duration="1200">
          <i className="bi bi-check-circle-fill"></i>
          <h3>Easy to use.</h3>
          <p>So easy to use, all you have to do is copy and paste</p>
        </div>
        <div className="col-lg-4 text-centered " data-aos="zoom-in-up" data-aos-duration="1200">
          <i className="bi bi-record-circle"></i>
          <h3>Secured</h3>
          <p>We ensure that your code remains secured and Safe</p>
        </div>
        <div className="col-lg-4 text-centered " data-aos="zoom-in-left" data-aos-duration="1200">
          <i className="bi bi-suit-heart-fill"></i>
          <h3>Trusted</h3>
          <p>There are many fellow coders online you can search their codes too</p>
        </div>
      </div>
      
    </section>

    </>
  )
}

export default Features