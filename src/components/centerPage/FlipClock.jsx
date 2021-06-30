/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-30 14:04:17
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-30 14:57:19
 */
import React, { PureComponent } from "react";
import Clock from "react-flip-clock";

export default class FlipClcok extends PureComponent {
  render() {
    return (
      <div
        style={{
          width: "10.625rem",
          height: "8.125rem",
          textAlign: "center",
          position: "absolute",
          color: "#c0c9d2",
        }}
      >
        <div style={{ margin: "30px 0" }}>
          <span style={{ fontSize: "0.225rem" }}>
            云管家-采销域：<span style={{ color: "#32c5e9" }}>2021.05.06～2021.06.06</span>
          </span>
        </div>
        <div
          style={{
            fontSize: "0.625rem",
            color: "#c0c9d2",
            marginTop: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          距离发布剩余：
          <span
            style={{
              fontSize: "1rem",
              color: "#c23532",
              // textShadow: "1px 3px 2px #e4e3e3",
            }}
          >
            12天
          </span>
        </div>
        <div
          style={{ color: "#c0c9d2", fontSize: "0.625rem", marginTop: "1rem" }}
        >
          <div style={{ margin: "20px 0" }}>
            <span style={{}}>
              里程碑：<span style={{ color: "#c23532" }}>未达成</span>
            </span>
          </div>
          <div style={{ margin: "20px 0" }}>
            <span>
              未达成任务数：<span style={{ color: "#c23532" }}>3</span>
            </span>
          </div>
          <div style={{ margin: "60px 0" }}>
            <span>
              智能预测：<span style={{ color: "#ffda5c" }}>可能延后1天</span>
            </span>
          </div>
        </div>
        {/* <Clock></Clock> */}
      </div>
    );
  }
}
