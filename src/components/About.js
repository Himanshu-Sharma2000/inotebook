import React from 'react'


const About = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-evenly my-2 " style={{ fontFamily: "'Edu SA Beginner', cursive" }}>
        <div className=" d-flex container mx-1 text-center mb-3">
          <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon.png" className="img-thumbnail ms-3 rounded-circle border border-info" alt="..." width="100" height="100" />
          <div className="mx-3">
            <h3 className='mt-3' style={{ color: "#05053e" }}>Empowering Students </h3>
            <p className='my-2'>A website where you can safely and securely add, modify, upload, and delete your notes and information without being bothered.</p>
          </div>
        </div>

        <div className="container d-flex mx-1 text-center mb-3">
          <img src="https://img.freepik.com/premium-vector/process-business-illustration-design-vector-illustration_8499-5037.jpg?w=740" className="img ms-3 rounded-circle border border-info mt-5" alt="..." width="100" height="100" />
          <div className="mx-3">
            <h3 className='mt-3'style={{ color: "#05053e" }}>Make Something Awesome</h3>
            <p className='my-2'> iNotebook was created to alleviate the stress of writing everything down in a notebook:( Therefore, we created an online web platform where you may safely and securely make, update, upload, and delete your notes/information without being bothered. Additionally, you have access to your notes at any time and from anywhere in the globe. Don't forget to make a note, then, as everything you create is crucial.</p>
          </div>

        </div>

        <div className="container d-flex mx-1 text-center">
          <img src="https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?size=626&ext=jpg&ga=GA1.2.637354507.1690955929&semt=sph" className="img ms-3 rounded-circle border border-info mt-4" alt="..." width="100" height="100" />
          <div  className="mx-3">
            <h3 className='mt-3'style={{ color: "#05053e" }}>Powering the Internet's Visuals</h3>
            <p className='my-2'>how did we begin? The idea was basic. iNotebook was created as a result of the stress of writing everything down in a notepad. a website where you may safely and securely make, modify, post, and remove notes and information without being disturbed</p>
          </div>

        </div>



      </div>



    </>
  )
}

export default About