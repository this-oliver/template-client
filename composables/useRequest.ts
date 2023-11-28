interface FetchConfig extends RequestInit {
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  contentType?: string | null;
  authorization?: string;
}

export interface FetchError {
  status: number;
  statusText: string;
  content: any;
}

/**
 * returns true if a string is a url with or without protocol
 */
function _isValidUrl(str: string): boolean {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return !!pattern.test(str);
}

export function useRequest() {
  const runtimeConfig = useRuntimeConfig();
  const BASE_URL = runtimeConfig.public.baseUrl;

  const DEFAULT_METHOD = 'GET';
  const DEFAULT_CONTENT_TYPE = 'application/json';

  /**
   * wrapper for fetch API with base url and default headers
   */
  async function request(url: string, options?: FetchConfig) {
    const path = _isValidUrl(url) ? url : `${BASE_URL}${url}`;

    try {
      const config: RequestInit = {
        method: options?.method || DEFAULT_METHOD,
        headers: {
          'Content-Type': options?.contentType || DEFAULT_CONTENT_TYPE,
          Authorization: options?.authorization ? `Bearer ${options.authorization}` : ''
        },
        body: options?.body
      };

      if (options?.contentType === null) {
        delete config.headers!['Content-Type' as keyof HeadersInit];
      }

      const res = await fetch(path, config);

      if (!res.ok) {
        throw res;
      }

      return res.json();
    } catch (error) {
      throw {
        status: (error as any).status,
        statusText: (error as any).statusText,
        content: undefined
      } as FetchError;
    }
  }

  return { request };
}
