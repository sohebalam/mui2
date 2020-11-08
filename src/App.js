import { AppBar, Container, Typography } from '@material-ui/core';
import {Provider} from 'react-redux'
import './App.css';
import PostMessages from './components/postMessages';
import {store} from './store'

function App() {
  return (
  <Provider store={store}>
      <Container maxWidth="lg">
    <AppBar position="static" color='inherit'>
      <Typography variant="h2" align='center'>
        PostBox
      </Typography>
    </AppBar>
  <PostMessages/>
  
  </Container>
  </Provider>);
}

export default App;
