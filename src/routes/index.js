import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Contact from '~/pages/Contact';

const publicRoutes = [
  { path: '/', component: Home},
  { path: '/following', component: Following},
  { path: '/contact', component: Contact}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }