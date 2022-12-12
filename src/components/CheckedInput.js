import React, { useState } from "react";

export const CheckedInput = ({ item }) => {
  const [checked, setChecked] = useState(item.done);

  return (
    <div>
      <input
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      {item.text}
    </div>
  );
};
