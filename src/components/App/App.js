import { useState, useEffect } from 'react';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import styles from './App.module.scss';

const DATA_API_URL = 'https://norma.nomoreparties.space/api';

const getData = async () => {
  const res = await fetch(`${DATA_API_URL}/ingredients`);

  if (res.ok) {
    return await res.json()
  }
  throw new Error(`Error: ${res.status}`);
};


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
