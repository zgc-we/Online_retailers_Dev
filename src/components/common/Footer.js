/**
 * Created by golike on 2017/9/28.
 */
import React from "react";
import './style/footer.scss';
import './style/footers.scss';
import {Row, Col} from 'antd';

// const shipReleteURL = [{
//     title: "寒武纪年原创网",
//     icon: 'http://www.zhuishushenqi.com/images/friend/hwjn.png',
//     url: 'http://www.hanwujinian.com'
// }, {
//     title: "华文小说网",
//     icon: 'http://www.zhuishushenqi.com/images/friend/huawen.jpg',
//     url: 'http://www.hwxsw.com'
// }, {
//     title: "北京掌趣科技股份有限公司",
//     icon: 'http://www.zhuishushenqi.com/images/friend/zq.png',
//     url: 'http://lwcs.0708.com/t2/176/3668.html'
// }];
// 开始建设 Component 并使用 connect 进来的 props 并绑定事件（onChange、onClick）。注意我们的 state 因为是使用 `ImmutableJS` 所以要用 `get()` 取值
const Footer = () => (
    // <footer className="c-full-footer">
    //     <div className="container">
    //         <div className="friend-link">
    //             <span>友情链接:</span>
    //             <a href="http://www.hanwujinian.com" target="_blank" rel="nofollow" title="寒武纪年原创网"><img
    //                 src="http://www.zhuishushenqi.com/images/friend/hwjn.png" alt="寒武纪年原创网"/></a>
    //             <a href="http://lwcs.0708.com/t2/176/3668.html" target="_blank" rel="nofollow" title="北京掌趣科技股份有限公司"><img
    //                 src="http://www.zhuishushenqi.com/images/friend/zq.png" alt="北京掌趣科技股份有限公司"/></a>
    //             <a href="http://www.2cloo.com" target="_blank" rel="nofollow" title="二层楼书院"><img
    //                 src="http://www.zhuishushenqi.com/images/friend/ecl.jpg" alt="二层楼书院"/></a>
    //             <a href="http://www.anyew.cn" target="_blank" rel="nofollow" title="暗夜文学"><img
    //                 src="http://www.zhuishushenqi.com/images/friend/ay.jpg" alt="暗夜文学"/></a>
    //             <a href="http://www.yidianling.com" target="_blank" rel="nofollow" title="壹点灵"><img
    //                 src="http://www.zhuishushenqi.com/images/friend/yidianling.png" alt="壹点灵"/></a>
    //         </div>
    //         {/*<div className="friend-link">*/}
    //         {/*<span>友情链接:</span>*/}
    //         {/*{shipReleteURL.map((value, index) => {*/}
    //         {/*return <a key={index} href={value.url} target="_blank" rel="nofollow" title={value.title}>*/}
    //         {/*<img src={value.icon} alt={value.title}/></a>;*/}
    //         {/*})}         */}
    //         {/*</div>*/}
    //         <div className="foot clearfix">
    //             <div className="footer-left">
    //                 <div className="info">
    //                     <a href="/download" target="_blank">客户端</a>
    //                     <span>|</span>
    //                     <a href="/about?type=aboutUs">关于我们</a>
    //                     <span>|</span>
    //                     <a href="/about?type=callUs">联系我们</a>
    //                     <span>|</span>
    //                     <a href="/about?type=joinUs">加入我们</a>
    //                 </div>
    //                 <div className="copyRight">
    //                     <a target="_blank">
    //                         <p>
    //                             {"沪公网安备 31011202006103号"}
    //                         </p>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </footer>
    <footer className="footer_box">
        <div className="footer_con">
            <Row type="flex" justify="space-around">
                <Col span={2} className="footer_tab"></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-58px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-140px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-218px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-300px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-378px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-459px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-539px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-618px 13px'}}></Col>
                <Col span={2} className="footer_tab" style={{backgroundPosition: '-700px 13px'}}></Col>
            </Row>
            <Row type="flex" justify="space-around" className="footer_c">
                <Col span={4} className="footer_dl">
                    <dl>
                        <dt>服务保障</dt>
                        <dd>正品保证</dd>
                        <dd>7天无理由放心退</dd>
                        <dd>退货返10元唯品币</dd>
                        <dd>7×1.5小时客户服务</dd>
                        <dd>7天无理由随心换</dd>
                    </dl>
                </Col>
                <Col span={4} className="footer_dl">
                    <dl>
                        <dt>服务保障</dt>
                        <dd>正品保证</dd>
                        <dd>7天无理由放心退</dd>
                        <dd>退货返10元唯品币</dd>
                        <dd>7×1.5小时客户服务</dd>
                        <dd>7天无理由随心换</dd>
                    </dl>
                </Col>
                <Col span={4} className="footer_dl">
                    <dl>
                        <dt>服务保障</dt>
                        <dd>正品保证</dd>
                        <dd>7天无理由放心退</dd>
                        <dd>退货返10元唯品币</dd>
                        <dd>7×1.5小时客户服务</dd>
                        <dd>7天无理由随心换</dd>
                    </dl>
                </Col>
                <Col span={4} className="footer_dl">
                    <dl>
                        <dt>服务保障</dt>
                        <dd>正品保证</dd>
                        <dd>7天无理由放心退</dd>
                        <dd>退货返10元唯品币</dd>
                        <dd>7×1.5小时客户服务</dd>
                        <dd>7天无理由随心换</dd>
                    </dl>
                </Col>
                <Col span={4} className="footer_dl">
                    <dl>
                        <dt>服务保障</dt>
                        <dd>正品保证</dd>
                        <dd>7天无理由放心退</dd>
                        <dd>退货返10元唯品币</dd>
                        <dd>7×1.5小时客户服务</dd>
                        <dd>7天无理由随心换</dd>
                    </dl>
                </Col>
            </Row>
            <Row className="foo_box">
                <div className="foo_c">
                    <Row type="flex" justify="center">
                        <Col span={2}><span>关于我们</span></Col>
                        <Col span={2}><span>About Us</span></Col>
                        <Col span={3}><span>Investor Relations</span></Col>
                        <Col span={2}><span>媒体报道</span></Col>
                        <Col span={2}><span>品牌招商</span></Col>
                        <Col span={2}><span>隐私条款</span></Col>
                        <Col span={2}><span>唯品诚聘</span></Col>
                        <Col span={2}><span>唯品卡</span></Col>
                        <Col span={2}>联系我们</Col>
                    </Row>
                </div>
            </Row>
            <Row className="foo_b">
                <p>Copyright © 2008-2019 vip.com，All Rights Reserved  使用本网站即表示接受 唯品会用户协议。版权所有 广州唯品会电子商务有限公司 </p>
                <p>粤公网安备 44010302111111号    粤ICP备08114786号 增值业务经营许可证：粤B2-20170777 网络文化经营许可证：粤网文〔2018〕5030-1743号 </p>
                <p>自营主体经营证照   风险监测信息   互联网药品交易服务资格证（粤C20140002） 互联网药品信息服务资格证书：（粤）-经营性-2018-0271</p>
            </Row>
            <Row type="flex" justify="center" style={{marginTop: '15px'}}>
                <Col span={3} className="fb_box" style={{backgroundPosition: '6px -50px'}}></Col>
                <Col span={3} className="fb_box" style={{backgroundPosition: '6px -100px'}}></Col>
                <Col span={3} className="fb_box" style={{backgroundPosition: '6px -150px'}}></Col>
                <Col span={3} className="fb_box" style={{backgroundPosition: '6px -200px'}}></Col>
                <Col span={3} className="fb_box" style={{backgroundPosition: '6px -250px'}}></Col>
                <Col span={3} className="fb_box" style={{backgroundPosition: '6px -300px'}}></Col>
                <Col span={3} className="fb_box" style={{backgroundPosition: '6px -350px'}}></Col>
            </Row>
        </div>
    </footer>
);

export default Footer;