import React from "react";
import "./product-platform-grid.css"

const ProductsPlatformsGrid = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <div className="prod-item px-3 py-4">
                    <img className="mb-4" src={require("./images/products-icon1.png")} alt="Produts Icon"/>
                    <h3 className="section-title text-black mb-4">
                        Enterprise Application Development Platform
                    </h3>
                    <p className="font-weight-normal">
                        We use a wide range of technology stacks with Joomla like Angular, PHP, Node, JS with both traditional and NoSQL databases
                    </p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="prod-item px-3 py-4">
                    <img className="mb-4" src={require("./images/products-icon2.png")} alt="Produts Icon"/>
                    <h3 className="section-title text-black mb-4">
                        Non Profit Management
                    </h3>
                    <p className="font-weight-normal">
                        We use a wide range of technology stacks with Joomla like Angular, PHP, Node, JS with both traditional and NoSQL databases
                    </p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="prod-item px-3 py-4">
                    <img className="mb-4" src={require("./images/products-icon3.png")} alt="Produts Icon"/>
                    <h3 className="section-title text-black mb-4">
                        e-Learning Platform
                    </h3>
                    <p className="font-weight-normal">
                        We use a wide range of technology stacks with Joomla like Angular, PHP, Node, JS with both traditional and NoSQL databases
                    </p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="prod-item px-3 py-4">
                    <img className="mb-4" src={require("./images/products-icon4.png")} alt="Produts Icon"/>
                    <h3 className="section-title text-black mb-4">
                        Unite
                    </h3>
                    <p className="font-weight-normal">
                        We use a wide range of technology stacks with Joomla like Angular, PHP, Node, JS with both traditional and NoSQL databases
                    </p>
                </div>
            </div>
        </div>

    )
}

export default ProductsPlatformsGrid;