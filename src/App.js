import Header from './components/Header';
import ProductList from './components/ProductList';
import ModalContextProvider from './contexts/ModalContext';
import ProductContextProvider from './contexts/ProductContext';
import './index.css';

function App() {
  return (
    <div>
      <ProductContextProvider>
        <ModalContextProvider>
          <Header />
          <div className="container">
            <ProductList />
          </div>
        </ModalContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;

