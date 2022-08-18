import { useSearchParams } from 'react-router-dom';

export const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <label className="chats__label">
      <input
        className="chats__search"
        value={query}
        onChange={event => setSearchParams({ query: event.target.value })}
        type="text"
        placeholder="Search"
      />
    </label>
  );
};
