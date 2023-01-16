import { AttributifyAttributes } from 'windicss/types/jsx';

declare module 'react' {
  type HTMLAttributes = AttributifyAttributes;
}
