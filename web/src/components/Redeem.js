import React, { Component } from "react";

class Redeem extends Component {
  render() {
    return (
      <div>
        <div className="app-header">
          <div className="header-text">GreenVision</div>
        </div>

        <div>
          <div
            className="header-text"
            style={{ color: "white", textAlign: "center", paddingTop: "10px" }}
          >
            Redeem Earth Points
          </div>
        </div>

        <div className="redeem-cards">
          <div className="redeem-card">
            <img
              class="bg-img"
              src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/12/13/Photos/Processed/rupee-dollar-kth--621x414@LiveMint.jpg"
            />
            <div className="redeem-card-text">Save Upto 5% in Income Taxes</div>
          </div>
          <div className="redeem-card">
            <img
              class="bg-img"
              src="https://images.squarespace-cdn.com/content/v1/5c06eea41aef1d941dd84719/1560370369382-M1AXEAFXPFQAABL2D73H/ke17ZwdGBToddI8pDm48kLwv2toA3EZK9muHmpTBk3hZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyGWgAmJJ6uPnVo5_Rik-IqKHuR0-mInAzI2B3sHfuoKsiU1t9KYDNktADgovQnvEg/685987201c28d78.jpg?format=1500w"
            />
            <div className="redeem-card-text">
              Donate earned points to charity
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Redeem;
