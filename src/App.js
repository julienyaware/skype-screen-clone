import logo from './logo.svg';
import './App.css';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <SideBar />
      <Main />
    </div>
    </Provider>
  );
}

export default App;
