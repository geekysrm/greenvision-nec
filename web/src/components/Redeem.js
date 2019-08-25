import React, { Component } from "react";

import { Icon } from "antd";

class Redeem extends Component {
  render() {
    return (
      <div>
        <div
          className="app-header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div
            className="arrow"
            style={{ paddingLeft: "5px" }}
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            <Icon type="left" />
          </div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <div className="header-text">GreenVision</div>
          </div>
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
          <div className="redeem-card">
            <img
              class="bg-img"
              src="http://www.smartpayonline.in/wp-content/uploads/2017/12/bill-1696.jpg"
            />
            <div className="redeem-card-text">Pay Household Bill</div>
          </div>
          <div className="redeem-card">
            <img
              class="bg-img"
              src="data:image/jpeg;base64,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"
            />
            <div className="redeem-card-text">
              Government will plant 1 real tree for every 100 Earth Points
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Redeem;
