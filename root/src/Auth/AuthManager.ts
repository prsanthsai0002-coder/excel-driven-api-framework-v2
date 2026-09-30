import { basicAuth } from "./BasicAuth";
import { bearerAuth } from "./BearerAuth";
import { apiKeyAuth } from "./ApiKeyAuth";
import { oauth2Auth } from "./OAuth2Auth";

export function authManager(
    authType: string,
    authValue: string
): Record<string, string> {

    switch (
        authType.toUpperCase()
    ) {

        case "BASIC":

            return basicAuth(
                authValue
            );

        case "BEARER":

            return bearerAuth(
                authValue
            );

        case "APIKEY":

            return apiKeyAuth(
                authValue
            );

        case "OAUTH2":

            return oauth2Auth(
                authValue
            );

        case "NONE":

        default:

            return {};
    }
}
