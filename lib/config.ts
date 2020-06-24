import Page from './models/Page';

const title: string = 'Example site';

const About: Page = {
  title: `${title} | About`,
  entry: 'AboutEntry'
}

const Home: Page = {
  title,
  entry: 'HomeEntry'
}

const NotFound: Page = {
  title: `${title} | 404`,
  entry: 'NotFoundEntry'
}

export default {
  About, Home, NotFound
}