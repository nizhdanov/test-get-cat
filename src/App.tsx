import { useState } from 'react';

import { getCat } from './api/request';
import { Checkbox } from './components/ui/checkbox';
import { Button } from './components/ui/button';
import { useInterval } from './hooks/useInterval';

import styles from './App.module.css';

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  const [isLoading, setIsLoading] = useState(false);
  const [catData, setCatData] = useState<CatImage | null>(null);

  const handleGetCat = async () => {
    setIsLoading(true);
    const catResponse = await getCat();
    setCatData(catResponse.data[0]);
    setIsLoading(false);
  };

  const { active, toggle } = useInterval(handleGetCat, 5000);

  return (
    <main className={styles.main}>
      <Checkbox
        title='Enabled'
        checked={isEnabled}
        onChange={(e) => setIsEnabled(e.target.checked)}
      />

      <Checkbox title='Auto-refresh every 5 seconds' checked={active} onChange={toggle} />

      <Button loading={isLoading} disabled={!isEnabled || isLoading} onClick={handleGetCat}>
        GET CAT
      </Button>

      {isLoading && <p>Loading...</p>}
      {catData && !isLoading && (
        <img src={catData.url} width={catData.width} height={catData.height} alt='Cat' />
      )}
    </main>
  );
};
