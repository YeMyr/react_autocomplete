export type HandleSelect = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  personSlug: string,
  personName: string,
  status: boolean,
) => void;

export type SetSelectedPersonSlug = (slug: string) => void;

export type SetQuery = (query: string) => void;

export type SetSuggestionActive = (status: boolean) => void;

export type ApplyQuery = (query: string) => void;

export type HandleInput = (event: React.ChangeEvent<HTMLInputElement>) => void;
