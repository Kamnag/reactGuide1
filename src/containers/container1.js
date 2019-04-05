import React, { Component } from 'react';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'






class Container1 extends Component {

  render() {
    return (
      <div>
        {/* <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
        <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
        <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
        </Modal.Description>
        </Modal.Content>
        </Modal> */}
        <Button onClick={() => console.log(this.props.stateprop1)}> Get State </Button> 
        <Button onClick={() => this.props.action1()}> Dispatch Action 1 </Button> 
        <Button onClick={() => this.props.action2()}>Dispatch Action 2 </Button> 
        <Button onClick={() => this.props.action_creator1()}>Dispatch Action Creator 1 </Button> 
        <Button onClick={() => this.props.action_creator2()}>Dispatch Action Creator 2 </Button> 
        {this.props.user_text
          ? <h3> {this.props.user_text} </h3>
          : <h3> No User Text </h3>
        }
        <br />
        {this.props.stateprop1
          ? <p> stateprop1 is true </p>
          : <p> stateprop1 is false </p>
        }
      </div>
    )}
}


function mapStateToProps(state) {
  return {
    stateprop1: state.reducer1.stateprop1,
    user_text: state.user_reducer.user_text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Container1);
