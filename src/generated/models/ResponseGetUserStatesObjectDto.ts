/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponseDto } from './BaseResponseDto';
import type { UserStateDto } from './UserStateDto';

export type ResponseGetUserStatesObjectDto = (BaseResponseDto & {
    response: Array<UserStateDto>;
});

