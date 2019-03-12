import React from "react";

function ContactSection() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mt-0 large-heading">Let's Get In Touch!</h2>
            <hr className="divider my-4" />
             <p className="text-muted mb-5 secondary-text">
              Ready to start your next project with us? Give us a call or send
              us an email and we will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fas fa-phone fa-3x mb-3 text-muted" />
            <div>9810257340</div>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fas fa-envelope fa-3x mb-3 text-muted" />

            <a className="d-block secondary-text" href="mailto:prince.cenation@gmail.com">
              prince.cenation@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
