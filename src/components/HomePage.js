import React, { Component } from "react";
import imageUrlSample from "./RNIlogo.jpg";

const HomePage = () => {
  return (
    <>
      <div className=" container homePageContainer">
        <h1 className=" homePageHeadingM text-center mt-5 pt-5">REPUBLIC NEWS INDIA</h1>

        <div className="imageContainer">
          <h5 className="text-center mt-4 mb-4 homePageHeadingS">
            One of the most Trusted Indian News Broadcasting Company in the
            World
          </h5>

          <img
            className="text-center homePageImage"
            //   src={imageUrlSample}
            src={`${process.env.PUBLIC_URL}/assets/RNIlogo.jpg`}
            alt=""
          />
        </div>
      </div>

      <div className=" section2 ">
        <h4 className=" homePageHeadingSS">
          Our Trusted News Channels
        </h4>

        <div className="container">
          <div className="row" style={{ justifyContent: "space-around" }}>
            <div className="col   newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/TIE.png`}
                alt=""
              />
            </div>
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/HT.png`}
                alt=""
              />
            </div>
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/NDTV.png`}
                alt=""
              />
            </div>
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/TTOI.png`}
                alt=""
              />
            </div>
          {/* </div> */}

          {/* <div className="row" style={{ justifyContent: "space-around" }}> */}
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/NEI.png`}
                alt=""
              />
            </div>
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/TH.png`}
                alt=""
              />
            </div>
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/TG.png`}
                alt=""
              />
            </div>
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/BBC.png`}
                alt=""
              />
            </div>
            <div className="col  newsChannelLogoDiv">
              <img
                className="newsChannelLogo"
                src={`${process.env.PUBLIC_URL}/assets/NBT.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
   
     <footer>
         <div className="container">
             <div >
                 <img className="iconImages" src={`${process.env.PUBLIC_URL}/assets/TWTR.png`} alt="" />
             
                 <img className="iconImages" src={`${process.env.PUBLIC_URL}/assets/FB.png`} alt="" />
             
                 <img className="iconImages" src={`${process.env.PUBLIC_URL}/assets/YT.png`} alt="" />
             
                 <img className="iconImages" src={`${process.env.PUBLIC_URL}/assets/IG.png`} alt="" />
             </div>
         </div>
         <span>Copyright Since 2021, All right reserved</span>
     </footer>
    </>
  );
};

export default HomePage;
