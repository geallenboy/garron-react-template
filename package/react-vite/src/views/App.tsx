import React from 'react';
import { Outlet } from 'react-router';

import { ErrorBoundary } from '@/components/error-boudnary';
import { PageError } from '@/components/lib';
import { FooterPage, HeaderPage, SiderPage } from '@/layout';

function App() {
  return (
    <div className="app">
      <ErrorBoundary fallbackRender={PageError}>
        <HeaderPage></HeaderPage>
        <div className="flex ">
          <SiderPage />
          <div>
            <React.Suspense fallback={<div>loading</div>}>
              <div className="app-content">
                <Outlet />
              </div>
            </React.Suspense>
            <FooterPage />
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
