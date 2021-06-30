
/*
 * @Description: 部门圆环
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-30 11:11:01
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-30 12:31:58
 */
import React, { PureComponent } from "react";
import Chart from "../../../utils/chart";
import { DepartCycleOptions } from "./options";

/** 部门圆环 */
class DepartCycle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: "canvas",
    };
  }

  render() {
    const { renderer } = this.state;
    const { departCycle } = this.props;
    return (
      <div
        style={{
          width: "5.375rem",
          height: "2.5rem",
        }}
      >
        {departCycle ? (
          <Chart
            renderer={renderer}
            option={DepartCycleOptions(departCycle)}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default DepartCycle;
