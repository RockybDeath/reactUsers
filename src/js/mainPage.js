import * as React from "react";
import {Link} from "react-router"; 
import classnames from 'classnames';
import logotip from "../img/logotip.svg"
import {Users} from "./tableUsers"

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.dropdownMenu=this.dropdownMenu.bind(this);
        this.showBlock=this.showBlock.bind(this);
        this.showElement = this.showElement.bind(this)
        this.default = this.default.bind(this)
        this.state = {
            dropdown:false,
            users: true,
            news: false,
            shop: false,
            tea: false,
            support: false
        };
    }
    dropdownMenu(){
        this.setState({
            dropdown: !(this.state.dropdown)
        })
    }
    default(){
        this.setState({
            users: false,
            news: false,
            shop: false,
            tea: false,
            support: false
       }) 
    }
    showBlock(name){
        this.default()
        this.setState({
            [name]: !this.state.name
        })
    }
    showElement(){
        if(this.state.users) return <Users/>
        else if(this.state.shop) return <h3>Here will be shop</h3>
        else if(this.state.support) return <h3>I don't have any support</h3>
        else if(this.state.tea) return <h3>I want a tea too</h3>
        else if(this.state.news) return <h3>Here will be news</h3>
        else return null
    }
    render(){
        return(
            <div>
                <header className="header">
                    <div className="header-container">
                        <Link to="/main" className="header-logo">
                            <img className="header-logo__image" src={logotip} alt="Logo"></img>
                        </Link>
                        <div className="header-items">
                            <Link onClick={() => this.showBlock("news")} className={classnames("header-item header-link",{"header-link-activeBlock": this.state.news})}>
                                <p className="header-label">NEWS</p>
                            </Link>
                            <Link onClick={() => this.showBlock("shop")} className={classnames("header-item header-link",{"header-link-activeBlock": this.state.shop})}>
                                <p className="header-label">SHOP</p>
                            </Link>
                            <Link onClick={() => this.showBlock("users")} className={classnames("header-item header-link",{"header-link-activeBlock": this.state.users})}>
                                <p className="header-label">USERS</p>
                            </Link>
                            <Link onClick={() => this.showBlock("tea")} className={classnames("header-item header-link",{"header-link-activeBlock": this.state.tea})}>
                                <p className="header-label">TEA</p>
                            </Link>
                        </div>
                        <div className="header-profileItems">
                            <Link onClick={() => this.showBlock("support")} className={classnames("header-item header-link",{"header-link-activeBlock": this.state.support})}>
                                <p className="header-label">Support</p>
                            </Link>
                            <Link onClick={this.dropdownMenu} className={classnames("header-item header-link", {'header-link-active': this.state.dropdown})}>
                                <p className="header-label">Menu</p>
                                <span></span>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className={classnames("header-accountDropdownLogged",{"is-open": this.state.dropdown})}>
                            <div className="header-items menu">
                                <ul className="menu-items">
                                    <li className={classnames("menu-item",{"activeBlock": this.state.news})}>
                                        <Link onClick={() => this.showBlock("news")} className={classnames("header-item header-link")}>
                                            <p className="header-label">NEWS</p>
                                        </Link>
                                    </li>
                                    <li className={classnames("menu-item",{"activeBlock": this.state.shop})}>
                                        <Link onClick={() => this.showBlock("shop")} className={classnames("header-item header-link")}>
                                            <p className="header-label">SHOP</p>
                                        </Link>
                                    </li>
                                    <li className={classnames("menu-item",{"activeBlock": this.state.users})}>
                                        <Link onClick={() => this.showBlock("users")} className={classnames("header-item header-link")}>
                                            <p className="header-label">USERS</p>
                                        </Link>
                                    </li>
                                    <li className={classnames("menu-item",{"activeBlock": this.state.tea})}>
                                        <Link onClick={() => this.showBlock("tea")} className={classnames("header-item header-link")}>
                                            <p className="header-label">TEA</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="header-sectionLogin">
                                <Link to="/login" className="header-accountDropdownButtonLink">Log in</Link>
                            </div>
                    {/* <Link to="/login" className="header-accountDropdownLink">
                        <div className="header-accountDropdownLinkLabel">Register</div>
                    </Link> */}
                        </div>
                    </div>
                </header>
                <this.showElement></this.showElement>
            </div>
        )
    }
}