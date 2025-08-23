/*!
 * Copyright 2017-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
import { createHttpLink } from '@apollo/client/link/http';
import { NonTerminatingLink } from './non-terminating-link';

// Local type definition for HttpOptions since it was removed in Apollo Client v4
interface HttpOptions {
    uri?: string;
    includeExtensions?: boolean;
    fetch?: typeof fetch;
    headers?: Record<string, string>;
    credentials?: RequestCredentials;
    fetchOptions?: RequestInit;
    useGETForQueries?: boolean;
    includeUnusedVariables?: boolean;
}

export class NonTerminatingHttpLink extends NonTerminatingLink {
    constructor(contextKey: string, options: HttpOptions) {
        const link = createHttpLink(options);

        super(contextKey, { link });
    }
}
