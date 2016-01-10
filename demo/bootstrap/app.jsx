import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal,ModalManager} from '../../lib/index';

class MyModal extends Component{
   render(){
      const {content} = this.props;
      return (
        <Modal
          onRequestClose={() => true}
          className="Modal__Bootstrap modal-dialog"
          closeTimeoutMS={150}
          openTimeoutMS={150}
          style={{content : {border : 'none'}}}
          >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={ModalManager.close}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title">What you input</h4>
            </div>
            <div className="modal-body">
              <h4>{content}</h4>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={ModalManager.close}>Close</button>
              <button type="button" className="btn btn-primary" onClick={ModalManager.close}>OK</button>
            </div>
          </div>
        </Modal>
      );
   }
}

class App extends Component{
   openModal(){
      var content = this.refs.input.value;
      ModalManager.open(<MyModal content={content}/>);
   }
   render(){
      return (
        <div className="container" style={{marginTop:20}}>
            <div className="row">
                <div className="col-xs-offset-4 col-xs-4">
                    <div style={{margin:10}}>
                        <input className="form-control" ref='input' />
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button className="btn btn-primary" role="button" type="button" onClick={this.openModal.bind(this)}>Open Modal</button>
                    </div>
                </div>
            </div>
        </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById('main'));
