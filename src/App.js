import React from 'react';
import { Button } from '@material-ui/core';

const getMedia = async () => {
  const constraints = { audio: true, video: true };
  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch (err) {
    /* エラーを処理 */
    console.log(err);
  }
};

getMedia();

const App = () => {
  return (
    <Button color="primary" variant="contained">
      Hello, World!
    </Button>
  );
};

export default App;
