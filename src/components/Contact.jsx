import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <h2>Find Our Office</h2>
            <p>We’re based in Ilford — serving universities and offices nearby.</p>
            <div style={{ marginTop: "20px" }}>
                <iframe
                    title="Ilford Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19853.149545122282!2d0.06203489433632173!3d51.559065969607236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ad8954cbdf55%3A0xd6e258e8cc2a1b60!2sIlford!5e0!3m2!1sen!2suk!4v1700000000000"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
