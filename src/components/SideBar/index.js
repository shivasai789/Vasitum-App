import { Link } from "react-router-dom";
import "./index.css";

const SideBar = (props) => {
  const {menuDetails,otherMenuDetails,activeTab,onChangeTabItem} = props
  
  const onClickTabItem = (id) => {
    onChangeTabItem(id)
  }

  return (
    <div className="side-bar">
      <div className="website-logo">
      <img src="logo.png" alt="logo" className="logo"  />
      <img src="website-name.png" alt="website name" className="website-name" />
      </div>
      <p className="tabs-head">MAIN MENU</p>
      {menuDetails.map((item) => (
        <Link to={`/${item.id === 'dashboard' ? '' : item.id}`} className={activeTab === item.id ? 'tab-item tab-item-active' : 'tab-item'} key={item.id} onClick={() => onClickTabItem(item.id)}>
          {item.icon}
          <p>{item.label}</p>
        </Link>
      ))}
      <p className="tabs-head" style={{ marginTop: "40px" }}>
        OTHER
      </p>
      {otherMenuDetails.map((item) => (
        <Link to={`/${item.id}`} className={activeTab === item.id ? 'tab-item tab-item-active' : 'tab-item'} key={item.id} onClick={() => onClickTabItem(item.id)}>
          {item.icon}
          <p>{item.label}</p>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
