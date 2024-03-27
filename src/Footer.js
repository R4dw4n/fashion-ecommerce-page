import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

// import '../App.css'

function Footer() {
  return (
    <div className="all-footer">
        <div className="footer-container">
        <div className="widget">
            <h4 className="widget-title">
                QUICK LINKS
            </h4>

            <ul className="footer-links-list">
                <li className="footer-item">
                    <Link to='/' className="footer-link quick">Home</Link>
                </li>

                <li className="footer-item">
                    <Link to='/about' className="footer-link quick">About</Link>
                </li>

                <li className="footer-item">
                    <Link to='/products' className="footer-link quick">Products</Link>
                </li>

                <li className="footer-item">
                    <Link to='/about' className="footer-link quick">FAQ</Link>
                </li>
            </ul>
        </div>

        <div className="widget">
            <h4 className="widget-title">
                STORE INFO
            </h4>

            <ul className="footer-links-list">
                <li className="footer-item">
                    <Link to='/' className="footer-link"><i className="material-icons">&#xe0c8;</i>Syria</Link>
                </li>

                <li className="footer-item">
                    <Link to='/' className="footer-link"><i className="fas fa-mobile-alt" /> +963 900 000 000</Link>
                </li>

                <li className="footer-item">
                    <Link to='/' className="footer-link"><i className="material-icons">&#xe0be;</i> support@cateyes.com</Link>
                </li>

            </ul>
        </div>

        <div className="widget">
            <h4 className="widget-title">
                SOCIAL MEDIA
            </h4>

            <ul className="footer-links-list">
                <li className="footer-item">
                    <Link to='/' className="footer-link"><i className="	fab fa-facebook"/>Facebook</Link>
                </li>

                <li className="footer-item">
                    <Link to='/' className="footer-link"><i className="fab fa-twitter" />Twitter</Link>
                </li>

                <li className="footer-item">
                    <Link to='/' className="footer-link"><i className="	fab fa-instagram"/>Instagram</Link>
                </li>
                
            </ul>
        </div>
        </div>

        <div className="footer-bottom">
            <p className="copyright">
                © 2022 All right reserved by Radwan Al-Kheder
            </p>
        </div>

    </div>
  );
}

export default Footer;
