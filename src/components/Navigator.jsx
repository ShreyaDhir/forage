import Results from './Results';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Navigator = () => {
  return (
        <div className="p-4">
            <Routes>
                <Route exact path="/">
                    <Navigate to="/search" />
                </Route>
                <Route exact path={['search', 'images', 'news', 'videos']} >
                    <Results />
                </Route>
            </Routes>
        </div>
    );
};

export default Navigator;
