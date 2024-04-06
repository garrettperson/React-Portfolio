import styles from './App.module.css';
import Navigation from './components/navigation';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/footer';


function App() {
  return (
    <>
      <div className={styles.App}>
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
