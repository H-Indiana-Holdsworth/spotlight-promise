/**
 * TODO:
 */

import { response } from 'msw';

export const fetchPonball = async () => {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();
  console.log(data);
};

export const getPonball = () => {
  fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((response) => console.log(response));
};

/**
 * TODO:
 */
export const fetchPonballType = async () => {
  const resp = await fetch('https://ponball.herokuapp.com/api/v1/machines');
  const data = await resp.json();
  const pinballTypes = data.filter((item) => item.type).map(({ item }) => item);
  console.log(pinballTypes);
};

export const getPonballType = async () => {
  fetch('https://ponball.herokuapp.com/api/v1/machines')
    .then((data) => data.json())
    .then((ponballType) => {
      console.log('ponballType', ponballType.data.type);
    });
};
/**
 * TODO:
 */
// export const fetchMusic = async () => {
//   const resp = await fetch(
//     'http://musicbrainz.org/ws/2/artist/5b11f4ce-a62d-471e-81fc-a69a8278c7da?fmt=json'
//   );
//   const data = await resp.json();
//   return data.map((item) => item.name);
//   console.log(data);
// };
/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */

/**
 * TODO:
 */
