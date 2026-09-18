import { useState } from "react";

export default function useDialogState<T extends string | boolean>(
  initialState: T | null = null
) {
  const [open, setOpen] = useState<T | null>(initialState);

  const handleSetOpen = (str: T | null) => {
    setOpen(str);
  };

  return [open, handleSetOpen] as const;
}
