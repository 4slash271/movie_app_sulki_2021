
import React from "react";
function Detail(Props){
    console.log(Props);return<span>Hello</span>;

}
// class Detail extends React.Component {
//   componentDidMount() {
//     const { location, history } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//   }
//   render() {
//     const { location } = this.props;
//     if (location.state) {
//       return <span>{location.state.title}</span>;
//     } else {
//       return null;
//     }
//   }
// }
render() {
    let location;
    if(check if props has val) {
        location = <MyComponent />
    } else {
        location = null
    }
    return (
        <div>
            {location}
        </div>
    )
}
export default Detail;