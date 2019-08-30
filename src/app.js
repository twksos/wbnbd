import App from './App.html';

const app = new App({
  target: document.querySelector('app'),
  props: {
    name: 'world'
  }
});

export default app;
