/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponseDto } from './BaseResponseDto';
import type { GetUsersDto } from './GetUsersDto';

export type ResponseGetUsersObjectDto = (BaseResponseDto & {
    response: GetUsersDto;
});

