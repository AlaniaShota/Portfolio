import { AIPopup } from "./AIPopup";

import { useState } from "react";

export const AIButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="ai-button" onClick={() => setOpen(true)}>
        🤖
      </button>

      {open && <AIPopup onClose={() => setOpen(false)} />}
    </>
  );
};
