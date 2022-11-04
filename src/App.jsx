import Header from './components/header'
import { ErrorBoundary } from 'react-error-boundary'
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from "react";
import Home from './components/home'
import ErrorPage from './components/errorpage'
import Footer from './components/footer'
import About from './components/about'
import UserDetail from './components/userdetail'
import User from './components/user'
const Users = lazy(() => import('./components/users'));
const AllUser = lazy(() => import('./components/alluser'));
import './App.css'
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="user-container" >
      <h2>An Error Has Occurred somewhere in your code</h2>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Go Home</button>
    
    </div>
  );
};

export default function App() {

let navigate = useNavigate();
   function handleClick() {
    navigate('/')
  }
  return (
    <div className="app">
      <Header />
      <ErrorBoundary FallbackComponent={ErrorFallback}
        onReset={handleClick}>
        <main className="user-container" >
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={< About />} />
              <Route path="/users" element={<AllUser />}>
                <Route index element={<Users />} />
                <Route path=":id" element={<User />} />
              </Route>
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
      </ErrorBoundary>
      <Footer />
    </div>
  )
}
