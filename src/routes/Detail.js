
import React from "react";
import {useLocation} from "react-router-dom";

// function Detail(Props){
//     console.log(Props);return<span>Hello</span>;

// }
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location}</span>;
    } else {
      return null;
    }
  }
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default Detail;