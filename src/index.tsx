/* @refresh reload */
import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

import './index.css';
import { App } from './pages/App/App';

render(() => <Router base={import.meta.env.BASE_URL}><App /></Router>, document.body);
