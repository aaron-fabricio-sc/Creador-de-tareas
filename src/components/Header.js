import React from "react";
class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-dark bg-dark">
        <h1 className="text-white">
          {this.props.name}
          <span className="badge badge-pill badge-light ml-3">
            {this.props.number}
          </span>
        </h1>
      </header>
    );
  }
}

export default Header;
