export const baseUri = "https://api.nightwatch.io/api/v1"

export enum Resources {
    Keywords = "Keywords",
    Series = "Series",
    Urls = "Urls",
    Competitors = "Competitors"
}

export const DefaultResource: string = Resources.Keywords

export const ResourceOperations = {
    [Resources.Competitors]: {
        ListCompetitors: "listCompetitors",
        AddCompetitors: "addCompetitors",
        RemoveCompetitors: "removeCompetitors"
    },
    [Resources.Urls]: {
        ListUrls: "listUrls",
        CreateUrl: "createUrl",
        DeleteUrl: "deleteUrl",
        UpdateUrl: "updateUrl",
        GetUrl: "getUrl"
    },
    [Resources.Series]: {
        GetUrlSeries: "getUrlSeries",
        GetKeywordViewSeries: "getKeywordViewSeries",
        GetKeywordSeries: "getKeywordSeries",
        GetGroupSeries: "getGroupSeries",
        GetBacklinkViewSeries: "getBacklinkViewSeries",
        GetBacklinkUrlSeries: "getBacklinkUrlSeries",
    },
    [Resources.Keywords]: {
        ListKeywords: "listKeywords",
        AddKeywords: "addKeywords",
        DeleteKeywords: "deleteKeywords",
        KeywordResults: "keywordResults",
        ListDynamicViewKeywords: "listDynamicViewKeywords",
        UpdateKeywords: "updateKeywords"

    }
}