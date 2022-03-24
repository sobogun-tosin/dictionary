export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SEARCH = "SEARCH";

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

export interface Definition {
  definition: string;
  synonyms: string[];
}

export interface Phonetic {
  text: string;
  audio: string;
}

export interface InitialState {
  loading: boolean;
  error: string;
  search: SearchState[];
}

export interface SearchState {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
}

interface SearchAction {
  type: typeof SEARCH;
  payload: SearchState[];
}
interface LoadingAction {
  type: typeof LOADING;
}
interface ErrorAction {
  type: typeof ERROR;
  payload: string;
}
export type DictionaryAction = SearchAction | LoadingAction | ErrorAction;
