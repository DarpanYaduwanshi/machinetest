import React from 'react';
import Navigation from './src/navigation/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store/store';

function App() {
  return (
<Provider store={store}>
  <Navigation />
</Provider>
  )
}
export default App;

