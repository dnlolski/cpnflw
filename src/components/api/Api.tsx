import { SearchResult } from '../../App';


class Api {

  baseUrl = 'https://api.publicapis.org/';

  searchForApi = (phrase: string): Promise<SearchResult> => {
    return fetch(`${this.baseUrl}entries?title=${phrase}&cors=yes`)
      .then(response => {
        if(!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
  }

}

export default Api;
