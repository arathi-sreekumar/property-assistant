import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../state/store';
import { reset } from '../state/buying/actions';

export const renderWithProvider = (ui: React.ReactNode) => {
  store.dispatch(reset())

  const result = render(
    <Provider store={{ ...store }}>
      {ui}
    </Provider>
  )

  return (
    {
      result,
      store
    }
  )
}