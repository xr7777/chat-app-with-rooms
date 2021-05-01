import Chat from './Chat';
import Main from './Main';
import { BrowserRouter, Route } from 'react-router-dom';

// scss
import '../scss/main.scss';

const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/chat" component={Chat} />
      </BrowserRouter>
    </div>
  );
};

export default App;
