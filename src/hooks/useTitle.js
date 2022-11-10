import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - City Smiles`;
  }, [title]);
};

export default useTitle;
