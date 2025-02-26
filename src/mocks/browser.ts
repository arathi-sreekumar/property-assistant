import { setupWorker } from 'msw/browser';
import handlers from './handlers';

export const worker = setupWorker(...handlers);

if (
  import.meta.env.VITE_NODE_ENV === 'development' && 
  import.meta.env.VITE_MSW_DISABLED !== 'yes'
) {
  worker.start();
}
