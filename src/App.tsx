import React, { useCallback, useMemo, useState } from 'react';
import './App.scss';
import { peopleFromServer } from './data/people';
import { DropDown } from './components/DropDown/DropDown';
import { debounce } from './helpers';
import { SelectedPerson } from './components/SelectedPerson/SelectedPerson';

export const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [appliedQuery, setAppliedQuery] = useState<string>('');
  const [selectedPersonSlug, setSelectedPersonSlug] = useState<string>('');
  const [suggestionActive, setSuggestionActive] = useState<boolean>(false);

  const visiblePeople = useMemo(() => {
    const normalizedQuery = appliedQuery.toLowerCase().trim();

    if (appliedQuery) {
      setSuggestionActive(true);
    }

    if (!appliedQuery) {
      setSelectedPersonSlug('');
      setSuggestionActive(false);
    }

    return peopleFromServer.filter(person => (
      person.name.toLowerCase().includes(normalizedQuery)
    ));
  }, [appliedQuery]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applyQuery = useCallback(
    debounce(setAppliedQuery, 1000),
    [],
  );

  return (
    <main className="section">
      <SelectedPerson
        visiblePeople={visiblePeople}
        selectedPersonSlug={selectedPersonSlug}
      />

      <DropDown
        query={query}
        suggestionActive={suggestionActive}
        visiblePeople={visiblePeople}
        applyQuery={applyQuery}
        setQuery={setQuery}
        setSelectedPersonSlug={setSelectedPersonSlug}
        setSuggestionActive={setSuggestionActive}
      />
    </main>
  );
};
