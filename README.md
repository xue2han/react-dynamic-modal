# react-dynamic-modal

Dynamically generated modal dialog component for ReactJS.
It is stateless and can be rendered only when needed.

## Why react-dynamic-modal ?
Most of modal dialog components for React have a common shortcoming : you have to take care of the state (open or closed) for the modal,and you have to render it in your component event if you don't need it to be shown.So why don't we make it stateless and render it only when we need it to be shown ? this is how react-dynamic-modal comes.

## Usage

```js
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Modal,ModalManager} from 'react-dynamic-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class MyModal extends Component{
   render(){
      const { text } = this.props;
      return (
         <Modal
            onRequestClose={this.props.onRequestClose}
            openTimeoutMS={150}
            closeTimeoutMS={150}
            style={customStyle}>
            <h1>What you input : {text}</h1>
            <button onClick={ModalManager.close}>Close Modal</button>
         </Modal>
      );
   }
}

class App extends Component{
    openModal(){
       const text = this.refs.input.value;
       ModalManager.open(<MyModal text={text} onRequestClose={() => true}/>);
    }
    render(){
       return (
          <div>
            <div><input type="text" placeholder="input something" ref="input" /></div>
            <div><button type="button" onClick={this.openModal.bind(this)}>Open Modal </button> </div>
          </div>
       );
    }
}

ReactDOM.render(<App />,document.getElementById('main'));

```
## Styles
Styles are passed as an object with 2 keys, 'overlay' and 'content' like so
```js
{
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    top                        : '40px',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
}
```

Styles passed to the modal are merged in with the above defaults and applied to their respective elements.
At this time, media queries will need to be handled by the consumer.

# Demos
* http://xue2han.github.io/react-dynamic-modal
