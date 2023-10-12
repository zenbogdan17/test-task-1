import '../styles/TotalCount.css';
import { observer } from 'mobx-react-lite';
import myStore from '../store/store';

const TotalCount = observer(() => {
  const { totalCount } = myStore;

  return (
    <div className="totalcount">
      <p>
        Total Count: <span className="totalcount-value">{totalCount}</span>
      </p>
    </div>
  );
});

export default TotalCount;
