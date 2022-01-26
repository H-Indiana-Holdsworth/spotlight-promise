import { useEffect } from 'react';
import {
  // fetchMusic,
  fetchPonball,
  fetchPonballType,
  getPonball,
  getPonballType,
} from './services/promise-me';

export default function App() {
  useEffect(() => {
    fetchPonball();
    fetchPonballType();
    getPonball();
    // fetchMusic();
  });
  return <h1>Hello World</h1>;
}
