/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponseDto } from './BaseResponseDto';
import type { UserDto } from './UserDto';

export type ResponseGetUserObjectDto = (BaseResponseDto & {
    response: UserDto;
});

