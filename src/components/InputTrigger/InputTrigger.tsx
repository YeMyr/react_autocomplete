import React from 'react';
import { ApplyQuery, HandleInput, SetQuery } from '../../types/types';

type Props = {
  query: string;
  setQuery: SetQuery;
  applyQuery: ApplyQuery;
};

export const InputTrigger:React.FC<Props> = ({
  query,
  setQuery,
  applyQuery,
}) => {
  const handleInput: HandleInput = (event) => {
    setQuery(event.target.value);
    applyQuery(event.target.value);
  };

  return (
    <div className="dropdown-trigger">
      <input
        type="text"
        placeholder="Enter a part of the name"
        className="input"
        value={query}
        onChange={handleInput}
      />
    </div>
  );
};
