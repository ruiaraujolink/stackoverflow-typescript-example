/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseResponseDto } from './BaseResponseDto';
import type { SystemDto } from './SystemDto';

export type ResponseGetUserSystemsObjectDto = (BaseResponseDto & {
    response: Array<SystemDto>;
});

