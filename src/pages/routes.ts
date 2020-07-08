import NotFoundError from './404';
import PlayerSelectScreen from './playerselect';
import StartScreen from './startscreen';

export interface RouteType {
  path?: string;
  component: React.ElementType;
}

// Holds all our give route paths and
// exposes it to the entire app for easy reusability
export const routePaths = {
  startScreen: '/',
  playerSelect: '/playerselect'
};

// Apps routes which will be mapped through and passed into our
// `Route` component from react-router-dom
// Learn more about it here => https://reactrouter.com/web/api/Route
const routes = [
  {
    path: routePaths.startScreen,
    component: StartScreen,
  },
  {
    path: routePaths.playerSelect,
    component: PlayerSelectScreen
  },
  {
    component: NotFoundError // all unknown routes lands here
  }
];

export default routes;
