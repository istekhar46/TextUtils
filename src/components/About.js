import React from 'react'

export default function About(props) {


  let myStyle = {
    color: props.Mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.Mode === 'dark' ? '#100e24' : 'white',
  }

  let myStyleBtn = {
    color: props.Mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.Mode === 'dark' ? '#042743' : 'white',
    border: 'solid 0.01px',
    borderColor: 'dark' ? 'white' : 'black'
  }

  return (

    <div className="accordion my-3" id="accordionExample">
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne" style={myStyle}>
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyleBtn}>
            <strong>Analyze your text</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
            Welcome to TextUtility, a one-stop solution for all your text formatting needs. Our site allows you to effortlessly transform your text into lower or upper case, count the number of words and characters, and remove any unnecessary spaces from your input.

            Whether you're looking to streamline your writing process or simply clean up your text, TextUtility has got you covered. With our user-friendly interface, you can quickly and easily manipulate your text to suit your specific needs.

            Say goodbye to the hassle of manual formatting and join the thousands of satisfied users who rely on TextUtility to get the job done quickly and accurately. Try it out for yourself today and experience the power of seamless text formatting!
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyleBtn}>
            <strong>Free to use</strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body" style={myStyle}>
          TextUtility is a free and easy-to-use online tool for text formatting. It allows you to convert text to lower or upper case, count the number of words and characters, and remove extra spaces from your input. With its simple and intuitive interface, TextUtility makes it easy for users to format their text without any hassle. Try it out for yourself and enjoy the convenience of this efficient and user-friendly tool!
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyleBtn}>
            <strong>Browser campatible</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body " style={myStyle}>
          TextUtility is designed to be highly compatible with different browsers and mobile devices, ensuring that you can access and use it on a wide range of devices. Whether you're using a desktop computer, laptop, tablet, or smartphone, you can easily access TextUtility on your web browser without any compatibility issues. So, no matter which device you use, you can rely on TextUtility to get the job done quickly and accurately.
          </div>
        </div>
      </div>
    </div>
  )
}
