import React from 'react'
import memeData from '../data/memes.js'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  topText : "", 
                        botText : "", 
                        meme: "https://i.imgflip.com/4t0m5.jpg"}
    }

    // state() {
    //     topText = "top"
    //     botText = "bot"
    // }

    changeTopTxt = (e) => {
        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.value)
    }

    // changeBotTxt = (e) => {
    //     this.setState({botText: e.target.value})
    // }

    setMeme = () => {
        let memes = memeData.data.memes
        let i = Math.floor(Math.random() * memes.length);
        this.setState({
            meme : memes[i].url
        })
        console.log(memes[i].url)
    }

    render(){
            return (
                <div className='Main'>
                    <div className='input'>
                        <input type="text" placeholder="Top Text" name="topText" onChange={this.changeTopTxt}></input>
                        <input type="text" placeholder="Bottom Text" name="botText" onChange={this.changeTopTxt}></input>

                    </div>
                    <div className='meme'>
                        <img src={this.state.meme} alt="Meme img"/>
                        <p className='top-text'>{this.state.topText}</p>
                        <p className='bot-text'>{this.state.botText}</p>


                    </div>
                    <div className='button-div'>
                        <button onClick={this.setMeme}>MEME</button>
                        
                    </div>
                </div>
            )
    }
}

export default Main