import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Base = React.lazy(()=>import('./Base'));

const TimerView = React.lazy(()=>import('./views/TimerView'));

const MainRoutes = () => {
    return (
      <React.Suspense fallback={<p>Loading...</p>}>
        <Base>
          <Routes>
            <Route path="/" element={<TimerView/>} />
          </Routes>
        </Base>
      </React.Suspense>
    );
}


export default MainRoutes; 