import React from 'react';


class Header extends React.Component {
  render() {
    const {
      title,
      tagline,
      imageUrl,
      alt
    } = this.props;

    return (
      <div className="jumbotron text-center">
        <h1>{ title }</h1>
        <p>{ tagline }</p>
        <img src={ imageUrl } alt={ alt || 'Alt Text' } className="img-responsive center-block"/>
      </div>
    );
  }
}






export default Header;


