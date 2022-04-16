import React, { Component } from 'react';

class Footer extends Component {
    render() { 
        return (
            <div>
                <div className="container-flued bg-dark text-light">
                    <div className="row d-flex yustify-content-between align-items-center p-3">
                        <div className="col-4">
                            <p>GET IN TOUCH</p>
                            <p><i className="fa-solid fa-envelope"></i> Khloud@gmail.com</p>
                            <p><i className="fa-solid fa-mobile-screen"></i> +20-100-9980-714</p>
                        </div>
                        <div className="col-4">
                            <button className="btn border border-light  text-light">CONTACT ME</button>
                        </div>
                        <div className="col-4">
                            <pre>
                                <i className="fa-brands fa-linkedin"></i>  <i className="fa-brands fa-facebook-f"></i>  <i className="fa-brands fa-twitter"></i>
                            </pre> 
                            <p>Copyright &copy; 2022 KR</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;