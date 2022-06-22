/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MetadataDto = {
    /**
     * Number of the current page
     */
    currentPage: number;
    /**
     * Number of total pages
     */
    totalPages: number;
    /**
     * Number of elements per page
     */
    pageSize: number;
    /**
     * Number of elements on the current page
     */
    numberElements: number;
    /**
     * Total number of elements for the query
     */
    totalElements: number;
    /**
     * The current active sort
     */
    sort: Array<string>;
};

