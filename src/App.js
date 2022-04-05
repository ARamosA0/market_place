import Router from './router';
import { CocheraProvider } from './Context/CocheraContext';

import './App.css';

const App = () => {
  return (
    <CocheraProvider>
      <div>
        <Router />
      </div>
    </CocheraProvider>
  )
}

export default App;