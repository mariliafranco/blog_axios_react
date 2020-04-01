import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: {},
    id: 1
  };

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
    .then(res => {
      this.setState({ post: res.data });
    });
  };

  componentDidUpdate = (_, prevState) => {
    if (this.state.id !== prevState.id){
      console.log(this.state.post.id, prevState.post.id)
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then(res => {
        this.setState({ post: res.data });
      })
    }
  }

  nextPost = () => {
    this.setState({ id: (this.state.id + 1) })
    console.log(this.state.id + 1);
  }

  previousPost = () => {
      this.setState({ post: (this.state.id - 1) })
  }

  render() {
    const {title, body} = this.state.post;
    return (
      <div>
        <br />
        <strong><i>Post </i></strong><br />
        <strong><i>idUser:</i></strong> {this.state.id} <br />
              <strong>Title:</strong> {title}  <br />
              <strong>Text:</strong> {body}   <br /> <br />

        <button onClick={this.previousPost}> Post anterior </button>
        <button onClick={this.nextPost}>Próximo post</button>
      </div>
    );
          }
}

export default Post;
