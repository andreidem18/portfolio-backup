const ContactMe = () => {
    return(
        <section className="contact-me">
            <h2 className="title">Contact me</h2>
            <div className="col-6">
                <form action="">
                    <div className="input-field">
                        <input type="text" required/>
                        <label>Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" required/>
                        <label>Email</label>
                    </div>
                    <div className="input-field-ta">
                        <textarea rows="3" type="text" required/>
                        <label>Type a message</label>
                    </div>                                        
                    <button>Submit</button>
                </form>
            </div>
            <div className="col-6 info">
                <h2>Contact me</h2>
                <div>
                    <i className="fas fa-envelope"></i>
                </div>
                <h3 className="subtitle-2">Mail me</h3>
                <p>andres.david.mm@hotmail.com</p>

                <div>
                    <i className="fas fa-phone"></i>
                </div>
                <h3 className="subtitle-2">Call me</h3>
                <p>315 785 0061</p>
            </div>
        </section>
    )
}
export default ContactMe;