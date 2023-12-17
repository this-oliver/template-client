interface FetchConfig extends RequestInit {
  method?: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  contentType?: string | undefined; // if undefined, browser will automatically set content type
  authorization?: string;
}

export interface FetchError {
  status: number;
  statusText: string;
  message: string;
}

/**
 * returns true if a string is a url with or without protocol
 */
function _isValidUrl (str: string): boolean {
	const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

	return !!pattern.test(str);
}

export function useRequest () {
	const DEFAULT_METHOD = 'GET';
	const DEFAULT_CONTENT_TYPE = 'application/json';

	const runtimeConfig = useRuntimeConfig();
	const BASE_URL = runtimeConfig.public.baseUrl;

	// returns url if it is valid. otherwise returns url with prepended base url
	function _buildUrl (url: string): string {
		return _isValidUrl(url) ? url : `${BASE_URL}${url}`;
	}

	// returns a fetch config
	function _buildConfig(options?: FetchConfig): RequestInit {
		const config: RequestInit = {
			method: options?.method || DEFAULT_METHOD,
			headers: { 'Content-Type': DEFAULT_CONTENT_TYPE }
		};

		if(options?.contentType){
        config.headers!['Content-Type' as keyof HeadersInit] = options.contentType;
		} else if (options?.contentType === undefined){
			delete config.headers!['Content-Type' as keyof HeadersInit];
		}

		if (options?.body) {
			config.body = options.body;
		}

		if (options?.authorization) {
        config.headers!['Authorization' as keyof HeadersInit] = `Bearer ${options.authorization}`;
		}

		return config;
	}

	// returns a json string
	function _buildBody(body: object | string): string {
		if(typeof body === 'string'){
			return body;
		}

		return JSON.stringify(body);
	}

	// wrapper for fetch API with base url and default headers
	async function request (url: string, options?: FetchConfig) {
		try {
			const config: RequestInit = _buildConfig(options);

			const path = _buildUrl(url);

			const response = await fetch(path, { ...config, ...options });

			if (!response.ok) {
				throw response;
			}

			return response.json();
		} catch (error: unknown) {
			if (error instanceof Response) {
				const message = await error.text();

				throw new Error(message);
			} else if (error instanceof Error) {
				throw error;
			} else {
				throw new TypeError('Something went wrong.');
			}
		}
	}

	async function post (url: string, body: object | string, options?: FetchConfig) {
		url = _buildUrl(url);

		return useFetch(url, {
			..._buildConfig(options),
			body: _buildBody(body),
			method: 'POST',
		});
	}

	async function get (url: string, options?: FetchConfig) {
		url = _buildUrl(url);

		return useFetch(url, {
			..._buildConfig(options),
			method: 'GET',
		});
	}

	async function patch (url: string, body: object | string, options?: FetchConfig) {
		url = _buildUrl(url);

		return useFetch(url, {
			..._buildConfig(options),
			body: _buildBody(body),
			method: 'PATCH',
		});
	}

	// 'delete' is a reserved word
	async function remove (url: string, options?: FetchConfig) {
		url = _buildUrl(url);

		return useFetch(url, {
			..._buildConfig(options),
			method: 'DELETE',
		});
	}

	return { request, post, get, patch, remove };
}
