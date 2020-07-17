import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                this.setState({
                    allMemeImgs: response.data.memes
                })
                // console.log(this.state.allMemeImgs)
                // console.log(this.state.allMemeImgs[0])
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }



    // this.setState(prevState => {
    //     return { temporary: { ...prevState.temporary, [name]: value } }
    // })



    handleSubmit = (event) => {
        event.preventDefault()
        let imageChoice = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
        this.setState({ randomImage: imageChoice })

        //other method
        // let number = Math.floor(Math.random() * this.state.allMemeImgs.length)
        // let image = this.state.allMemeImgs[number].url
        // this.setState({randomImage: image})
        
        
        
    }




    render() {
        
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"></input>
                    <br />
                    <input
                        onChange={this.handleChange}
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"></input>

                    <button>Generate Meme</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>

            </div>

        )
    }

}


export default MemeGenerator