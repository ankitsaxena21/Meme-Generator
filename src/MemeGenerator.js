import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomMemeUrl = this.state.allMemeImgs[randomNum].url;
    this.setState({
      randomImg: randomMemeUrl
    });
  }
  render() {
    return (
      <div>
        <form className="form-group container justify-content-center col-lg-6 col-sm-6 mt-4" onSubmit={this.handleSubmit}>
          <input
            className="form-control mb-3"
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="Top Text"
            onChange={this.handleChange}
          />
          <input
            className="form-control mb-2"
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="Bottom Text"
            onChange={this.handleChange}
          />
          <button class="btn btn-primary">Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="Random meme" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
