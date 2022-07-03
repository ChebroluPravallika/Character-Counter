import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    input: '',
    list: [],
  }

  onClickAdd = () => {
    const {input} = this.state
    const newItem = {key: v4(), value: input}
    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      input: '',
    }))
  }

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {list, input} = this.state
    const len = list.length
    console.log(list)
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '45%'}}>
          <div className="heading">
            <h1>Count the characters like a Boss...</h1>
          </div>
          {len === 0 && (
            <div className="imgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                style={{height: '200px'}}
              />
            </div>
          )}

          {len !== 0 && (
            <ul className="textContainer">
              {list.map(eachItem => (
                <li
                  style={{listStyle: 'none', margin: '10px'}}
                  key={eachItem.key}
                >
                  <p>
                    {eachItem.value}: {eachItem.value.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="counterContainer">
          <h1 style={{color: '#ffbf1f', margin: '20px'}}>Character Counter</h1>
          <form>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              value={input}
              style={{height: '30px', width: '300px', marginRight: '10px'}}
            />
            <button type="button" onClick={this.onClickAdd} className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
