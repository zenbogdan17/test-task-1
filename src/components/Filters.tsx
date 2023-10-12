import '../styles/Filters.css';
import { observer } from 'mobx-react-lite';
import myStore from '../store/store';
import { useState } from 'react';

const Filters = observer(() => {
  const { selectedOption, handleSelectChange, books, sortToPrise } = myStore;
  const [sort, setSort] = useState('↓');

  const handlerSort = () => {
    sortToPrise();
    if (sort === '↓') {
      setSort('↑');
    } else {
      setSort('↓');
    }
  };

  let options = Array.from(new Set(books.map((book) => book.category)));

  return (
    <div className="filters">
      <button className="filters-btn__price" onClick={handlerSort}>
        Price {sort}
      </button>

      <select
        value={selectedOption}
        onChange={(e) => {
          handleSelectChange(e.target.value);
        }}
        className="filters-select"
      >
        <option value={'all'}>all products</option>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Filters;
