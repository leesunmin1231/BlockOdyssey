import React from 'react';
import { getCurrentPage } from '../../../../util/getSessionStorage';

type PropsType = { clickHandler: () => void; imgSrc: string; imgClassName: string; disableTriggerPage: number };

export default function ArrowButton({ clickHandler, imgSrc, imgClassName, disableTriggerPage }: PropsType) {
  return (
    <button
      type="button"
      className="page_button"
      disabled={getCurrentPage() === disableTriggerPage}
      onClick={clickHandler}
    >
      <img alt="arrow" className={imgClassName} src={imgSrc} />
    </button>
  );
}
