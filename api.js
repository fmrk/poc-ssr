import "isomorphic-fetch";

export const fetchData = async (id) => {
    try {
      const response = await fetch(`https://xkcd.now.sh/${id}`);
      const comic = await response.json();
      return { comic, id };
    } catch (e) {
      console.log(e);
    }
  };
  