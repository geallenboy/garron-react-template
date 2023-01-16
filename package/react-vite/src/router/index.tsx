import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from '@/views/App';
import Page404 from '@/views/result/page404';

import { routers } from './routers';

export default function RouterView() {
  return (
    <Suspense fallback={<div className="loading_div">loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            {routers.map((rou) => {
              return <Route key={rou.path} path={rou.path} element={<rou.element />} />;
            })}
            <Route path={'*'} element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
