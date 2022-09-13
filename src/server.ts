import App from '@/app';
import IndexRoute from '@routes/index.route';
import PeopleRoute from '@routes/people.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new PeopleRoute()]);

app.listen();
