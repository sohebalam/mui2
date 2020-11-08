import {Provider} from 'react-redux'
import './App.css';
import PostMessages from './components/postMessages';
import {store} from './store'

function App() {
  return (
    <Provider store={store}>
  <PostMessages/>
  </Provider>);
}

export default App;
