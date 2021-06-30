 
/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-29 20:32:29
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-30 14:51:19
 */
import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { mapOptions } from './options';

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { mapData } = this.props;
    return (
      <div
        style={{
          width: '10.625rem',
          height: '8.125rem',
          opacity: 0.6,
        }}>
          {
            mapData?<Chart renderer={renderer} option={mapOptions(mapData)} />:''
          }
      </div>
    );
  }
}

export default Map;
