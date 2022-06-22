/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ParsedQs } from 'qs';
import {
  RequestCreateUserDto,
  RequestUpdateUserDto,
  ResponseGetUserObjectDto,
  ResponseGetUsersObjectDto,
  UsersGenerated,
} from '../generated';

class UserController implements UsersGenerated {
  getUsers(
    req: Request<
      {},
      unknown,
      {},
      {
        paged: boolean;
        name?: string | undefined;
        organizationPk?: number | undefined;
        pageSize?: number | undefined;
        pageNumber?: number | undefined;
        sort?: string | undefined;
      } & ParsedQs,
      Record<string, unknown>
    >,
    res: Response<ResponseGetUsersObjectDto, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
  createUser(
    req: Request<{}, unknown, RequestCreateUserDto, ParsedQs, Record<string, unknown>>,
    res: Response<ResponseGetUserObjectDto, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
  getUserByPk(
    req: Request<{ userPk: number }, unknown, {}, ParsedQs, Record<string, unknown>>,
    res: Response<ResponseGetUserObjectDto, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
  updateUser(
    req: Request<{ userPk: number }, unknown, RequestUpdateUserDto, ParsedQs, Record<string, unknown>>,
    res: Response<ResponseGetUserObjectDto, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
  deleteUser(
    req: Request<{ userPk: number }, unknown, {}, ParsedQs, Record<string, unknown>>,
    res: Response<ResponseGetUserObjectDto, Record<string, unknown>>,
    next: NextFunction,
  ): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}

export default UserController;
