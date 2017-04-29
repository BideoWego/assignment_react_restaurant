import React from 'react';


class Nav extends React.Component {
  render() {

    const {
      title,
      links
    } = this.props;

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <NavHeader title={ title } />
          <NavbarRight links={ links } />
        </div>
      </nav>
    );
  }
}


const NavHeader = (props) => {
  return (
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav-collapse" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">{ props.title }</a>
    </div>
  );
};


const NavbarRight = (props) => {
  const links = props.links;
  const linkElements = [];
  links.forEach((link, index) => {
    let linkElement = (
      <li key={ `navbar-right-link-${ index }` }>
        <a href={ link.href }>{ link.title }</a>
      </li>
    );
    linkElements.push(linkElement);
  });

  return (
    <div className="collapse navbar-collapse" id="main-nav-collapse">
      <ul className="nav navbar-nav navbar-right">
        { linkElements }
      </ul>
    </div>
  );
};




export default Nav;








