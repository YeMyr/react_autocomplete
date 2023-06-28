import React, { useCallback } from 'react';
import cn from 'classnames';
import { Person } from '../../types/Person';
import {
  HandleSelect,
  SetQuery,
  SetSelectedPersonSlug,
  SetSuggestionActive,
} from '../../types/types';

type Props = {
  person: Person;
  setSelectedPersonSlug: SetSelectedPersonSlug;
  setQuery: SetQuery;
  setSuggestionActive: SetSuggestionActive;
};

export const Dude:React.FC<Props> = ({
  person,
  setSelectedPersonSlug,
  setQuery,
  setSuggestionActive,
}) => {
  const handleSelect: HandleSelect = useCallback((
    event,
    personSlug,
    personName,
    status,
  ) => {
    event.preventDefault();
    setSelectedPersonSlug(personSlug);
    setQuery(personName);
    setSuggestionActive(status);
  }, []);

  return (
    <div className="dropdown-item">
      <a
        href="/"
        onClick={(event) => handleSelect(
          event, person.slug, person.name, false,
        )}
      >
        <p
          className={cn(
            { 'has-text-link': person.sex === 'm' },
            { 'has-text-danger': person.sex === 'f' },
          )}
        >
          {person.name}
        </p>
      </a>
    </div>
  );
};
