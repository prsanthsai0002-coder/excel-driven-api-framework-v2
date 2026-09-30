export interface RequestModel {
    tcId: string;
    run: string;

    module: string;
    description: string;

    method: string;

    baseURL: string;
    endPoint: string;

    queryParams: string;
    headers: string;

    authType: string;
    authValue: string;

    requestBody: string;

    expectedStatusCode: number;

    retryCount: number;

    dependencyTC: string;

    environment: string;
    
    extractPath: string;
    
    storeAs: string;
}