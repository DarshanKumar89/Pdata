"use strict";
var host = '',
    port = '',
    baseUrl = '/api/atlas/',
    apiHost = (host !== '') ? host + ':' + port + baseUrl : baseUrl;

angular.module('pdata').constant('atlasConfig', {
    API_ENDPOINTS: {
        ABOUT: apiHost + 'admin/version',
        GET_ENTITY: apiHost + 'entities',
        ATTACH_DETACH_TRAITS: 'traits',
        SCHEMA_LINEAGE_PREPEND: apiHost + 'lineage/hive/table',
        SCHEMA_APPEND: 'schema',
        GRAPH: 'graph',
        TRAITS_LIST: apiHost + 'types?type=TRAIT',
        SEARCH: apiHost + 'discovery/search/',
        CREATE_TRAIT: apiHost + 'types'
    }
});
