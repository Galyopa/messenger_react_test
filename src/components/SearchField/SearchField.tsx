import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchHelper';

export const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <label className="chats__label">
      <input
        className="chats__search"
        value={query}
        onChange={event => setSearchParams(
          getSearchWith(searchParams, {
            query: event.target.value || null,
          }),
        )}
        type="search"
        placeholder="Search"
      />
    </label>
  );
};
