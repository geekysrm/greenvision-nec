import React, { Component } from "react";
import { List, Avatar, Button, Skeleton } from "antd";

const data = [
  {
    title: "Soumya Ranjan Mohanty",
    src:
      "https://media.licdn.com/dms/image/C5103AQEn8pk4flf7XQ/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=WTHHn2G4NmseyKvJ5vjgC3ZDc9koSHwluGbGBQ0nktA"
  },
  {
    title: "Amiya Kumar Tripathy",
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
  }
];

class LeaderBoard extends Component {
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
            LeaderBoard
          </div>
        </div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item style={{ color: "white !important" }}>
              <List.Item.Meta
                avatar={
                  <Avatar
                    size={64}
                    style={{ marginLeft: "5px" }}
                    src={item.src}
                  />
                }
                title={
                  <span style={{ color: "white", fontSize: "18px" }}>
                    <span>{item.title}</span>{" "}
                    {index === 0 && (
                      <span style={{ marginLeft: "4px", fontSize: "31px" }}>
                        {9640}
                      </span>
                    )}
                    {index === 1 && (
                      <span style={{ marginLeft: "24px", fontSize: "31px" }}>
                        {6600}
                      </span>
                    )}
                  </span>
                }
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default LeaderBoard;
