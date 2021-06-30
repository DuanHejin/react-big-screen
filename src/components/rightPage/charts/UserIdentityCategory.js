 
/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-29 20:32:29
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-30 13:52:11
 */
import React, { PureComponent } from 'react';
import { CapsuleChart } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 单位
        unit: '',
        showValue: true,
        data: [],
      },
    };
  }
  render() {
    const { userIdentityCategory } = this.props;
    const config = {
      ...this.state.config,
      ...userIdentityCategory,
    };
    return (
      <div>
        {userIdentityCategory ? (
          <CapsuleChart
            config={config}
            style={{
              width: '5.85rem',
              height: '2.625rem',
              paddingRight: '20px',
            }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default UserSituation;
