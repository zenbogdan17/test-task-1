import '../styles/Products.css';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import myStore from '../store/store';

const Products = observer(() => {
  const [totalCount, setTotalCount] = useState(0);
  const { selectedOption, books, handlerTotalCount } = myStore;

  handlerTotalCount(totalCount);
  let bookList = books;

  if (selectedOption && selectedOption !== 'all') {
    bookList = bookList.filter((book) => book.category === selectedOption);
  }
  if (selectedOption === 'all') {
    bookList = books;
  }
  return (
    <div className="products">
      {bookList.map((book) => (
        <div
          onClick={() => {
            setTotalCount(totalCount + book.price);
          }}
          className="product-item"
          key={book.id}
        >
          <div>
            {book.id} {book.name}
          </div>

          <div>
            <p>{book.price}</p>
          </div>
        </div>
      ))}

      <button onClick={() => setTotalCount(0)} className="products-clear__btn">
        Clear basket
      </button>
    </div>
  );
});

export default Products;
