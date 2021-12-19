import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
  //bad approach!
  await jsonPlaceholder.get("./posts");

  return {
    type: "FETCH_POSTS",
    payload: response,
  };
};
