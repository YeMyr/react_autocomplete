import React from 'react';
import { Dude } from '../Dude/Dude';
import { Person } from '../../types/Person';
import {
  SetQuery,
  SetSelectedPersonSlug,
  SetSuggestionActive,
} from '../../types/types';

type Props = {
  visiblePeople: Person[];
  setSelectedPersonSlug: SetSelectedPersonSlug;
  setQuery: SetQuery;
  setSuggestionActive: SetSuggestionActive;
};

export const PeopleList:React.FC<Props> = ({
  visiblePeople,
  setSelectedPersonSlug,
  setQuery,
  setSuggestionActive,
}) => (
  <>
    {visiblePeople.map(person => (
      <Dude
        key={person.slug}
        person={person}
        setSelectedPersonSlug={setSelectedPersonSlug}
        setQuery={setQuery}
        setSuggestionActive={setSuggestionActive}
      />
    ))}
  </>
);
