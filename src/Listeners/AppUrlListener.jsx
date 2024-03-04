import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { App } from '@capacitor/app';

// FOR DEEP LINKS , calling it in Intro
const AppUrlListener = () => {
    let navigate = useNavigate();
    useEffect(() => {
      App.addListener('appUrlOpen', (event) => {
        const slug = event.url.split('.app').pop();
        if (slug) {
          navigate(slug);
        }
      });
    }, [navigate]);
  
    return null;
};

export default AppUrlListener;
