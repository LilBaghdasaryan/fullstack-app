import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import  AppRouter  from './components/AppRouter';
import { Provider } from 'react-redux';
import store from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <AppRouter />
    </Router>
    </Provider>
    
  );
}

export default App;
