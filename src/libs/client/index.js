import { ApolloClient, InMemoryCache } from "@apollo/client";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws"


const httpLink = new HttpLink({
    uri : 'https://osis-election.hasura.app/v1/graphql',
    headers : {
        'x-hasura-admin-secret' :
            '56YsV9sJqkqe4G6M8RbBpP1xivLLInP27Vmwbn10l8fuM17Cu4Mvx71MfBzsTC6n'
    }
})

const wsLink = new WebSocketLink({
    uri : 'wss://osis-election.hasura.app/v1/graphql',
    options : {
        reconnect : true,
        connectionParams : {
            headers : {
                'x-hasura-admin-secret' :
                    '56YsV9sJqkqe4G6M8RbBpP1xivLLInP27Vmwbn10l8fuM17Cu4Mvx71MfBzsTC6n'
            }
        }
    }
});


const splitLink = split(
    ({query}) => {
        const definiton = getMainDefinition(query);
        return(
            definiton.kind === 'OperationDefinition' &&
            definiton.operation === 'subscription'
        )
    },
    wsLink,
    httpLink
)

const client = new ApolloClient({
    link : splitLink,
    cache : new InMemoryCache(),
})

export default client