import { buildConfig } from 'payload/config';
import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'https://jockloc.herokuapp.com/',
  admin: {
    user: Users.slug,
  },
  collections: [
    Categories,
    Posts,
    Tags,
    Users,
  ],
});
