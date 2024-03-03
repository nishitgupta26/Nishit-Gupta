import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App } from '@capacitor/app';

// FOR DEEP LINKS , calling it in Intro
const AppUrlListener = () => {
    let history = useHistory();
    useEffect(() => {
      App.addListener('appUrlOpen', (event) => {
        const slug = event.url.split('.app').pop();
        if (slug) {
          history.push(slug);
        }
      });
    }, [history]);
  
    return null;
};

export default AppUrlListener;
