import './App.css';
import { Filters, Products, TotalCount } from './components';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="container__body">
          <h1 className="title">Books</h1>

          <Filters />

          <Products />

          <TotalCount />
        </div>
      </div>
    </div>
  );
}

export default App;
