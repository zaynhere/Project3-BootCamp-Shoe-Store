import React from 'react'
import './Footer.css'

const Footer = () => {

    const emg = 'https://cdn.shopify.com/s/files/1/1241/4530/t/11/assets/logo-peta_200x.png?v=8207845700407246785'
    return (
        <div className="footer">
            <div className="box1">
                <h3>We are unisex, we are vegans,</h3>
                <h3>We are #dothefuture</h3>
                <br />
                <h2>Currency EUR | English</h2>
                <br />
                <img src={emg} />
            </div>
            <div className="box2">
                <div className="box3">
                    <h5>All about your order</h5>
                    <p>Shipments</p>
                    <p>Exchange & Returns</p>
                    <p>Size Chart</p>
                    <p>FAQ</p>
                </div>
                <div className="box4">
                    <h5>All about us :)</h5>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Dress Your Projects</p>
                    <p>Design Process</p>
                    <p>Official Stores</p>
                    <p>Legal</p>
                </div>
                <div className="box5">
                    <p> A project from Bootcamp 2020 by Sir Zia Khan, 2020</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;