import './index.scss';

import React, { lazy, Suspense } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from '@/components/ErrorBoundary';

import s from './App.scss';

const Login = lazy(() => import(/* webpackChunkName:'Admin', webpackPrefetch:true */ '@/pages/Login'));
const Home = lazy(() => import(/* webpackChunkName:'Home', webpackPrefetch:true */ '@/pages/Home'));

const App: React.FC = () => {
  return (
    <div className={s.AppBox}>
      {/* 导航部分 */}
      <nav>
        <Link to='/admin'>[admin]</Link>
        &nbsp;&nbsp;
        <Link to='/home'>[home]</Link>
      </nav>
      {/* 页面部分 */}
      <ErrorBoundary>
        <Suspense fallback={<>Please wait for loading...🐷</>}>
          <Routes>
            <Route path='login/*' element={<Login />} />
            <Route path='home' element={<Home />} />
            {/* 设置默认兜底路由 */}
            <Route path='*' element={<Navigate to='login' />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
