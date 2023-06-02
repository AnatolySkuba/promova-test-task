import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

import { About, Main, Rates } from 'pages';
import { ROUTER_KEYS } from 'consts';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={ROUTER_KEYS.RATES} element={<Rates />} />
        <Route path={ROUTER_KEYS.ABOUT} element={<About />} />
        <Route path="*" element={<Navigate to={'/'} replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
