/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestCreateUserDto } from '../models/RequestCreateUserDto';
import type { RequestUpdateUserDto } from '../models/RequestUpdateUserDto';
import type { ResponseGetUserObjectDto } from '../models/ResponseGetUserObjectDto';
import type { ResponseGetUsersObjectDto } from '../models/ResponseGetUsersObjectDto';

import { NextFunction, Request, Response } from 'express';
import { ParsedQs } from 'qs';

export interface UsersGenerated {
    /**
     * getUsers
     * @param paged Get data with pagination (Required)
     * @param name Name to search
     * @param organizationPk Pk of the organization to search
     * @param pageSize Number of elements per page
     * @param pageNumber Selected page
     * @param sort Sorted request
     * @returns ResponseGetUsersObjectDto Users response
     * @throws ApiError
     */

    getUsers(req: Request<{  }, unknown, {}, {  paged: boolean;  name?: string;  organizationPk?: number;  pageSize?: number;  pageNumber?: number;  sort?: string;  } & ParsedQs, Record<string, unknown>>, res: Response<ResponseGetUsersObjectDto, Record<string, unknown>>, next: NextFunction): Promise<unknown>

    /**
     * createUser
     * @param requestBody (Required)
     * @returns ResponseGetUserObjectDto User response
     * @throws ApiError
     */

    createUser(req: Request<{  }, unknown, {} & RequestCreateUserDto , {  } & ParsedQs, Record<string, unknown>>, res: Response<ResponseGetUserObjectDto, Record<string, unknown>>, next: NextFunction): Promise<unknown>

    /**
     * getUserByPk
     * @param userPk (Required)
     * @returns ResponseGetUserObjectDto User response
     * @throws ApiError
     */

    getUserByPk(req: Request<{ userPk: number;  }, unknown, {}, {  } & ParsedQs, Record<string, unknown>>, res: Response<ResponseGetUserObjectDto, Record<string, unknown>>, next: NextFunction): Promise<unknown>

    /**
     * updateUser
     * @param userPk (Required)
     * @param requestBody (Required)
     * @returns ResponseGetUserObjectDto User response
     * @throws ApiError
     */

    updateUser(req: Request<{ userPk: number;  }, unknown, {} & RequestUpdateUserDto , {  } & ParsedQs, Record<string, unknown>>, res: Response<ResponseGetUserObjectDto, Record<string, unknown>>, next: NextFunction): Promise<unknown>

    /**
     * deleteUser
     * @param userPk (Required)
     * @returns ResponseGetUserObjectDto User response
     * @throws ApiError
     */

    deleteUser(req: Request<{ userPk: number;  }, unknown, {}, {  } & ParsedQs, Record<string, unknown>>, res: Response<ResponseGetUserObjectDto, Record<string, unknown>>, next: NextFunction): Promise<unknown>

}
