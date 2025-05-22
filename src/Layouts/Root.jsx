import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useNavigation } from 'react-router';
import Spinner from '../Components/Spinner/Spinner';

const Root = () => {
  const navigation = useNavigation();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeout;

    if (navigation.state === 'loading') {
      // Show spinner only after 200ms to avoid flashing
      timeout = setTimeout(() => setShowSpinner(true), 200);
    } else {
      setShowSpinner(false);
      clearTimeout(timeout);
    }

    return () => clearTimeout(timeout);
  }, [navigation.state]);

  return (
    <div>
      <Navbar />
      {showSpinner && <Spinner />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
