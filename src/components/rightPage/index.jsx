import { BorderBox13 } from "@jiaminghi/data-view-react";
import { connect } from "dva";
import React, { PureComponent } from "react";
import { ModuleTitle } from "../../style/globalStyledSet";
import DepartCycle from "./charts/DepartCycle";
import BrowseCategories from "./charts/BrowseCategories";
import Feedback from "./charts/Feedback";
import OfflinePortal from "./charts/OfflinePortal";
import UserIdentityCategory from "./charts/UserIdentityCategory";
import {
  RightBottomBox,
  RightCenterBox,
  RightPage,
  RightTopBox,
} from "./style";

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  duiringStr = "(近1个月)";

  render() {
    const { offline, browseCategories, userIdentityCategory, departCycle } =
      this.props;
    return (
      <RightPage>
        <RightTopBox>
          <div className="right-top">
            <ModuleTitle>
              <i className="iconfont">&#xe7fd;</i>
              <span>里程碑历史(子任务延期数)</span>
            </ModuleTitle>
            <UserIdentityCategory
              userIdentityCategory={userIdentityCategory}
            ></UserIdentityCategory>
          </div>
        </RightTopBox>

        <RightCenterBox>
          <ModuleTitle>
            <i className="iconfont">&#xe7f7;</i>
            <span>未解决Bug Top5</span>
          </ModuleTitle>
          <div className="right-top-content">
            {/* <BrowseCategories
                browseCategories={browseCategories}></BrowseCategories> */}

            <DepartCycle departCycle={departCycle}></DepartCycle>
            {/* <img
                alt="地球"
                className="earth-gif"
                src={require("../../assets/images/earth-rotate.gif")}
              /> */}
          </div>
        </RightCenterBox>

        <RightBottomBox>
          <BorderBox13 className="right-bottom-borderBox13">
            <div className="right-bottom">
              <ModuleTitle>
                <i className="iconfont">&#xe790;</i>
                <span>项目综合排名</span>
              </ModuleTitle>
              {/* 反馈 */}
              <div className="feedback-box">
                {offline
                  ? offline.feedback.map((item, index) => {
                      return (
                        <div className="feedback-box-item" key={index}>
                          <Feedback FeedbackData={item}></Feedback>
                          <span className="dis-text">{item.title}</span>
                        </div>
                      );
                    })
                  : ""}
              </div>
              {/* 门店 */}
              {/* <div className="offline-portal-box">
                {offline ? (
                  <OfflinePortal
                    offlinePortalData={offline.offlinePortalData}
                  />
                ) : (
                  ""
                )}
              </div> */}
              <div className={'earth-img'}>
                <img
                  alt="地球"
                  className="earth-gif"
                  src={require("../../assets/images/earth-rotate.gif")}
                />
              </div>
            </div>
          </BorderBox13>
        </RightBottomBox>
      </RightPage>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    browseCategories: state.rightPage.browseCategories,
    departCycle: state.rightPage.departCycle,
    userIdentityCategory: state.rightPage.userIdentityCategory,
    offline: state.rightPage.offline,
  };
};

const mapStateToDispatch = (dispatch) => ({});

export default connect(mapStateToProps, mapStateToDispatch)(index);
