import React from 'react';
import cn from 'classnames';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';
import { InputTrigger } from '../InputTrigger/InputTrigger';
import { Person } from '../../types/Person';
import {
  ApplyQuery,
  SetQuery,
  SetSelectedPersonSlug,
  SetSuggestionActive,
} from '../../types/types';

type Props = {
  suggestionActive: boolean;
  query: string;
  visiblePeople: Person[];
  applyQuery: ApplyQuery;
  setSelectedPersonSlug: SetSelectedPersonSlug;
  setQuery: SetQuery;
  setSuggestionActive: SetSuggestionActive;
};

export const DropDown: React.FC<Props> = ({
  suggestionActive,
  query,
  visiblePeople,
  applyQuery,
  setQuery,
  setSelectedPersonSlug,
  setSuggestionActive,
}) => {
  return (
    <div className={cn('dropdown',
      { 'is-active': suggestionActive === true })}
    >
      <InputTrigger
        query={query}
        setQuery={setQuery}
        applyQuery={applyQuery}
      />
      <DropDownMenu
        visiblePeople={visiblePeople}
        setQuery={setQuery}
        setSelectedPersonSlug={setSelectedPersonSlug}
        setSuggestionActive={setSuggestionActive}
      />
    </div>
  );
};
