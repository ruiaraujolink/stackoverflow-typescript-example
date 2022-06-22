/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetadataDto } from './MetadataDto';
import type { UserDto } from './UserDto';

export type GetUsersDto = {
    metadata: MetadataDto;
    payload: Array<UserDto>;
};

