import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from './actions';

const App = (props) => (
  <>
    <button onClick={() => props.getContacts()}>Get contacts now!</button>
    {props.contacts && props.contacts.length
      ? props.contacts.map(el => (<p key={el.id}>{el.name}</p>))
      : <p>Nothing</p>
    }
  </>
)

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
})

export default connect(
  mapStateToProps,
  { getContacts },
)(App)
