import { JSX } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements extends JSX.IntrinsicElements {}
  }
}
