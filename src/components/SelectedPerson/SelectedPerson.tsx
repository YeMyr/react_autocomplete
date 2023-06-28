import React from 'react';
import { Person } from '../../types/Person';
import { findPersonBySlug } from '../../helpers';

type Props = {
  visiblePeople: Person[];
  selectedPersonSlug: string;
};

export const SelectedPerson:React.FC<Props> = ({
  visiblePeople,
  selectedPersonSlug,
}) => {
  const selectedPerson = findPersonBySlug(visiblePeople, selectedPersonSlug);

  return (
    <h1 className="title">
      {selectedPersonSlug
        ? `${selectedPerson?.name} (${selectedPerson?.born} = ${selectedPerson?.died})`
        : 'No selected person'}
    </h1>
  );
};
