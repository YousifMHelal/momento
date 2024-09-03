import { Models } from "appwrite";
import GridPostList from "./GridPostList";
import Loader from "./Loader";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[]; // Correct type: array of Documents
};

const SearchResult = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;

  // Directly use searchedPosts as an array
  if (searchedPosts.length > 0) {
    return <GridPostList posts={searchedPosts} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
};

export default SearchResult;
