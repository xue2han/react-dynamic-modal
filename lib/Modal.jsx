import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Assign from 'lodash.assign';
// so that our CSS is statically analyzable
const CLASS_NAMES = {
  overlay: {
    base: 'ReactModal__Overlay',
    afterOpen: 'ReactModal__Overlay--after-open',
    beforeClose: 'ReactModal__Overlay--before-close'
  },
  content: {
    base: 'ReactModal__Content',
    afterOpen: 'ReactModal__Content--after-open',
    beforeClose: 'ReactModal__Content--before-close'
  }
};

const defaultStyles = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    position                : 'absolute',
    top                     : '40px',
    left                    : '40px',
    right                   : '40px',
    bottom                  : '40px',
    border                  : '1px solid #ccc',
    background              : '#fff',
    overflow                : 'auto',
    WebkitOverflowScrolling : 'touch',
    borderRadius            : '4px',
    outline                 : 'none',
    padding                 : '20px'
  }
};

var onClose;

class Modal extends Component{
   constructor(props){
      super(props);

      this.state = {
         afterOpen : false,
         beforeClose : false,
      }
   }
   close() {
       if(!this.props.onRequestClose || this.props.onRequestClose()){
          Manager.close();
       }
   }
   handleKeyDown(){
      if (event.keyCode == 27 /*esc*/) this.close();
   }
   componentDidMount(){
      const {openTimeoutMS,closeTimeoutMS} = this.props;
      setTimeout(() => this.setState({afterOpen : true}),openTimeoutMS ? openTimeoutMS : 150);
      onClose = (callback) => {
         this.setState({beforeClose: true}, () => {
           this.closeTimer = setTimeout(callback, closeTimeoutMS ? closeTimeoutMS : 150);
         });
      };
   }
   componentWillUnmount(){
      onClose = null;
      clearTimeout(this.closeTimer);
   }

   buildClassName(which, additional) {
      var className = CLASS_NAMES[which].base;
      if (this.state.afterOpen)
        className += ' '+CLASS_NAMES[which].afterOpen;
      if (this.state.beforeClose)
        className += ' '+CLASS_NAMES[which].beforeClose;
      return additional ? className + ' ' + additional : className;
   }
   render(){
      const {style} = this.props;
      return (
          <div
            ref="overlay"
            className={this.buildClassName('overlay',this.props.overlayClassName)}
            style={Assign({},defaultStyles.overlay,style ? (style.overlay ? style.overlay : {}) : {})}
            onClick={this.close.bind(this)}>
            <div
              ref="content"
              className={this.buildClassName('content',this.props.className)}
              style={Assign({},defaultStyles.content,style ? (style.content ? style.content : {}) : {})}
              onClick={e => e.stopPropagation()}
              onKeyDown={this.handleKeyDown.bind(this)}>
              {this.props.children}
            </div>
          </div>
      );
   }
}

var node;

const Manager = {
    open(component){
       if(onClose){
          throw "There is already one modal.It must be closed before one new modal will be opened";
       }
       if(!node){
          node = document.createElement('div');
          document.body.appendChild(node);
       }
       ReactDOM.render(component,node);
    },
    close(){
       onClose && onClose(() => {
         ReactDOM.unmountComponentAtNode(node);
       });
    },
}

module.exports = {
   Modal : Modal,
   ModalManager : Manager,
};
