import '@testing-library/jest-dom'
import 'jest-styled-components'

import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

window.scrollTo = jest.fn();
window.HTMLElement.prototype.scrollTo = jest.fn();
