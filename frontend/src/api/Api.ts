import { has, isEmpty } from "lodash";
import axios, { AxiosRequestConfig } from "axios";

/*
 * Generic request (wrapper around axios)
 */

// Default config settings
const _defaultHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
    credentials: "same-origin"
};
const _defaultTimeout = 10000;

export default class Api {
    constructor() { }

    /*
     * All supported methods below
     */

    head(url: string, args: AxiosRequestConfig = {}) {
        args.method = "HEAD";
        return this.request(url, args);
    }

    get(url: string, args: AxiosRequestConfig = {}) {
        args.method = "GET";
        return this.request(url, args);
    }

    post(url: string, args: AxiosRequestConfig = {}) {
        args.method = "POST";
        return this.request(url, args);
    }

    put(url: string, args: AxiosRequestConfig = {}) {
        args.method = "PUT";
        return this.request(url, args);
    }

    patch(url: string, args: AxiosRequestConfig = {}) {
        args.method = "PATCH";
        return this.request(url, args);
    }

    delete(url: string, args: AxiosRequestConfig = {}) {
        args.method = "DELETE";
        return this.request(url, args);
    }

    /*
     * Log funtions below
     */

    createResponseLog(method: string, url: string, time: Date) {
        console.log(`Response ${method}: ${url} completed. Took ${new Date().getTime() - time.getTime()}ms.`);
    }

    /**
     * request handler
     *
     * @param string url
     * @param AxiosRequestConfig args
     * @return Promise
     */
    request(url: string, args: AxiosRequestConfig) {
        const time = new Date();
        const { method, data, params, headers, timeout } = args;

        // url validation
        if (!url || typeof url !== "string") {
            return console.log(`No valid url given for method ${method}`);
        }

        const requestParams = isEmpty(params) ? undefined : { ...params };

        const requestHeaders = Object.assign({}, _defaultHeaders, headers);

        const requestTimeout = timeout ? timeout : _defaultTimeout;

        // return a promise
        return new Promise((resolve, reject) => {
            axios({
                url,
                method,
                headers: requestHeaders,
                data,
                params: requestParams,
                timeout: requestTimeout
            })
                .then(response => {
                    if (!has(response, 'data')) {
                        // axios allways has data... some big error here...
                        reject(response);
                    }

                    if (has(response.data, 'error')) {
                        // server response with an error
                        reject(response.data.error);
                    }

                    resolve(response.data);
                })
                .catch(error => {
                    // if (error.message) {
                    //     reject(error.message);
                    // }

                    if (error.config) {
                        const { method, url } = error.config;
                        const errorMessage = `Request ${method}: ${url} failed. Took ${new Date().getTime() - time.getTime()}ms.`;
                        reject(errorMessage);
                    }

                    reject('Something went wrong.');
                });
        });
    }
}
