/**
 * 组件： Header
 * 时间： 2018-05-26
 */
import React, { PropTypes, Component } from 'react'
import {browserHistory} from 'react-router'
import {is, fromJS} from 'immutable';
import '../common/style/header.scss'
import '../common/style/headers.scss';
import {Row, Col} from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);
        this.onSearchText = this.onSearchText.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.getNavDateDom = this.getNavDateDom.bind(this); 
        this.state={
            value: "",
            currentIndex: 0, // 值保存router index值
            navData: [
                {text: "首 页", href: "/"}, 
                {text: "精 选", href: "/selection"}, 
                {text: "分 类", href: "/category"},
                {text: "书 单", href: "/booklist"}, 
                {text: "排行榜", href: "/rank"}, 
                {text: "客户端", href: "/download"}
            ]
        }
    }

    // 获取当前 router index 值保存router index值。
    componentDidMount() {
        this.unlisten = browserHistory.listen(location => {
            let dataIndex = this.state.navData.findIndex((value, index, arr) => {
                return value.href == location.pathname;
            });
            console.log(dataIndex, "dataIndex")
            this.setState({currentIndex: dataIndex});
        })
    }

    // 解绑组件
    componentWillUnmount() {
        //注销路由监听
        this.unlisten();
    }

    /** 
    * 优化
    * @param nextProps props更改之后值
    * @param nextState state更改之后值 
    */
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
    }

    // 获取搜索框内容
    onSearchText(event) {
        this.setState({
            value: event.target.value
        });
    }

    // 点击搜索按钮
    handleClickSearch(type, value) {
        if (type && value) {
            browserHistory.push({
                pathname: value.href
            });
        } else {
            browserHistory.push({
                pathname: '/search',
                state: {
                    text: this.state.value
                }
            });
        }
    }

    // 获取 nav 内容的展示内容
    getNavDateDom() {
        let nav_Date = this.state.navData;
        return nav_Date.map((value, index) => {
            return <li 
                        key={index} 
                        className={index === this.state.currentIndex ? "nav-cell active" : "nav-cell"}
                    >
                        <a onClick={() => this.handleClickSearch(true, value)}>{value.text}</a>
                    </li>
        })
    }

    render() {
        return (
            <div>
                <header className="h_title_box">
                    <div className="top_box">
                        <div className="c_box">
                            <Row>
                                <Col span={8}>
                                    <span style={{color: 'red'}}>10634698</span>
                                    <span>位会员的选择</span>
                                    <span className='h_login'>登录</span> | <span>注册</span>
                                </Col>
                                <Col className="c_right" span={8} offset={8}>
                                    <Row type="flex">
                                        <Col className='c_bor' span={5}>会员俱乐部</Col>
                                        <Col className='c_bor' span={4}>签到</Col>
                                        <Col className='c_bor' span={4}>我的账户</Col>
                                        <Col className='c_bor' span={4}>手机版</Col>
                                        <Col span={4}>设置勿扰</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <Row className="he_box">
                            <Col></Col>
                        </Row>
                    </div>
                    {/* <div className="nav">
                        <div className="container">
                            <ul className="nav-cells">
                                {this.getNavDateDom()}
                            </ul>
                        </div>
                    </div> */}
                </header>
            </div>
        );
    }
}

export default Header;