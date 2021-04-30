import Chat from './Chat';
import Main from './Main';

import '../scss/main.scss';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  );
};

export default App;
