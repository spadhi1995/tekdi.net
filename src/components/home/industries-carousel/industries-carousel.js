import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './industries-carousel.css';

class IndustriesCarousel extends React.Component {
    state= {
        responsive:{},
    }
    componentDidMount(){
        const desktop = this.props.desktop ? this.props.desktop : 4;
        const tablet = this.props.tablet ? this.props.tablet : 2;
        const mobile = this.props.mobile ? this.props.mobile : 1;
        this.setState({
            responsive:{
                0: {
                    items: mobile,
                },
                768: {
                    items: tablet,
                },
                992:{
                    item: desktop
                }
            }
        })
    }
    render(){
        const column = this.props.column ? this.props.column : 4;
        const loop = this.props.loop === false ? this.props.loop : true;
        const nav = this.props.nav === false ? this.props.nav : true;

        return (
        <div className="container"> 
            <div className="industries-carousel">
                <OwlCarousel
                    className="owl-theme blue-bg text-white"
                    items={column}
                    loop={loop}
                    nav={nav}
                    dots={false}
                    responsive={this.state.responsive}
                >
                    <div className="item">
                        <img src={require("./images/ind-icon1.png")} alt="Education"/>
                        <h3 className="section-title mt-4 mb-2">Education</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="item">
                        <img src={require("./images/ind-icon2.png")} alt="Logistics Transportation"/>
                        <h3 className="section-title mt-4 mb-2">Logistics & Transportation</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="item">
                        <img src={require("./images/ind-icon3.png")} alt="News Media"/>
                        <h3 className="section-title mt-4 mb-2">News, Media & Publishing</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="item">
                        <img src={require("./images/ind-icon4.png")} alt="Healthcare"/>
                        <h3 className="section-title mt-4 mb-2">Healthcare</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="item">
                        <img src={require("./images/ind-icon1.png")} alt="Education"/>
                        <h3 className="section-title mt-4 mb-2">Education</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="item">
                        <img src={require("./images/ind-icon2.png")} alt="Logistics Transportation"/>
                        <h3 className="section-title mt-4 mb-2">Logistics & Transportation</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="item">
                        <img src={require("./images/ind-icon3.png")} alt="News Media"/>
                        <h3 className="section-title mt-4 mb-2">News, Media & Publishing</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="item">
                        <img src={require("./images/ind-icon4.png")} alt="Healthcare"/>
                        <h3 className="section-title mt-4 mb-2">Healthcare</h3>
                        <p className="font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>

                </OwlCarousel> 
            </div>
        </div> 
        )
    }
}
export default IndustriesCarousel;