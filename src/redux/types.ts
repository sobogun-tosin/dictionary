export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const SEARCH = "SEARCH";

export interface SearchState {
  word: string;
  phonetics: {
    text: string;
    audio: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[];
    }[];
  }[];
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
