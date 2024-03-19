import {
  Link,
  Routes,
  Route
} from "react-router-dom";

import Home from "@pages/Home";
import Display from "@pages/Display";
import AuthLayout from "@components/layouts/AuthLayout";
import { withNonAuthLayout } from "@components/layouts/withLayout";

import '@styles/App.css';

function App() {
  return (
    <>

        <Routes>
            <Route
                path="/"
                exact
                element={withNonAuthLayout(<Home />)}
            />
            
            <Route
                path='/display'
                element={
                    <AuthLayout>
                        <Display />
                    </AuthLayout>
                }
            />

        </Routes>


    </>
  );
}

export default App;
