import React from "react";
import "../../home/footer/footer.css"
import FOOTERBRAND from "../../../images/footer/footer-brand.png"
import DOWNLOAD from "../../../images/footer/download.png"

function Footer(){
    return(
        <div className="myFooter">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <img src={FOOTERBRAND} />
                    <br></br>
                    <br></br>
                    <img src={DOWNLOAD} />
                </div>
                <div className="col-md-3">
                    <h5>Perusahaan</h5>
                    <br></br>
                    <h6>tentang kami</h6>
                    <h6>Blog</h6>
                    <h6>Bermitra dengan kami</h6>

                </div>
                <div className="col-md-3">
                <h5>Bantuan</h5>
                    <br></br>
                    <h6>Customer Service</h6>
                    <h6>FAQs</h6>
                    <h6>Privacy & Policy</h6>

                </div>
                <div className="col-md-3">
                <h5>Kontak</h5>
                    <br></br>
                    <h6>+62 812 3456 7890</h6>
                    <h6>MyMoney@mail.com</h6>
                    <h6>Bandung Jl.Sudirman 018</h6>

                </div>
            </div>   
        </div>
    )
}
export default Footer;