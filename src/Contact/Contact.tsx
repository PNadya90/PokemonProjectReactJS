import './Contact.scss';
function Contact() {
  return (
<div className="contactUs-container">
    <div className="head-area">
        <h2>Contact Us</h2>
    </div>
    <div className="imgBox">
        <img className='imgContctUs' src="forContact.jpg"/>
    </div>
    <div className="contats-area">
        <h3>Call us:</h3>
        <p>Phone: +123456789 </p>
        <h3>Email us:</h3>
        <p>E-mail: 12345648@gmail.com</p>
    </div>
</div>
  )
}

export default Contact
