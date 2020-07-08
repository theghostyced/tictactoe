import NotFoundError from './404';
import StartScreen from './startscreen';

export interface RouteType {
  path?: string;
  component: React.ElementType;
}

const routes = [
  {
    path: '/',
    component: StartScreen,
  },
  {
    component: NotFoundError // all unknown routs lands here
  }
];

export default routes;
