import React, { memo } from 'react';
import { Person } from '../../types/Person';
import { PeopleList } from '../PeopleList/PeopleList';
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

export const DropDownMenu:React.FC<Props> = memo(({
  visiblePeople,
  setSelectedPersonSlug,
  setQuery,
  setSuggestionActive,
}) => {
  return (
    <div className="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {visiblePeople.length !== 0
          ? (
            <PeopleList
              visiblePeople={visiblePeople}
              setSelectedPersonSlug={setSelectedPersonSlug}
              setQuery={setQuery}
              setSuggestionActive={setSuggestionActive}
            />
          )
          : (
            <div className="dropdown-item">
              <p className="has-text-danger">
                No matching suggestions
              </p>
            </div>
          )}
      </div>
    </div>
  );
});
