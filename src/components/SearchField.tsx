import { useSearchParams } from 'react-router-dom';

export const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <input
      value={query}
      onChange={event => setSearchParams({ query: event.target.value })}
      className="input"
      type="text"
      placeholder="Search"
    />
  );
};
