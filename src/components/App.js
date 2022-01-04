import React, { useState } from 'react';
import InputFormLoacl from './InputFormLoacl';
import InputFormRemote from './InputFormRemote';

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
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');
  console.log(localPeerName, remotePeerName);
  return (
    <>
      <InputFormLoacl
        localPeerName={localPeerName}
        setLocalPeerName={setLocalPeerName}
      />
      <InputFormRemote
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
        setRemotePeerName={setRemotePeerName}
      />
    </>
  );
};

export default App;
