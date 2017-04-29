import React from 'react';


class Menu extends React.Component {
  render() {
    const menuItemElements = [];

    this.props.menuItems.forEach((menuItem, index) => {
      let menuItemElement = (
        <MenuItem
          key={ `menu-item-${ index }`}
          title={ menuItem.title }
          description={ menuItem.description }
          price={ menuItem.price }
          />
      );

      menuItemElements.push(menuItemElement);
    });

    return (
      <ul className="list-group">{ menuItemElements }</ul>
    );
  }
}


const MenuItem = (props) => {
  return (
    <li className="list-group-item">
      <h3>{ props.title }</h3>
      <p>{ props.description }</p>
      <p>${ props.price }</p>
    </li>
  );
};




export default Menu;




