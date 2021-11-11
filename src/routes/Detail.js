import React from "react";
class Detail extends React.Component {
  
    render() {
        console.log(this);
      const { location } = this.props;
      if (location.state) {
        return <span>{location.state.title}</span>;
      } else {
        return null;
      }
    }
  }

export default Detail;