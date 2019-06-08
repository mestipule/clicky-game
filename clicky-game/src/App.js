import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Cards from  './components/CardsFriends/card';
import images from  './clicky-images.json';
import Wrapper from './components/Wrapper/wraper';
import Title from './components/Title/title';
import Jumbotron from './components/Jumbotron/jumbotron'

import './App.css';

function shuffleImages (array) {
  for (let i = array.length - 1; i> 0; i--)
  {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state={
    images,
    highScore: 0,
    currentScore: 0,
    clicked: []
  };

  componentDidMount(){
    console.log(this.state.images)

  }
 


  


  handleclick = id =>
{
  if (this.state.clicked.indexOf(id) === -1)
  {
    this.handleIncrement();
    this.setState({
      clicked: this.state.clicked.concat(id)
    })
  } else
  {
    this.handleReset();
  } 
  };

  handleIncrement = () => 
  {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Guessed Right! Now try again and let's see what happens."
    });
    if (newScore >= this.state.highScore)
    {
      this.setState({
        highScore: newScore
      });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState ({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "Oooohhhh, Unlucky!",
      clicked: []
    });
    this.handleShuffle();
  };
  
  handleShuffle = () => {
    let shuffledImages = shuffleImages(images);
    this.setState({
      images: shuffledImages
    });
  };


  render (){
    return(

     
      <Wrapper>
        <div className="jumbotron">
          <div className ="scoreInJumbotron">
            <Jumbotron
              title = "Clicky-Game"
              score = {this.state.currentScore}
              highScore = {this.state.highScore}
              message = {this.state.message}
            />
          </div>
        </div>
        <Title>
        Click once, to earn points. If you click twice the games restart!
        </Title>

        {this.state.images.map(image =>(
        <Cards
          key = {image.id}
          handleclick = {this.handleclick}
          handleIncrement = {this.handleIncrement}
          handleReset = {this.handleReset}
          handleShuffle = {this.handleShuffle}
          id = {image.id}
          image = {image.image}
          name = {image.name}
        />
        ))}
      </Wrapper>

  
    )
}


}
export default App;
