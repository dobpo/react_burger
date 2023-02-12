import { useState, useEffect } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import { getData } from '../../utilities';

import styles from './App.module.scss';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData()
      .then(res => setData(res.data))
      .catch(e => setError(e.message))
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      {data.length ?
          (
            <main className={styles.main}>
              <BurgerIngredients data={data} />
              <BurgerConstructor data={data} />
            </main>
          )
        : error ?
           (
            <p style={{
              textAlign: 'center',
              marginTop: '40%'
            }}>Произошла ошибка при получении данных: {error}</p>
          )
        : null
      }
    </div>
  );
}

export default App;
