import React, { Component } from "react";
import Spinner from "./spinner";
import axios from "axios";

class Message extends Component {
  state = { spinner: false, sentiment: "" };

  sentimentMapping = { Neutral: ":|", Negative: ":(", Positive: ":)" };
  componentDidMount() {
    const formData = new FormData();
    formData.set("text", this.props.message);

    this.setState({ spinner: true });

    axios({
      method: "post",
      url: "https://api.deepai.org/api/sentiment-analysis",
      data: formData,
      headers: {
        "api-key": "66ece5be-f65f-45bf-b77a-ee8b37cf80a2"
      }
    })
      .then(response => {
        if (response.data.output)
          this.setState({
            sentiment: this.sentimentMapping[response.data.output]
          });
      })
      .catch(response => {
        //handle error
        console.log(response);
      })
      .finally(() => {
        this.setState({ spinner: false });
      });
  }

  render() {
    return (
      <div>
        <span>{this.props.username} : </span>
        <span>{this.props.message}</span>
        {this.state.spinner ? <Spinner /> : this.state.sentiment}
      </div>
    );
  }
}

export default Message;
// const message = props => {
//   return (
//     <div>
//       <span>{props.username} : </span>
//       <span>{props.message}</span>
//     </div>
//   );
// };

// export default message;
