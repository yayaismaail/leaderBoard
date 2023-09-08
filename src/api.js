// Game id = Oa3b5S6xeBlvjuJLTxGr
// Game Name = My cool new game

export const storedScores = async () => {
  const response = await window.fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Oa3b5S6xeBlvjuJLTxGr/scores/');
  const data = await response.json();
  return { status: response.status, data };
};

export const newScore = async ({ user, score }) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Oa3b5S6xeBlvjuJLTxGr/scores/', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  const data = await response.json();
  return { status: response.status, data };
};