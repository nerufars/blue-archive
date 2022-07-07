import { useState } from 'react';
import { useBetween } from 'use-between';

interface Props {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

// Hooks
export const useShareState = () => {
  const [showAudio, setShowAudio] = useState<boolean>(false);

  return {
    showAudio,
    setShowAudio,
  };
};


// Past Hooks useBetween
const Audios: React.FunctionComponent<Props> = ({ className, style, src }) => {
  const { showAudio } = useBetween(useShareState);

  return (
    <>
      {showAudio ? (
        <audio src={src} autoPlay loop className={className} style={style} />
      ) : (
        ''
      )}
    </>
  );
};

export default Audios;
