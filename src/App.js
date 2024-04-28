import Layout from "./Layout";
import Login from "./Login";
import Signup from "./SignUp";
import Profile from "./Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import LoadingSpinner from "./LoadingSpinner";

function App() {
  const [authInitialized, setAuthInitialized] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setAuthInitialized(true);
    });

    return () => unsubscribe();
  }, []);

  if (!authInitialized) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element = { <Layout></Layout> }>
          <Route index element = {user ? <Profile></Profile>  : <Login></Login> }></Route>
          <Route path = "/signup" element = { <Signup></Signup> } ></Route>
          <Route path = "/profile" element = { user ? <Profile></Profile> : <Login></Login>  }></Route>
          <Route path="/login" element={!user ? <Login/> : <Profile />} />
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
