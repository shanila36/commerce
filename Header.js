import React,{useState} from "react";
import "./Header.css";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import {Input} from "antd";
import {Button} from "antd";
import {makeStyles} from "@material-ui/core/styles";
import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import {Dropdown} from "antd";
import {Menu} from "antd";
import {Link,withRouter} from "react-router-dom";
import {Router} from 'react-router';
import {useStateValue} from "./StateProvider";
import All_product from "./All_product";

function Header(props,{id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();
 


 const handleChange = () => {
    props.history.push("/search")
   
  }
 const list=[]
 const [filter, setFilter]= useState("")
  
  
  const {Search} = Input;
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const useIcons = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(0.6),
      },
    },
  }));
  const classes = useStyles();
  const classes_icon = useIcons();
  const classes_icon_mob = useIcons();
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorEl, setAnchorE1] = React.useState(null);

  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };

  
  return (
    <div className="header">
      
      <div className="header-contents">
      <Link to="/">
        <img
          className="logo_holder"
          src="https://i.ibb.co/Vgrw8Df/Logo-I.png"
        ></img>
        </Link>    
        
        
        <div className="header_search_menu">
        <Link to="/">
        <img
          className="logo_holder_mob"
          src="https://i.ibb.co/Qr38nkv/web-page-home.png"
        ></img>
        </Link>
        
          <div className="header__search">
            <Search
              className="search_input"
              placeholder="Search products here..."
              size="large"
              
              value={filter} onChange={(e) => setFilter(e.target.value)}
              onClick={handleChange}
              id="searchBar"
              enterButton
              
              
            />
            <ul>
            {list.map((name)=> {
              if(filter.length !=0){
                if(name.toLowerCase().includes(filter.toLowerCase())){
                  return <li>{name}</li> 
                }
                else{
                  return null
                }
              }
              return <li>{name}</li> 
            })}
            </ul>
          </div>
          <Link to="/checkout">
          <span className="cart_mobile">
            <img
              className="icons_mobile"
              src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg"
            ></img>
            <span className="basket_amount">
                {basket.length}
              </span>
          </span>
          </Link>
          
        </div>

        <div className="right_side">
        <Link to="/login">
          <div className="My_account">
            <img
              className="icons"
              src="https://www.flaticon.com/svg/static/icons/svg/1738/1738691.svg"
            ></img>
            <span className="account">My Account</span>
          </div>
          </Link>
          <span className="Help">Help</span>
          <span className="Store_location">Store Locations</span>
          <span className="Contact">Contact Us</span>
          <Link to="/checkout">
          <span className="cart">
            <img
              className="icons"
              src="https://www.flaticon.com/svg/static/icons/svg/879/879815.svg"
            ></img>
            <span className="basket_amount">
                {basket.length}
              </span>
          </span>
          </Link>
        </div>
        
      </div>
     
      </div>
    
  );
}


export default withRouter(Header)
