import { useState } from "react";

export const useModal = (): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(!isOpen);
  return [isOpen, openModal];
};
