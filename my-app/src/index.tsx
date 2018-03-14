import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import Hello from './containers/Hello';
import ContactPage from './components/ContactPage';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';
import { enthusiasm } from './reducers/index';
import { EnthusiamState } from './types/index';

import { Provider } from 'react-redux';

type AppState = FormStateMap | EnthusiamState;

const rootReducer = combineReducers<AppState>({
  enthusiasm,
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
});

// tslint:disable-next-line: no-any
let devTools = (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f;

const store = createStore<AppState>(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store} >
    <ContactPage />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
