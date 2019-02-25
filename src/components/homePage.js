/**
 * Created by golike on 2017/10/15.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import api from "../modules/api/api";
import * as actions from '../actions';
import {Carousel, BackTop, Row, Col} from "antd";
import "./common/style/home.scss";
import './common/style/homes.scss';
import images0 from '../public/images/banner2.jpg';
import images1 from '../public/images/banner3.jpg';
import images2 from '../public/images/banner4.jpg';
import images3 from '../public/images/title.jpg';

// 主页
class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
            count: 0,
        }
    }

    componentDidMount() {
        setInterval(() => this.get_banner_index(), 1500);
    }

    get_banner_index = () => {
        let _count = this.state.count;
        if (_count < 2 ) {
            this.setState({count: _count + 1});
        } else {
            this.setState({count: 0});
        }
    }
    
    get_banner_img = () => {
        const _array = [images0, images1, images2];
        const _count = this.state.count;
        return _array.map((k,i) => {
            return (
                <li key={i} className={_count == i ? 'li_active': 'li_leve'}>
                    <img src={k}/>
                </li>
            )
        })
    }


    render() {
        return (
            <div className="page-home">
                <div className="page_banner">
                    <div className="banner">
                        <ul>{this.get_banner_img()}</ul>
                        <Row>
                            <Col span={4} offset={6} className="b_tab">小米品牌钜献 抢小米9新品</Col>
                            <Col span={4} className="b_tab">小米品牌钜献 抢小米9新品</Col>
                            <Col span={4} className="b_tab">小米品牌钜献 抢小米9新品</Col>
                        </Row>
                    </div>
                </div>
                <div style={{width: '1200px', margin: '0 auto', minHeight: '450px', paddingTop: '40px'}}>
                    <img src={images3} style={{width: '100%'}}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => ({
    home: store.home,
});

const mapDispatchToProps = (dispatch) => ({
    getCategoryList: () => { dispatch(actions.categoryAction.discoverCategoryList()) },
    getRankingList: (id) => { dispatch(actions.rankingAction.rankingList(id)) },
    getSpread: () => { dispatch(actions.homeAction.getSpread()) }, 
    getDiscoverSingleMenuList: () => { dispatch(actions.selectionAction.discoverSingleMenuList()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
