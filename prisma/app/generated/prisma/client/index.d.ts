
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Feature
 * 
 */
export type Feature = $Result.DefaultSelection<Prisma.$FeaturePayload>
/**
 * Model ServiceFeature
 * 
 */
export type ServiceFeature = $Result.DefaultSelection<Prisma.$ServiceFeaturePayload>
/**
 * Model ServiceOrder
 * 
 */
export type ServiceOrder = $Result.DefaultSelection<Prisma.$ServiceOrderPayload>
/**
 * Model ServiceOrderItem
 * 
 */
export type ServiceOrderItem = $Result.DefaultSelection<Prisma.$ServiceOrderItemPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const FeatureType: {
  STANDARD: 'STANDARD',
  OPTIONAL: 'OPTIONAL',
  OTHER: 'OTHER'
};

export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType]


export const ServiceOrderStatus: {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_DISCUSSION: 'IN_DISCUSSION',
  APPROVED: 'APPROVED',
  DONE: 'DONE'
};

export type ServiceOrderStatus = (typeof ServiceOrderStatus)[keyof typeof ServiceOrderStatus]


export const ServiceOrderItemType: {
  INCLUDED_FEATURE: 'INCLUDED_FEATURE',
  EXTRA_FEATURE: 'EXTRA_FEATURE',
  MAINTENANCE: 'MAINTENANCE',
  BUGFIX: 'BUGFIX',
  OTHER: 'OTHER'
};

export type ServiceOrderItemType = (typeof ServiceOrderItemType)[keyof typeof ServiceOrderItemType]


export const TaskStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
  TESTED: 'TESTED'
};

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type FeatureType = $Enums.FeatureType

export const FeatureType: typeof $Enums.FeatureType

export type ServiceOrderStatus = $Enums.ServiceOrderStatus

export const ServiceOrderStatus: typeof $Enums.ServiceOrderStatus

export type ServiceOrderItemType = $Enums.ServiceOrderItemType

export const ServiceOrderItemType: typeof $Enums.ServiceOrderItemType

export type TaskStatus = $Enums.TaskStatus

export const TaskStatus: typeof $Enums.TaskStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feature`: Exposes CRUD operations for the **Feature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Features
    * const features = await prisma.feature.findMany()
    * ```
    */
  get feature(): Prisma.FeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceFeature`: Exposes CRUD operations for the **ServiceFeature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceFeatures
    * const serviceFeatures = await prisma.serviceFeature.findMany()
    * ```
    */
  get serviceFeature(): Prisma.ServiceFeatureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceOrder`: Exposes CRUD operations for the **ServiceOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceOrders
    * const serviceOrders = await prisma.serviceOrder.findMany()
    * ```
    */
  get serviceOrder(): Prisma.ServiceOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceOrderItem`: Exposes CRUD operations for the **ServiceOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceOrderItems
    * const serviceOrderItems = await prisma.serviceOrderItem.findMany()
    * ```
    */
  get serviceOrderItem(): Prisma.ServiceOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    Service: 'Service',
    Feature: 'Feature',
    ServiceFeature: 'ServiceFeature',
    ServiceOrder: 'ServiceOrder',
    ServiceOrderItem: 'ServiceOrderItem',
    Task: 'Task'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "service" | "feature" | "serviceFeature" | "serviceOrder" | "serviceOrderItem" | "task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Feature: {
        payload: Prisma.$FeaturePayload<ExtArgs>
        fields: Prisma.FeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findFirst: {
            args: Prisma.FeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          findMany: {
            args: Prisma.FeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          create: {
            args: Prisma.FeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          createMany: {
            args: Prisma.FeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          delete: {
            args: Prisma.FeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          update: {
            args: Prisma.FeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          deleteMany: {
            args: Prisma.FeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>[]
          }
          upsert: {
            args: Prisma.FeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturePayload>
          }
          aggregate: {
            args: Prisma.FeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeature>
          }
          groupBy: {
            args: Prisma.FeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureCountAggregateOutputType> | number
          }
        }
      }
      ServiceFeature: {
        payload: Prisma.$ServiceFeaturePayload<ExtArgs>
        fields: Prisma.ServiceFeatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFeatureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFeatureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          findFirst: {
            args: Prisma.ServiceFeatureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFeatureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          findMany: {
            args: Prisma.ServiceFeatureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>[]
          }
          create: {
            args: Prisma.ServiceFeatureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          createMany: {
            args: Prisma.ServiceFeatureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceFeatureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>[]
          }
          delete: {
            args: Prisma.ServiceFeatureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          update: {
            args: Prisma.ServiceFeatureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          deleteMany: {
            args: Prisma.ServiceFeatureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceFeatureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceFeatureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>[]
          }
          upsert: {
            args: Prisma.ServiceFeatureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceFeaturePayload>
          }
          aggregate: {
            args: Prisma.ServiceFeatureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceFeature>
          }
          groupBy: {
            args: Prisma.ServiceFeatureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceFeatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceFeatureCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceFeatureCountAggregateOutputType> | number
          }
        }
      }
      ServiceOrder: {
        payload: Prisma.$ServiceOrderPayload<ExtArgs>
        fields: Prisma.ServiceOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          findFirst: {
            args: Prisma.ServiceOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          findMany: {
            args: Prisma.ServiceOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          create: {
            args: Prisma.ServiceOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          createMany: {
            args: Prisma.ServiceOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          delete: {
            args: Prisma.ServiceOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          update: {
            args: Prisma.ServiceOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          deleteMany: {
            args: Prisma.ServiceOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>[]
          }
          upsert: {
            args: Prisma.ServiceOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderPayload>
          }
          aggregate: {
            args: Prisma.ServiceOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceOrder>
          }
          groupBy: {
            args: Prisma.ServiceOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderCountAggregateOutputType> | number
          }
        }
      }
      ServiceOrderItem: {
        payload: Prisma.$ServiceOrderItemPayload<ExtArgs>
        fields: Prisma.ServiceOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          findFirst: {
            args: Prisma.ServiceOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          findMany: {
            args: Prisma.ServiceOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>[]
          }
          create: {
            args: Prisma.ServiceOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          createMany: {
            args: Prisma.ServiceOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>[]
          }
          delete: {
            args: Prisma.ServiceOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          update: {
            args: Prisma.ServiceOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.ServiceOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.ServiceOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceOrderItemPayload>
          }
          aggregate: {
            args: Prisma.ServiceOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceOrderItem>
          }
          groupBy: {
            args: Prisma.ServiceOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceOrderItemCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    service?: ServiceOmit
    feature?: FeatureOmit
    serviceFeature?: ServiceFeatureOmit
    serviceOrder?: ServiceOrderOmit
    serviceOrderItem?: ServiceOrderItemOmit
    task?: TaskOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Task: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | UserCountOutputTypeCountTaskArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    orders: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    serviceFeatures: number
    orders: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceFeatures?: boolean | ServiceCountOutputTypeCountServiceFeaturesArgs
    orders?: boolean | ServiceCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountServiceFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceFeatureWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
  }


  /**
   * Count Type FeatureCountOutputType
   */

  export type FeatureCountOutputType = {
    serviceFeatures: number
  }

  export type FeatureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceFeatures?: boolean | FeatureCountOutputTypeCountServiceFeaturesArgs
  }

  // Custom InputTypes
  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureCountOutputType
     */
    select?: FeatureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeatureCountOutputType without action
   */
  export type FeatureCountOutputTypeCountServiceFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceFeatureWhereInput
  }


  /**
   * Count Type ServiceOrderCountOutputType
   */

  export type ServiceOrderCountOutputType = {
    items: number
    tasks: number
  }

  export type ServiceOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ServiceOrderCountOutputTypeCountItemsArgs
    tasks?: boolean | ServiceOrderCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderCountOutputType
     */
    select?: ServiceOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderItemWhereInput
  }

  /**
   * ServiceOrderCountOutputType without action
   */
  export type ServiceOrderCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ServiceOrderItemCountOutputType
   */

  export type ServiceOrderItemCountOutputType = {
    tasks: number
  }

  export type ServiceOrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ServiceOrderItemCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ServiceOrderItemCountOutputType without action
   */
  export type ServiceOrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItemCountOutputType
     */
    select?: ServiceOrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceOrderItemCountOutputType without action
   */
  export type ServiceOrderItemCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Task?: boolean | User$TaskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Task?: boolean | User$TaskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Task: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Task<T extends User$TaskArgs<ExtArgs> = {}>(args?: Subset<T, User$TaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Task
   */
  export type User$TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    orders?: boolean | Client$ordersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Client$ordersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      orders: Prisma.$ServiceOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Client$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Client$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly isDeleted: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly deletedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.orders
   */
  export type Client$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    cursor?: ServiceOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    id: number | null
    initialPrice: Decimal | null
  }

  export type ServiceSumAggregateOutputType = {
    id: number | null
    initialPrice: Decimal | null
  }

  export type ServiceMinAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    name: string | null
    slug: string | null
    description: string | null
    isHighlight: boolean | null
    initialPrice: Decimal | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    name: string | null
    slug: string | null
    description: string | null
    isHighlight: boolean | null
    initialPrice: Decimal | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    uniqueId: number
    name: number
    slug: number
    description: number
    isHighlight: number
    initialPrice: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    id?: true
    initialPrice?: true
  }

  export type ServiceSumAggregateInputType = {
    id?: true
    initialPrice?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    uniqueId?: true
    name?: true
    slug?: true
    description?: true
    isHighlight?: true
    initialPrice?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    uniqueId?: true
    name?: true
    slug?: true
    description?: true
    isHighlight?: true
    initialPrice?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    uniqueId?: true
    name?: true
    slug?: true
    description?: true
    isHighlight?: true
    initialPrice?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: number
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight: boolean
    initialPrice: Decimal
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isHighlight?: boolean
    initialPrice?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    serviceFeatures?: boolean | Service$serviceFeaturesArgs<ExtArgs>
    orders?: boolean | Service$ordersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isHighlight?: boolean
    initialPrice?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isHighlight?: boolean
    initialPrice?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    isHighlight?: boolean
    initialPrice?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueId" | "name" | "slug" | "description" | "isHighlight" | "initialPrice" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceFeatures?: boolean | Service$serviceFeaturesArgs<ExtArgs>
    orders?: boolean | Service$ordersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      serviceFeatures: Prisma.$ServiceFeaturePayload<ExtArgs>[]
      orders: Prisma.$ServiceOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uniqueId: string
      name: string
      slug: string
      description: string
      isHighlight: boolean
      initialPrice: Prisma.Decimal
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceFeatures<T extends Service$serviceFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, Service$serviceFeaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Service$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Service$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'Int'>
    readonly uniqueId: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly slug: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly isHighlight: FieldRef<"Service", 'Boolean'>
    readonly initialPrice: FieldRef<"Service", 'Decimal'>
    readonly isDeleted: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly deletedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.serviceFeatures
   */
  export type Service$serviceFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    where?: ServiceFeatureWhereInput
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    cursor?: ServiceFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * Service.orders
   */
  export type Service$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    cursor?: ServiceOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Feature
   */

  export type AggregateFeature = {
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  export type FeatureAvgAggregateOutputType = {
    id: number | null
  }

  export type FeatureSumAggregateOutputType = {
    id: number | null
  }

  export type FeatureMinAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FeatureMaxAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FeatureCountAggregateOutputType = {
    id: number
    uniqueId: number
    name: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type FeatureAvgAggregateInputType = {
    id?: true
  }

  export type FeatureSumAggregateInputType = {
    id?: true
  }

  export type FeatureMinAggregateInputType = {
    id?: true
    uniqueId?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FeatureMaxAggregateInputType = {
    id?: true
    uniqueId?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FeatureCountAggregateInputType = {
    id?: true
    uniqueId?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type FeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feature to aggregate.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Features
    **/
    _count?: true | FeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureMaxAggregateInputType
  }

  export type GetFeatureAggregateType<T extends FeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeature[P]>
      : GetScalarType<T[P], AggregateFeature[P]>
  }




  export type FeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureWhereInput
    orderBy?: FeatureOrderByWithAggregationInput | FeatureOrderByWithAggregationInput[]
    by: FeatureScalarFieldEnum[] | FeatureScalarFieldEnum
    having?: FeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureCountAggregateInputType | true
    _avg?: FeatureAvgAggregateInputType
    _sum?: FeatureSumAggregateInputType
    _min?: FeatureMinAggregateInputType
    _max?: FeatureMaxAggregateInputType
  }

  export type FeatureGroupByOutputType = {
    id: number
    uniqueId: string
    name: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: FeatureCountAggregateOutputType | null
    _avg: FeatureAvgAggregateOutputType | null
    _sum: FeatureSumAggregateOutputType | null
    _min: FeatureMinAggregateOutputType | null
    _max: FeatureMaxAggregateOutputType | null
  }

  type GetFeatureGroupByPayload<T extends FeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureGroupByOutputType[P]>
        }
      >
    >


  export type FeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    serviceFeatures?: boolean | Feature$serviceFeaturesArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["feature"]>

  export type FeatureSelectScalar = {
    id?: boolean
    uniqueId?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type FeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueId" | "name" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["feature"]>
  export type FeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceFeatures?: boolean | Feature$serviceFeaturesArgs<ExtArgs>
    _count?: boolean | FeatureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feature"
    objects: {
      serviceFeatures: Prisma.$ServiceFeaturePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uniqueId: string
      name: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["feature"]>
    composites: {}
  }

  type FeatureGetPayload<S extends boolean | null | undefined | FeatureDefaultArgs> = $Result.GetResult<Prisma.$FeaturePayload, S>

  type FeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureCountAggregateInputType | true
    }

  export interface FeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feature'], meta: { name: 'Feature' } }
    /**
     * Find zero or one Feature that matches the filter.
     * @param {FeatureFindUniqueArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFindUniqueArgs>(args: SelectSubset<T, FeatureFindUniqueArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFindUniqueOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFindFirstArgs>(args?: SelectSubset<T, FeatureFindFirstArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindFirstOrThrowArgs} args - Arguments to find a Feature
     * @example
     * // Get one Feature
     * const feature = await prisma.feature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Features that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Features
     * const features = await prisma.feature.findMany()
     * 
     * // Get first 10 Features
     * const features = await prisma.feature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureWithIdOnly = await prisma.feature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFindManyArgs>(args?: SelectSubset<T, FeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feature.
     * @param {FeatureCreateArgs} args - Arguments to create a Feature.
     * @example
     * // Create one Feature
     * const Feature = await prisma.feature.create({
     *   data: {
     *     // ... data to create a Feature
     *   }
     * })
     * 
     */
    create<T extends FeatureCreateArgs>(args: SelectSubset<T, FeatureCreateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Features.
     * @param {FeatureCreateManyArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureCreateManyArgs>(args?: SelectSubset<T, FeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Features and returns the data saved in the database.
     * @param {FeatureCreateManyAndReturnArgs} args - Arguments to create many Features.
     * @example
     * // Create many Features
     * const feature = await prisma.feature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feature.
     * @param {FeatureDeleteArgs} args - Arguments to delete one Feature.
     * @example
     * // Delete one Feature
     * const Feature = await prisma.feature.delete({
     *   where: {
     *     // ... filter to delete one Feature
     *   }
     * })
     * 
     */
    delete<T extends FeatureDeleteArgs>(args: SelectSubset<T, FeatureDeleteArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feature.
     * @param {FeatureUpdateArgs} args - Arguments to update one Feature.
     * @example
     * // Update one Feature
     * const feature = await prisma.feature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureUpdateArgs>(args: SelectSubset<T, FeatureUpdateArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Features.
     * @param {FeatureDeleteManyArgs} args - Arguments to filter Features to delete.
     * @example
     * // Delete a few Features
     * const { count } = await prisma.feature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureDeleteManyArgs>(args?: SelectSubset<T, FeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureUpdateManyArgs>(args: SelectSubset<T, FeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Features and returns the data updated in the database.
     * @param {FeatureUpdateManyAndReturnArgs} args - Arguments to update many Features.
     * @example
     * // Update many Features
     * const feature = await prisma.feature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Features and only return the `id`
     * const featureWithIdOnly = await prisma.feature.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feature.
     * @param {FeatureUpsertArgs} args - Arguments to update or create a Feature.
     * @example
     * // Update or create a Feature
     * const feature = await prisma.feature.upsert({
     *   create: {
     *     // ... data to create a Feature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feature we want to update
     *   }
     * })
     */
    upsert<T extends FeatureUpsertArgs>(args: SelectSubset<T, FeatureUpsertArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Features.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureCountArgs} args - Arguments to filter Features to count.
     * @example
     * // Count the number of Features
     * const count = await prisma.feature.count({
     *   where: {
     *     // ... the filter for the Features we want to count
     *   }
     * })
    **/
    count<T extends FeatureCountArgs>(
      args?: Subset<T, FeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureAggregateArgs>(args: Subset<T, FeatureAggregateArgs>): Prisma.PrismaPromise<GetFeatureAggregateType<T>>

    /**
     * Group by Feature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureGroupByArgs['orderBy'] }
        : { orderBy?: FeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feature model
   */
  readonly fields: FeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    serviceFeatures<T extends Feature$serviceFeaturesArgs<ExtArgs> = {}>(args?: Subset<T, Feature$serviceFeaturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feature model
   */
  interface FeatureFieldRefs {
    readonly id: FieldRef<"Feature", 'Int'>
    readonly uniqueId: FieldRef<"Feature", 'String'>
    readonly name: FieldRef<"Feature", 'String'>
    readonly isDeleted: FieldRef<"Feature", 'Boolean'>
    readonly createdAt: FieldRef<"Feature", 'DateTime'>
    readonly updatedAt: FieldRef<"Feature", 'DateTime'>
    readonly deletedAt: FieldRef<"Feature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feature findUnique
   */
  export type FeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findUniqueOrThrow
   */
  export type FeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature findFirst
   */
  export type FeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findFirstOrThrow
   */
  export type FeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Feature to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Features.
     */
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature findMany
   */
  export type FeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter, which Features to fetch.
     */
    where?: FeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Features to fetch.
     */
    orderBy?: FeatureOrderByWithRelationInput | FeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Features.
     */
    cursor?: FeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Features from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Features.
     */
    skip?: number
    distinct?: FeatureScalarFieldEnum | FeatureScalarFieldEnum[]
  }

  /**
   * Feature create
   */
  export type FeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a Feature.
     */
    data: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
  }

  /**
   * Feature createMany
   */
  export type FeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature createManyAndReturn
   */
  export type FeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to create many Features.
     */
    data: FeatureCreateManyInput | FeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feature update
   */
  export type FeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a Feature.
     */
    data: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
    /**
     * Choose, which Feature to update.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature updateMany
   */
  export type FeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature updateManyAndReturn
   */
  export type FeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * The data used to update Features.
     */
    data: XOR<FeatureUpdateManyMutationInput, FeatureUncheckedUpdateManyInput>
    /**
     * Filter which Features to update
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to update.
     */
    limit?: number
  }

  /**
   * Feature upsert
   */
  export type FeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the Feature to update in case it exists.
     */
    where: FeatureWhereUniqueInput
    /**
     * In case the Feature found by the `where` argument doesn't exist, create a new Feature with this data.
     */
    create: XOR<FeatureCreateInput, FeatureUncheckedCreateInput>
    /**
     * In case the Feature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureUpdateInput, FeatureUncheckedUpdateInput>
  }

  /**
   * Feature delete
   */
  export type FeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
    /**
     * Filter which Feature to delete.
     */
    where: FeatureWhereUniqueInput
  }

  /**
   * Feature deleteMany
   */
  export type FeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Features to delete
     */
    where?: FeatureWhereInput
    /**
     * Limit how many Features to delete.
     */
    limit?: number
  }

  /**
   * Feature.serviceFeatures
   */
  export type Feature$serviceFeaturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    where?: ServiceFeatureWhereInput
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    cursor?: ServiceFeatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * Feature without action
   */
  export type FeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feature
     */
    select?: FeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feature
     */
    omit?: FeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeatureInclude<ExtArgs> | null
  }


  /**
   * Model ServiceFeature
   */

  export type AggregateServiceFeature = {
    _count: ServiceFeatureCountAggregateOutputType | null
    _avg: ServiceFeatureAvgAggregateOutputType | null
    _sum: ServiceFeatureSumAggregateOutputType | null
    _min: ServiceFeatureMinAggregateOutputType | null
    _max: ServiceFeatureMaxAggregateOutputType | null
  }

  export type ServiceFeatureAvgAggregateOutputType = {
    id: number | null
    serviceId: number | null
    featureId: number | null
    hours: number | null
    unitPrice: Decimal | null
    quantity: number | null
  }

  export type ServiceFeatureSumAggregateOutputType = {
    id: number | null
    serviceId: number | null
    featureId: number | null
    hours: number | null
    unitPrice: Decimal | null
    quantity: number | null
  }

  export type ServiceFeatureMinAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    serviceId: number | null
    featureId: number | null
    type: $Enums.FeatureType | null
    isIncluded: boolean | null
    hours: number | null
    unitPrice: Decimal | null
    quantity: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceFeatureMaxAggregateOutputType = {
    id: number | null
    uniqueId: string | null
    serviceId: number | null
    featureId: number | null
    type: $Enums.FeatureType | null
    isIncluded: boolean | null
    hours: number | null
    unitPrice: Decimal | null
    quantity: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceFeatureCountAggregateOutputType = {
    id: number
    uniqueId: number
    serviceId: number
    featureId: number
    type: number
    isIncluded: number
    hours: number
    unitPrice: number
    quantity: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ServiceFeatureAvgAggregateInputType = {
    id?: true
    serviceId?: true
    featureId?: true
    hours?: true
    unitPrice?: true
    quantity?: true
  }

  export type ServiceFeatureSumAggregateInputType = {
    id?: true
    serviceId?: true
    featureId?: true
    hours?: true
    unitPrice?: true
    quantity?: true
  }

  export type ServiceFeatureMinAggregateInputType = {
    id?: true
    uniqueId?: true
    serviceId?: true
    featureId?: true
    type?: true
    isIncluded?: true
    hours?: true
    unitPrice?: true
    quantity?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceFeatureMaxAggregateInputType = {
    id?: true
    uniqueId?: true
    serviceId?: true
    featureId?: true
    type?: true
    isIncluded?: true
    hours?: true
    unitPrice?: true
    quantity?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceFeatureCountAggregateInputType = {
    id?: true
    uniqueId?: true
    serviceId?: true
    featureId?: true
    type?: true
    isIncluded?: true
    hours?: true
    unitPrice?: true
    quantity?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ServiceFeatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFeature to aggregate.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceFeatures
    **/
    _count?: true | ServiceFeatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceFeatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceFeatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceFeatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceFeatureMaxAggregateInputType
  }

  export type GetServiceFeatureAggregateType<T extends ServiceFeatureAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceFeature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceFeature[P]>
      : GetScalarType<T[P], AggregateServiceFeature[P]>
  }




  export type ServiceFeatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceFeatureWhereInput
    orderBy?: ServiceFeatureOrderByWithAggregationInput | ServiceFeatureOrderByWithAggregationInput[]
    by: ServiceFeatureScalarFieldEnum[] | ServiceFeatureScalarFieldEnum
    having?: ServiceFeatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceFeatureCountAggregateInputType | true
    _avg?: ServiceFeatureAvgAggregateInputType
    _sum?: ServiceFeatureSumAggregateInputType
    _min?: ServiceFeatureMinAggregateInputType
    _max?: ServiceFeatureMaxAggregateInputType
  }

  export type ServiceFeatureGroupByOutputType = {
    id: number
    uniqueId: string
    serviceId: number
    featureId: number
    type: $Enums.FeatureType
    isIncluded: boolean
    hours: number
    unitPrice: Decimal | null
    quantity: number | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ServiceFeatureCountAggregateOutputType | null
    _avg: ServiceFeatureAvgAggregateOutputType | null
    _sum: ServiceFeatureSumAggregateOutputType | null
    _min: ServiceFeatureMinAggregateOutputType | null
    _max: ServiceFeatureMaxAggregateOutputType | null
  }

  type GetServiceFeatureGroupByPayload<T extends ServiceFeatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceFeatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceFeatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceFeatureGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceFeatureGroupByOutputType[P]>
        }
      >
    >


  export type ServiceFeatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    serviceId?: boolean
    featureId?: boolean
    type?: boolean
    isIncluded?: boolean
    hours?: boolean
    unitPrice?: boolean
    quantity?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceFeature"]>

  export type ServiceFeatureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    serviceId?: boolean
    featureId?: boolean
    type?: boolean
    isIncluded?: boolean
    hours?: boolean
    unitPrice?: boolean
    quantity?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceFeature"]>

  export type ServiceFeatureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    serviceId?: boolean
    featureId?: boolean
    type?: boolean
    isIncluded?: boolean
    hours?: boolean
    unitPrice?: boolean
    quantity?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceFeature"]>

  export type ServiceFeatureSelectScalar = {
    id?: boolean
    uniqueId?: boolean
    serviceId?: boolean
    featureId?: boolean
    type?: boolean
    isIncluded?: boolean
    hours?: boolean
    unitPrice?: boolean
    quantity?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ServiceFeatureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueId" | "serviceId" | "featureId" | "type" | "isIncluded" | "hours" | "unitPrice" | "quantity" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["serviceFeature"]>
  export type ServiceFeatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type ServiceFeatureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }
  export type ServiceFeatureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    feature?: boolean | FeatureDefaultArgs<ExtArgs>
  }

  export type $ServiceFeaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceFeature"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      feature: Prisma.$FeaturePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uniqueId: string
      serviceId: number
      featureId: number
      type: $Enums.FeatureType
      isIncluded: boolean
      hours: number
      unitPrice: Prisma.Decimal | null
      quantity: number | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["serviceFeature"]>
    composites: {}
  }

  type ServiceFeatureGetPayload<S extends boolean | null | undefined | ServiceFeatureDefaultArgs> = $Result.GetResult<Prisma.$ServiceFeaturePayload, S>

  type ServiceFeatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFeatureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceFeatureCountAggregateInputType | true
    }

  export interface ServiceFeatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceFeature'], meta: { name: 'ServiceFeature' } }
    /**
     * Find zero or one ServiceFeature that matches the filter.
     * @param {ServiceFeatureFindUniqueArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFeatureFindUniqueArgs>(args: SelectSubset<T, ServiceFeatureFindUniqueArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceFeature that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFeatureFindUniqueOrThrowArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFeatureFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFeatureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceFeature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureFindFirstArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFeatureFindFirstArgs>(args?: SelectSubset<T, ServiceFeatureFindFirstArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceFeature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureFindFirstOrThrowArgs} args - Arguments to find a ServiceFeature
     * @example
     * // Get one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFeatureFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFeatureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceFeatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceFeatures
     * const serviceFeatures = await prisma.serviceFeature.findMany()
     * 
     * // Get first 10 ServiceFeatures
     * const serviceFeatures = await prisma.serviceFeature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceFeatureWithIdOnly = await prisma.serviceFeature.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFeatureFindManyArgs>(args?: SelectSubset<T, ServiceFeatureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceFeature.
     * @param {ServiceFeatureCreateArgs} args - Arguments to create a ServiceFeature.
     * @example
     * // Create one ServiceFeature
     * const ServiceFeature = await prisma.serviceFeature.create({
     *   data: {
     *     // ... data to create a ServiceFeature
     *   }
     * })
     * 
     */
    create<T extends ServiceFeatureCreateArgs>(args: SelectSubset<T, ServiceFeatureCreateArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceFeatures.
     * @param {ServiceFeatureCreateManyArgs} args - Arguments to create many ServiceFeatures.
     * @example
     * // Create many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceFeatureCreateManyArgs>(args?: SelectSubset<T, ServiceFeatureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceFeatures and returns the data saved in the database.
     * @param {ServiceFeatureCreateManyAndReturnArgs} args - Arguments to create many ServiceFeatures.
     * @example
     * // Create many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceFeatures and only return the `id`
     * const serviceFeatureWithIdOnly = await prisma.serviceFeature.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceFeatureCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceFeatureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceFeature.
     * @param {ServiceFeatureDeleteArgs} args - Arguments to delete one ServiceFeature.
     * @example
     * // Delete one ServiceFeature
     * const ServiceFeature = await prisma.serviceFeature.delete({
     *   where: {
     *     // ... filter to delete one ServiceFeature
     *   }
     * })
     * 
     */
    delete<T extends ServiceFeatureDeleteArgs>(args: SelectSubset<T, ServiceFeatureDeleteArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceFeature.
     * @param {ServiceFeatureUpdateArgs} args - Arguments to update one ServiceFeature.
     * @example
     * // Update one ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceFeatureUpdateArgs>(args: SelectSubset<T, ServiceFeatureUpdateArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceFeatures.
     * @param {ServiceFeatureDeleteManyArgs} args - Arguments to filter ServiceFeatures to delete.
     * @example
     * // Delete a few ServiceFeatures
     * const { count } = await prisma.serviceFeature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceFeatureDeleteManyArgs>(args?: SelectSubset<T, ServiceFeatureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceFeatureUpdateManyArgs>(args: SelectSubset<T, ServiceFeatureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceFeatures and returns the data updated in the database.
     * @param {ServiceFeatureUpdateManyAndReturnArgs} args - Arguments to update many ServiceFeatures.
     * @example
     * // Update many ServiceFeatures
     * const serviceFeature = await prisma.serviceFeature.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceFeatures and only return the `id`
     * const serviceFeatureWithIdOnly = await prisma.serviceFeature.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceFeatureUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceFeatureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceFeature.
     * @param {ServiceFeatureUpsertArgs} args - Arguments to update or create a ServiceFeature.
     * @example
     * // Update or create a ServiceFeature
     * const serviceFeature = await prisma.serviceFeature.upsert({
     *   create: {
     *     // ... data to create a ServiceFeature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceFeature we want to update
     *   }
     * })
     */
    upsert<T extends ServiceFeatureUpsertArgs>(args: SelectSubset<T, ServiceFeatureUpsertArgs<ExtArgs>>): Prisma__ServiceFeatureClient<$Result.GetResult<Prisma.$ServiceFeaturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceFeatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureCountArgs} args - Arguments to filter ServiceFeatures to count.
     * @example
     * // Count the number of ServiceFeatures
     * const count = await prisma.serviceFeature.count({
     *   where: {
     *     // ... the filter for the ServiceFeatures we want to count
     *   }
     * })
    **/
    count<T extends ServiceFeatureCountArgs>(
      args?: Subset<T, ServiceFeatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceFeatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceFeatureAggregateArgs>(args: Subset<T, ServiceFeatureAggregateArgs>): Prisma.PrismaPromise<GetServiceFeatureAggregateType<T>>

    /**
     * Group by ServiceFeature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFeatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceFeatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceFeatureGroupByArgs['orderBy'] }
        : { orderBy?: ServiceFeatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceFeatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceFeatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceFeature model
   */
  readonly fields: ServiceFeatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceFeature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceFeatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    feature<T extends FeatureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeatureDefaultArgs<ExtArgs>>): Prisma__FeatureClient<$Result.GetResult<Prisma.$FeaturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceFeature model
   */
  interface ServiceFeatureFieldRefs {
    readonly id: FieldRef<"ServiceFeature", 'Int'>
    readonly uniqueId: FieldRef<"ServiceFeature", 'String'>
    readonly serviceId: FieldRef<"ServiceFeature", 'Int'>
    readonly featureId: FieldRef<"ServiceFeature", 'Int'>
    readonly type: FieldRef<"ServiceFeature", 'FeatureType'>
    readonly isIncluded: FieldRef<"ServiceFeature", 'Boolean'>
    readonly hours: FieldRef<"ServiceFeature", 'Int'>
    readonly unitPrice: FieldRef<"ServiceFeature", 'Decimal'>
    readonly quantity: FieldRef<"ServiceFeature", 'Int'>
    readonly isDeleted: FieldRef<"ServiceFeature", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceFeature", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceFeature", 'DateTime'>
    readonly deletedAt: FieldRef<"ServiceFeature", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceFeature findUnique
   */
  export type ServiceFeatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature findUniqueOrThrow
   */
  export type ServiceFeatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature findFirst
   */
  export type ServiceFeatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceFeatures.
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceFeatures.
     */
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * ServiceFeature findFirstOrThrow
   */
  export type ServiceFeatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeature to fetch.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceFeatures.
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceFeatures.
     */
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * ServiceFeature findMany
   */
  export type ServiceFeatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter, which ServiceFeatures to fetch.
     */
    where?: ServiceFeatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceFeatures to fetch.
     */
    orderBy?: ServiceFeatureOrderByWithRelationInput | ServiceFeatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceFeatures.
     */
    cursor?: ServiceFeatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceFeatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceFeatures.
     */
    skip?: number
    distinct?: ServiceFeatureScalarFieldEnum | ServiceFeatureScalarFieldEnum[]
  }

  /**
   * ServiceFeature create
   */
  export type ServiceFeatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceFeature.
     */
    data: XOR<ServiceFeatureCreateInput, ServiceFeatureUncheckedCreateInput>
  }

  /**
   * ServiceFeature createMany
   */
  export type ServiceFeatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceFeatures.
     */
    data: ServiceFeatureCreateManyInput | ServiceFeatureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceFeature createManyAndReturn
   */
  export type ServiceFeatureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceFeatures.
     */
    data: ServiceFeatureCreateManyInput | ServiceFeatureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceFeature update
   */
  export type ServiceFeatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceFeature.
     */
    data: XOR<ServiceFeatureUpdateInput, ServiceFeatureUncheckedUpdateInput>
    /**
     * Choose, which ServiceFeature to update.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature updateMany
   */
  export type ServiceFeatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceFeatures.
     */
    data: XOR<ServiceFeatureUpdateManyMutationInput, ServiceFeatureUncheckedUpdateManyInput>
    /**
     * Filter which ServiceFeatures to update
     */
    where?: ServiceFeatureWhereInput
    /**
     * Limit how many ServiceFeatures to update.
     */
    limit?: number
  }

  /**
   * ServiceFeature updateManyAndReturn
   */
  export type ServiceFeatureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * The data used to update ServiceFeatures.
     */
    data: XOR<ServiceFeatureUpdateManyMutationInput, ServiceFeatureUncheckedUpdateManyInput>
    /**
     * Filter which ServiceFeatures to update
     */
    where?: ServiceFeatureWhereInput
    /**
     * Limit how many ServiceFeatures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceFeature upsert
   */
  export type ServiceFeatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceFeature to update in case it exists.
     */
    where: ServiceFeatureWhereUniqueInput
    /**
     * In case the ServiceFeature found by the `where` argument doesn't exist, create a new ServiceFeature with this data.
     */
    create: XOR<ServiceFeatureCreateInput, ServiceFeatureUncheckedCreateInput>
    /**
     * In case the ServiceFeature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceFeatureUpdateInput, ServiceFeatureUncheckedUpdateInput>
  }

  /**
   * ServiceFeature delete
   */
  export type ServiceFeatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
    /**
     * Filter which ServiceFeature to delete.
     */
    where: ServiceFeatureWhereUniqueInput
  }

  /**
   * ServiceFeature deleteMany
   */
  export type ServiceFeatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceFeatures to delete
     */
    where?: ServiceFeatureWhereInput
    /**
     * Limit how many ServiceFeatures to delete.
     */
    limit?: number
  }

  /**
   * ServiceFeature without action
   */
  export type ServiceFeatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceFeature
     */
    select?: ServiceFeatureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceFeature
     */
    omit?: ServiceFeatureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceFeatureInclude<ExtArgs> | null
  }


  /**
   * Model ServiceOrder
   */

  export type AggregateServiceOrder = {
    _count: ServiceOrderCountAggregateOutputType | null
    _avg: ServiceOrderAvgAggregateOutputType | null
    _sum: ServiceOrderSumAggregateOutputType | null
    _min: ServiceOrderMinAggregateOutputType | null
    _max: ServiceOrderMaxAggregateOutputType | null
  }

  export type ServiceOrderAvgAggregateOutputType = {
    serviceId: number | null
    initialPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type ServiceOrderSumAggregateOutputType = {
    serviceId: number | null
    initialPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type ServiceOrderMinAggregateOutputType = {
    id: string | null
    projectName: string | null
    serviceId: number | null
    clientId: string | null
    initialPrice: Decimal | null
    totalPrice: Decimal | null
    requirements: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    status: $Enums.ServiceOrderStatus | null
  }

  export type ServiceOrderMaxAggregateOutputType = {
    id: string | null
    projectName: string | null
    serviceId: number | null
    clientId: string | null
    initialPrice: Decimal | null
    totalPrice: Decimal | null
    requirements: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    status: $Enums.ServiceOrderStatus | null
  }

  export type ServiceOrderCountAggregateOutputType = {
    id: number
    projectName: number
    serviceId: number
    clientId: number
    initialPrice: number
    totalPrice: number
    requirements: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    status: number
    _all: number
  }


  export type ServiceOrderAvgAggregateInputType = {
    serviceId?: true
    initialPrice?: true
    totalPrice?: true
  }

  export type ServiceOrderSumAggregateInputType = {
    serviceId?: true
    initialPrice?: true
    totalPrice?: true
  }

  export type ServiceOrderMinAggregateInputType = {
    id?: true
    projectName?: true
    serviceId?: true
    clientId?: true
    initialPrice?: true
    totalPrice?: true
    requirements?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    status?: true
  }

  export type ServiceOrderMaxAggregateInputType = {
    id?: true
    projectName?: true
    serviceId?: true
    clientId?: true
    initialPrice?: true
    totalPrice?: true
    requirements?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    status?: true
  }

  export type ServiceOrderCountAggregateInputType = {
    id?: true
    projectName?: true
    serviceId?: true
    clientId?: true
    initialPrice?: true
    totalPrice?: true
    requirements?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    status?: true
    _all?: true
  }

  export type ServiceOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrder to aggregate.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceOrders
    **/
    _count?: true | ServiceOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceOrderMaxAggregateInputType
  }

  export type GetServiceOrderAggregateType<T extends ServiceOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceOrder[P]>
      : GetScalarType<T[P], AggregateServiceOrder[P]>
  }




  export type ServiceOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderWhereInput
    orderBy?: ServiceOrderOrderByWithAggregationInput | ServiceOrderOrderByWithAggregationInput[]
    by: ServiceOrderScalarFieldEnum[] | ServiceOrderScalarFieldEnum
    having?: ServiceOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceOrderCountAggregateInputType | true
    _avg?: ServiceOrderAvgAggregateInputType
    _sum?: ServiceOrderSumAggregateInputType
    _min?: ServiceOrderMinAggregateInputType
    _max?: ServiceOrderMaxAggregateInputType
  }

  export type ServiceOrderGroupByOutputType = {
    id: string
    projectName: string | null
    serviceId: number
    clientId: string
    initialPrice: Decimal
    totalPrice: Decimal
    requirements: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    status: $Enums.ServiceOrderStatus
    _count: ServiceOrderCountAggregateOutputType | null
    _avg: ServiceOrderAvgAggregateOutputType | null
    _sum: ServiceOrderSumAggregateOutputType | null
    _min: ServiceOrderMinAggregateOutputType | null
    _max: ServiceOrderMaxAggregateOutputType | null
  }

  type GetServiceOrderGroupByPayload<T extends ServiceOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceOrderGroupByOutputType[P]>
        }
      >
    >


  export type ServiceOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectName?: boolean
    serviceId?: boolean
    clientId?: boolean
    initialPrice?: boolean
    totalPrice?: boolean
    requirements?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    status?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    items?: boolean | ServiceOrder$itemsArgs<ExtArgs>
    tasks?: boolean | ServiceOrder$tasksArgs<ExtArgs>
    _count?: boolean | ServiceOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectName?: boolean
    serviceId?: boolean
    clientId?: boolean
    initialPrice?: boolean
    totalPrice?: boolean
    requirements?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    status?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectName?: boolean
    serviceId?: boolean
    clientId?: boolean
    initialPrice?: boolean
    totalPrice?: boolean
    requirements?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    status?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrder"]>

  export type ServiceOrderSelectScalar = {
    id?: boolean
    projectName?: boolean
    serviceId?: boolean
    clientId?: boolean
    initialPrice?: boolean
    totalPrice?: boolean
    requirements?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    status?: boolean
  }

  export type ServiceOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectName" | "serviceId" | "clientId" | "initialPrice" | "totalPrice" | "requirements" | "isDeleted" | "createdAt" | "updatedAt" | "deletedAt" | "status", ExtArgs["result"]["serviceOrder"]>
  export type ServiceOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    items?: boolean | ServiceOrder$itemsArgs<ExtArgs>
    tasks?: boolean | ServiceOrder$tasksArgs<ExtArgs>
    _count?: boolean | ServiceOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ServiceOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ServiceOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceOrder"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      client: Prisma.$ClientPayload<ExtArgs>
      items: Prisma.$ServiceOrderItemPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectName: string | null
      serviceId: number
      clientId: string
      initialPrice: Prisma.Decimal
      totalPrice: Prisma.Decimal
      requirements: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      status: $Enums.ServiceOrderStatus
    }, ExtArgs["result"]["serviceOrder"]>
    composites: {}
  }

  type ServiceOrderGetPayload<S extends boolean | null | undefined | ServiceOrderDefaultArgs> = $Result.GetResult<Prisma.$ServiceOrderPayload, S>

  type ServiceOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceOrderCountAggregateInputType | true
    }

  export interface ServiceOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceOrder'], meta: { name: 'ServiceOrder' } }
    /**
     * Find zero or one ServiceOrder that matches the filter.
     * @param {ServiceOrderFindUniqueArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceOrderFindUniqueArgs>(args: SelectSubset<T, ServiceOrderFindUniqueArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceOrderFindUniqueOrThrowArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindFirstArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceOrderFindFirstArgs>(args?: SelectSubset<T, ServiceOrderFindFirstArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindFirstOrThrowArgs} args - Arguments to find a ServiceOrder
     * @example
     * // Get one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceOrders
     * const serviceOrders = await prisma.serviceOrder.findMany()
     * 
     * // Get first 10 ServiceOrders
     * const serviceOrders = await prisma.serviceOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceOrderFindManyArgs>(args?: SelectSubset<T, ServiceOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceOrder.
     * @param {ServiceOrderCreateArgs} args - Arguments to create a ServiceOrder.
     * @example
     * // Create one ServiceOrder
     * const ServiceOrder = await prisma.serviceOrder.create({
     *   data: {
     *     // ... data to create a ServiceOrder
     *   }
     * })
     * 
     */
    create<T extends ServiceOrderCreateArgs>(args: SelectSubset<T, ServiceOrderCreateArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceOrders.
     * @param {ServiceOrderCreateManyArgs} args - Arguments to create many ServiceOrders.
     * @example
     * // Create many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceOrderCreateManyArgs>(args?: SelectSubset<T, ServiceOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceOrders and returns the data saved in the database.
     * @param {ServiceOrderCreateManyAndReturnArgs} args - Arguments to create many ServiceOrders.
     * @example
     * // Create many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceOrders and only return the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceOrder.
     * @param {ServiceOrderDeleteArgs} args - Arguments to delete one ServiceOrder.
     * @example
     * // Delete one ServiceOrder
     * const ServiceOrder = await prisma.serviceOrder.delete({
     *   where: {
     *     // ... filter to delete one ServiceOrder
     *   }
     * })
     * 
     */
    delete<T extends ServiceOrderDeleteArgs>(args: SelectSubset<T, ServiceOrderDeleteArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceOrder.
     * @param {ServiceOrderUpdateArgs} args - Arguments to update one ServiceOrder.
     * @example
     * // Update one ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceOrderUpdateArgs>(args: SelectSubset<T, ServiceOrderUpdateArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceOrders.
     * @param {ServiceOrderDeleteManyArgs} args - Arguments to filter ServiceOrders to delete.
     * @example
     * // Delete a few ServiceOrders
     * const { count } = await prisma.serviceOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceOrderDeleteManyArgs>(args?: SelectSubset<T, ServiceOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceOrderUpdateManyArgs>(args: SelectSubset<T, ServiceOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrders and returns the data updated in the database.
     * @param {ServiceOrderUpdateManyAndReturnArgs} args - Arguments to update many ServiceOrders.
     * @example
     * // Update many ServiceOrders
     * const serviceOrder = await prisma.serviceOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceOrders and only return the `id`
     * const serviceOrderWithIdOnly = await prisma.serviceOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceOrder.
     * @param {ServiceOrderUpsertArgs} args - Arguments to update or create a ServiceOrder.
     * @example
     * // Update or create a ServiceOrder
     * const serviceOrder = await prisma.serviceOrder.upsert({
     *   create: {
     *     // ... data to create a ServiceOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceOrder we want to update
     *   }
     * })
     */
    upsert<T extends ServiceOrderUpsertArgs>(args: SelectSubset<T, ServiceOrderUpsertArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderCountArgs} args - Arguments to filter ServiceOrders to count.
     * @example
     * // Count the number of ServiceOrders
     * const count = await prisma.serviceOrder.count({
     *   where: {
     *     // ... the filter for the ServiceOrders we want to count
     *   }
     * })
    **/
    count<T extends ServiceOrderCountArgs>(
      args?: Subset<T, ServiceOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceOrderAggregateArgs>(args: Subset<T, ServiceOrderAggregateArgs>): Prisma.PrismaPromise<GetServiceOrderAggregateType<T>>

    /**
     * Group by ServiceOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceOrderGroupByArgs['orderBy'] }
        : { orderBy?: ServiceOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceOrder model
   */
  readonly fields: ServiceOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends ServiceOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends ServiceOrder$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrder$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceOrder model
   */
  interface ServiceOrderFieldRefs {
    readonly id: FieldRef<"ServiceOrder", 'String'>
    readonly projectName: FieldRef<"ServiceOrder", 'String'>
    readonly serviceId: FieldRef<"ServiceOrder", 'Int'>
    readonly clientId: FieldRef<"ServiceOrder", 'String'>
    readonly initialPrice: FieldRef<"ServiceOrder", 'Decimal'>
    readonly totalPrice: FieldRef<"ServiceOrder", 'Decimal'>
    readonly requirements: FieldRef<"ServiceOrder", 'String'>
    readonly isDeleted: FieldRef<"ServiceOrder", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceOrder", 'DateTime'>
    readonly deletedAt: FieldRef<"ServiceOrder", 'DateTime'>
    readonly status: FieldRef<"ServiceOrder", 'ServiceOrderStatus'>
  }
    

  // Custom InputTypes
  /**
   * ServiceOrder findUnique
   */
  export type ServiceOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder findUniqueOrThrow
   */
  export type ServiceOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder findFirst
   */
  export type ServiceOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrders.
     */
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder findFirstOrThrow
   */
  export type ServiceOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrder to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrders.
     */
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder findMany
   */
  export type ServiceOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrders to fetch.
     */
    where?: ServiceOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrders to fetch.
     */
    orderBy?: ServiceOrderOrderByWithRelationInput | ServiceOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceOrders.
     */
    cursor?: ServiceOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrders.
     */
    skip?: number
    distinct?: ServiceOrderScalarFieldEnum | ServiceOrderScalarFieldEnum[]
  }

  /**
   * ServiceOrder create
   */
  export type ServiceOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceOrder.
     */
    data: XOR<ServiceOrderCreateInput, ServiceOrderUncheckedCreateInput>
  }

  /**
   * ServiceOrder createMany
   */
  export type ServiceOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceOrders.
     */
    data: ServiceOrderCreateManyInput | ServiceOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceOrder createManyAndReturn
   */
  export type ServiceOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceOrders.
     */
    data: ServiceOrderCreateManyInput | ServiceOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrder update
   */
  export type ServiceOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceOrder.
     */
    data: XOR<ServiceOrderUpdateInput, ServiceOrderUncheckedUpdateInput>
    /**
     * Choose, which ServiceOrder to update.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder updateMany
   */
  export type ServiceOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceOrders.
     */
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrders to update
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to update.
     */
    limit?: number
  }

  /**
   * ServiceOrder updateManyAndReturn
   */
  export type ServiceOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * The data used to update ServiceOrders.
     */
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrders to update
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrder upsert
   */
  export type ServiceOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceOrder to update in case it exists.
     */
    where: ServiceOrderWhereUniqueInput
    /**
     * In case the ServiceOrder found by the `where` argument doesn't exist, create a new ServiceOrder with this data.
     */
    create: XOR<ServiceOrderCreateInput, ServiceOrderUncheckedCreateInput>
    /**
     * In case the ServiceOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceOrderUpdateInput, ServiceOrderUncheckedUpdateInput>
  }

  /**
   * ServiceOrder delete
   */
  export type ServiceOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    /**
     * Filter which ServiceOrder to delete.
     */
    where: ServiceOrderWhereUniqueInput
  }

  /**
   * ServiceOrder deleteMany
   */
  export type ServiceOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrders to delete
     */
    where?: ServiceOrderWhereInput
    /**
     * Limit how many ServiceOrders to delete.
     */
    limit?: number
  }

  /**
   * ServiceOrder.items
   */
  export type ServiceOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    where?: ServiceOrderItemWhereInput
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    cursor?: ServiceOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrder.tasks
   */
  export type ServiceOrder$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ServiceOrder without action
   */
  export type ServiceOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
  }


  /**
   * Model ServiceOrderItem
   */

  export type AggregateServiceOrderItem = {
    _count: ServiceOrderItemCountAggregateOutputType | null
    _avg: ServiceOrderItemAvgAggregateOutputType | null
    _sum: ServiceOrderItemSumAggregateOutputType | null
    _min: ServiceOrderItemMinAggregateOutputType | null
    _max: ServiceOrderItemMaxAggregateOutputType | null
  }

  export type ServiceOrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type ServiceOrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
  }

  export type ServiceOrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    name: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    showPrice: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    type: $Enums.ServiceOrderItemType | null
  }

  export type ServiceOrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    name: string | null
    description: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    showPrice: boolean | null
    isDeleted: boolean | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    type: $Enums.ServiceOrderItemType | null
  }

  export type ServiceOrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    name: number
    description: number
    quantity: number
    unitPrice: number
    totalPrice: number
    showPrice: number
    metadata: number
    isDeleted: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    type: number
    _all: number
  }


  export type ServiceOrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type ServiceOrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type ServiceOrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    name?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    showPrice?: true
    isDeleted?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    type?: true
  }

  export type ServiceOrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    name?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    showPrice?: true
    isDeleted?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    type?: true
  }

  export type ServiceOrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    name?: true
    description?: true
    quantity?: true
    unitPrice?: true
    totalPrice?: true
    showPrice?: true
    metadata?: true
    isDeleted?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    type?: true
    _all?: true
  }

  export type ServiceOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrderItem to aggregate.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceOrderItems
    **/
    _count?: true | ServiceOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceOrderItemMaxAggregateInputType
  }

  export type GetServiceOrderItemAggregateType<T extends ServiceOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceOrderItem[P]>
      : GetScalarType<T[P], AggregateServiceOrderItem[P]>
  }




  export type ServiceOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceOrderItemWhereInput
    orderBy?: ServiceOrderItemOrderByWithAggregationInput | ServiceOrderItemOrderByWithAggregationInput[]
    by: ServiceOrderItemScalarFieldEnum[] | ServiceOrderItemScalarFieldEnum
    having?: ServiceOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceOrderItemCountAggregateInputType | true
    _avg?: ServiceOrderItemAvgAggregateInputType
    _sum?: ServiceOrderItemSumAggregateInputType
    _min?: ServiceOrderItemMinAggregateInputType
    _max?: ServiceOrderItemMaxAggregateInputType
  }

  export type ServiceOrderItemGroupByOutputType = {
    id: string
    orderId: string
    name: string
    description: string | null
    quantity: number
    unitPrice: Decimal | null
    totalPrice: Decimal | null
    showPrice: boolean
    metadata: JsonValue | null
    isDeleted: boolean
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    type: $Enums.ServiceOrderItemType | null
    _count: ServiceOrderItemCountAggregateOutputType | null
    _avg: ServiceOrderItemAvgAggregateOutputType | null
    _sum: ServiceOrderItemSumAggregateOutputType | null
    _min: ServiceOrderItemMinAggregateOutputType | null
    _max: ServiceOrderItemMaxAggregateOutputType | null
  }

  type GetServiceOrderItemGroupByPayload<T extends ServiceOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type ServiceOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    showPrice?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    type?: boolean
    tasks?: boolean | ServiceOrderItem$tasksArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    _count?: boolean | ServiceOrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrderItem"]>

  export type ServiceOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    showPrice?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    type?: boolean
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrderItem"]>

  export type ServiceOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    showPrice?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    type?: boolean
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceOrderItem"]>

  export type ServiceOrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    showPrice?: boolean
    metadata?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }

  export type ServiceOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "name" | "description" | "quantity" | "unitPrice" | "totalPrice" | "showPrice" | "metadata" | "isDeleted" | "createdAt" | "deletedAt" | "updatedAt" | "type", ExtArgs["result"]["serviceOrderItem"]>
  export type ServiceOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ServiceOrderItem$tasksArgs<ExtArgs>
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
    _count?: boolean | ServiceOrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }
  export type ServiceOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    serviceOrder?: boolean | ServiceOrderDefaultArgs<ExtArgs>
  }

  export type $ServiceOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceOrderItem"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      serviceOrder: Prisma.$ServiceOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      name: string
      description: string | null
      quantity: number
      unitPrice: Prisma.Decimal | null
      totalPrice: Prisma.Decimal | null
      showPrice: boolean
      metadata: Prisma.JsonValue | null
      isDeleted: boolean
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
      type: $Enums.ServiceOrderItemType | null
    }, ExtArgs["result"]["serviceOrderItem"]>
    composites: {}
  }

  type ServiceOrderItemGetPayload<S extends boolean | null | undefined | ServiceOrderItemDefaultArgs> = $Result.GetResult<Prisma.$ServiceOrderItemPayload, S>

  type ServiceOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceOrderItemCountAggregateInputType | true
    }

  export interface ServiceOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceOrderItem'], meta: { name: 'ServiceOrderItem' } }
    /**
     * Find zero or one ServiceOrderItem that matches the filter.
     * @param {ServiceOrderItemFindUniqueArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceOrderItemFindUniqueArgs>(args: SelectSubset<T, ServiceOrderItemFindUniqueArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceOrderItemFindUniqueOrThrowArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemFindFirstArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceOrderItemFindFirstArgs>(args?: SelectSubset<T, ServiceOrderItemFindFirstArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemFindFirstOrThrowArgs} args - Arguments to find a ServiceOrderItem
     * @example
     * // Get one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceOrderItems
     * const serviceOrderItems = await prisma.serviceOrderItem.findMany()
     * 
     * // Get first 10 ServiceOrderItems
     * const serviceOrderItems = await prisma.serviceOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceOrderItemWithIdOnly = await prisma.serviceOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceOrderItemFindManyArgs>(args?: SelectSubset<T, ServiceOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceOrderItem.
     * @param {ServiceOrderItemCreateArgs} args - Arguments to create a ServiceOrderItem.
     * @example
     * // Create one ServiceOrderItem
     * const ServiceOrderItem = await prisma.serviceOrderItem.create({
     *   data: {
     *     // ... data to create a ServiceOrderItem
     *   }
     * })
     * 
     */
    create<T extends ServiceOrderItemCreateArgs>(args: SelectSubset<T, ServiceOrderItemCreateArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceOrderItems.
     * @param {ServiceOrderItemCreateManyArgs} args - Arguments to create many ServiceOrderItems.
     * @example
     * // Create many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceOrderItemCreateManyArgs>(args?: SelectSubset<T, ServiceOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceOrderItems and returns the data saved in the database.
     * @param {ServiceOrderItemCreateManyAndReturnArgs} args - Arguments to create many ServiceOrderItems.
     * @example
     * // Create many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceOrderItems and only return the `id`
     * const serviceOrderItemWithIdOnly = await prisma.serviceOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceOrderItem.
     * @param {ServiceOrderItemDeleteArgs} args - Arguments to delete one ServiceOrderItem.
     * @example
     * // Delete one ServiceOrderItem
     * const ServiceOrderItem = await prisma.serviceOrderItem.delete({
     *   where: {
     *     // ... filter to delete one ServiceOrderItem
     *   }
     * })
     * 
     */
    delete<T extends ServiceOrderItemDeleteArgs>(args: SelectSubset<T, ServiceOrderItemDeleteArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceOrderItem.
     * @param {ServiceOrderItemUpdateArgs} args - Arguments to update one ServiceOrderItem.
     * @example
     * // Update one ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceOrderItemUpdateArgs>(args: SelectSubset<T, ServiceOrderItemUpdateArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceOrderItems.
     * @param {ServiceOrderItemDeleteManyArgs} args - Arguments to filter ServiceOrderItems to delete.
     * @example
     * // Delete a few ServiceOrderItems
     * const { count } = await prisma.serviceOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceOrderItemDeleteManyArgs>(args?: SelectSubset<T, ServiceOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceOrderItemUpdateManyArgs>(args: SelectSubset<T, ServiceOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceOrderItems and returns the data updated in the database.
     * @param {ServiceOrderItemUpdateManyAndReturnArgs} args - Arguments to update many ServiceOrderItems.
     * @example
     * // Update many ServiceOrderItems
     * const serviceOrderItem = await prisma.serviceOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceOrderItems and only return the `id`
     * const serviceOrderItemWithIdOnly = await prisma.serviceOrderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceOrderItem.
     * @param {ServiceOrderItemUpsertArgs} args - Arguments to update or create a ServiceOrderItem.
     * @example
     * // Update or create a ServiceOrderItem
     * const serviceOrderItem = await prisma.serviceOrderItem.upsert({
     *   create: {
     *     // ... data to create a ServiceOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends ServiceOrderItemUpsertArgs>(args: SelectSubset<T, ServiceOrderItemUpsertArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemCountArgs} args - Arguments to filter ServiceOrderItems to count.
     * @example
     * // Count the number of ServiceOrderItems
     * const count = await prisma.serviceOrderItem.count({
     *   where: {
     *     // ... the filter for the ServiceOrderItems we want to count
     *   }
     * })
    **/
    count<T extends ServiceOrderItemCountArgs>(
      args?: Subset<T, ServiceOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceOrderItemAggregateArgs>(args: Subset<T, ServiceOrderItemAggregateArgs>): Prisma.PrismaPromise<GetServiceOrderItemAggregateType<T>>

    /**
     * Group by ServiceOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceOrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: ServiceOrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceOrderItem model
   */
  readonly fields: ServiceOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends ServiceOrderItem$tasksArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrderItem$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    serviceOrder<T extends ServiceOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceOrderDefaultArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceOrderItem model
   */
  interface ServiceOrderItemFieldRefs {
    readonly id: FieldRef<"ServiceOrderItem", 'String'>
    readonly orderId: FieldRef<"ServiceOrderItem", 'String'>
    readonly name: FieldRef<"ServiceOrderItem", 'String'>
    readonly description: FieldRef<"ServiceOrderItem", 'String'>
    readonly quantity: FieldRef<"ServiceOrderItem", 'Int'>
    readonly unitPrice: FieldRef<"ServiceOrderItem", 'Decimal'>
    readonly totalPrice: FieldRef<"ServiceOrderItem", 'Decimal'>
    readonly showPrice: FieldRef<"ServiceOrderItem", 'Boolean'>
    readonly metadata: FieldRef<"ServiceOrderItem", 'Json'>
    readonly isDeleted: FieldRef<"ServiceOrderItem", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceOrderItem", 'DateTime'>
    readonly deletedAt: FieldRef<"ServiceOrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceOrderItem", 'DateTime'>
    readonly type: FieldRef<"ServiceOrderItem", 'ServiceOrderItemType'>
  }
    

  // Custom InputTypes
  /**
   * ServiceOrderItem findUnique
   */
  export type ServiceOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem findUniqueOrThrow
   */
  export type ServiceOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem findFirst
   */
  export type ServiceOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrderItems.
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrderItems.
     */
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrderItem findFirstOrThrow
   */
  export type ServiceOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItem to fetch.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceOrderItems.
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceOrderItems.
     */
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrderItem findMany
   */
  export type ServiceOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceOrderItems to fetch.
     */
    where?: ServiceOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceOrderItems to fetch.
     */
    orderBy?: ServiceOrderItemOrderByWithRelationInput | ServiceOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceOrderItems.
     */
    cursor?: ServiceOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceOrderItems.
     */
    skip?: number
    distinct?: ServiceOrderItemScalarFieldEnum | ServiceOrderItemScalarFieldEnum[]
  }

  /**
   * ServiceOrderItem create
   */
  export type ServiceOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceOrderItem.
     */
    data: XOR<ServiceOrderItemCreateInput, ServiceOrderItemUncheckedCreateInput>
  }

  /**
   * ServiceOrderItem createMany
   */
  export type ServiceOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceOrderItems.
     */
    data: ServiceOrderItemCreateManyInput | ServiceOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceOrderItem createManyAndReturn
   */
  export type ServiceOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceOrderItems.
     */
    data: ServiceOrderItemCreateManyInput | ServiceOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrderItem update
   */
  export type ServiceOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceOrderItem.
     */
    data: XOR<ServiceOrderItemUpdateInput, ServiceOrderItemUncheckedUpdateInput>
    /**
     * Choose, which ServiceOrderItem to update.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem updateMany
   */
  export type ServiceOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceOrderItems.
     */
    data: XOR<ServiceOrderItemUpdateManyMutationInput, ServiceOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrderItems to update
     */
    where?: ServiceOrderItemWhereInput
    /**
     * Limit how many ServiceOrderItems to update.
     */
    limit?: number
  }

  /**
   * ServiceOrderItem updateManyAndReturn
   */
  export type ServiceOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update ServiceOrderItems.
     */
    data: XOR<ServiceOrderItemUpdateManyMutationInput, ServiceOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceOrderItems to update
     */
    where?: ServiceOrderItemWhereInput
    /**
     * Limit how many ServiceOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceOrderItem upsert
   */
  export type ServiceOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceOrderItem to update in case it exists.
     */
    where: ServiceOrderItemWhereUniqueInput
    /**
     * In case the ServiceOrderItem found by the `where` argument doesn't exist, create a new ServiceOrderItem with this data.
     */
    create: XOR<ServiceOrderItemCreateInput, ServiceOrderItemUncheckedCreateInput>
    /**
     * In case the ServiceOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceOrderItemUpdateInput, ServiceOrderItemUncheckedUpdateInput>
  }

  /**
   * ServiceOrderItem delete
   */
  export type ServiceOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    /**
     * Filter which ServiceOrderItem to delete.
     */
    where: ServiceOrderItemWhereUniqueInput
  }

  /**
   * ServiceOrderItem deleteMany
   */
  export type ServiceOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceOrderItems to delete
     */
    where?: ServiceOrderItemWhereInput
    /**
     * Limit how many ServiceOrderItems to delete.
     */
    limit?: number
  }

  /**
   * ServiceOrderItem.tasks
   */
  export type ServiceOrderItem$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * ServiceOrderItem without action
   */
  export type ServiceOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    assigneeId: number | null
    githubIssueId: number | null
  }

  export type TaskSumAggregateOutputType = {
    assigneeId: number | null
    githubIssueId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    title: string | null
    status: $Enums.TaskStatus | null
    orderItemId: string | null
    orderId: string | null
    assigneeId: number | null
    githubIssueId: number | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    title: string | null
    status: $Enums.TaskStatus | null
    orderItemId: string | null
    orderId: string | null
    assigneeId: number | null
    githubIssueId: number | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    status: number
    orderItemId: number
    orderId: number
    assigneeId: number
    githubIssueId: number
    githubUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    assigneeId?: true
    githubIssueId?: true
  }

  export type TaskSumAggregateInputType = {
    assigneeId?: true
    githubIssueId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    status?: true
    orderItemId?: true
    orderId?: true
    assigneeId?: true
    githubIssueId?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    status?: true
    orderItemId?: true
    orderId?: true
    assigneeId?: true
    githubIssueId?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    status?: true
    orderItemId?: true
    orderId?: true
    assigneeId?: true
    githubIssueId?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    title: string
    status: $Enums.TaskStatus
    orderItemId: string | null
    orderId: string | null
    assigneeId: number | null
    githubIssueId: number | null
    githubUrl: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    orderItemId?: boolean
    orderId?: boolean
    assigneeId?: boolean
    githubIssueId?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItem?: boolean | Task$orderItemArgs<ExtArgs>
    order?: boolean | Task$orderArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    orderItemId?: boolean
    orderId?: boolean
    assigneeId?: boolean
    githubIssueId?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItem?: boolean | Task$orderItemArgs<ExtArgs>
    order?: boolean | Task$orderArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    status?: boolean
    orderItemId?: boolean
    orderId?: boolean
    assigneeId?: boolean
    githubIssueId?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItem?: boolean | Task$orderItemArgs<ExtArgs>
    order?: boolean | Task$orderArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    status?: boolean
    orderItemId?: boolean
    orderId?: boolean
    assigneeId?: boolean
    githubIssueId?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "status" | "orderItemId" | "orderId" | "assigneeId" | "githubIssueId" | "githubUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | Task$orderItemArgs<ExtArgs>
    order?: boolean | Task$orderArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | Task$orderItemArgs<ExtArgs>
    order?: boolean | Task$orderArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItem?: boolean | Task$orderItemArgs<ExtArgs>
    order?: boolean | Task$orderArgs<ExtArgs>
    assignee?: boolean | Task$assigneeArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      orderItem: Prisma.$ServiceOrderItemPayload<ExtArgs> | null
      order: Prisma.$ServiceOrderPayload<ExtArgs> | null
      assignee: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      status: $Enums.TaskStatus
      orderItemId: string | null
      orderId: string | null
      assigneeId: number | null
      githubIssueId: number | null
      githubUrl: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItem<T extends Task$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, Task$orderItemArgs<ExtArgs>>): Prisma__ServiceOrderItemClient<$Result.GetResult<Prisma.$ServiceOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends Task$orderArgs<ExtArgs> = {}>(args?: Subset<T, Task$orderArgs<ExtArgs>>): Prisma__ServiceOrderClient<$Result.GetResult<Prisma.$ServiceOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    assignee<T extends Task$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'TaskStatus'>
    readonly orderItemId: FieldRef<"Task", 'String'>
    readonly orderId: FieldRef<"Task", 'String'>
    readonly assigneeId: FieldRef<"Task", 'Int'>
    readonly githubIssueId: FieldRef<"Task", 'Int'>
    readonly githubUrl: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.orderItem
   */
  export type Task$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrderItem
     */
    select?: ServiceOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrderItem
     */
    omit?: ServiceOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderItemInclude<ExtArgs> | null
    where?: ServiceOrderItemWhereInput
  }

  /**
   * Task.order
   */
  export type Task$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceOrder
     */
    select?: ServiceOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceOrder
     */
    omit?: ServiceOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceOrderInclude<ExtArgs> | null
    where?: ServiceOrderWhereInput
  }

  /**
   * Task.assignee
   */
  export type Task$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    uniqueId: 'uniqueId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    isHighlight: 'isHighlight',
    initialPrice: 'initialPrice',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const FeatureScalarFieldEnum: {
    id: 'id',
    uniqueId: 'uniqueId',
    name: 'name',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type FeatureScalarFieldEnum = (typeof FeatureScalarFieldEnum)[keyof typeof FeatureScalarFieldEnum]


  export const ServiceFeatureScalarFieldEnum: {
    id: 'id',
    uniqueId: 'uniqueId',
    serviceId: 'serviceId',
    featureId: 'featureId',
    type: 'type',
    isIncluded: 'isIncluded',
    hours: 'hours',
    unitPrice: 'unitPrice',
    quantity: 'quantity',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ServiceFeatureScalarFieldEnum = (typeof ServiceFeatureScalarFieldEnum)[keyof typeof ServiceFeatureScalarFieldEnum]


  export const ServiceOrderScalarFieldEnum: {
    id: 'id',
    projectName: 'projectName',
    serviceId: 'serviceId',
    clientId: 'clientId',
    initialPrice: 'initialPrice',
    totalPrice: 'totalPrice',
    requirements: 'requirements',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    status: 'status'
  };

  export type ServiceOrderScalarFieldEnum = (typeof ServiceOrderScalarFieldEnum)[keyof typeof ServiceOrderScalarFieldEnum]


  export const ServiceOrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    showPrice: 'showPrice',
    metadata: 'metadata',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt',
    type: 'type'
  };

  export type ServiceOrderItemScalarFieldEnum = (typeof ServiceOrderItemScalarFieldEnum)[keyof typeof ServiceOrderItemScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    status: 'status',
    orderItemId: 'orderItemId',
    orderId: 'orderId',
    assigneeId: 'assigneeId',
    githubIssueId: 'githubIssueId',
    githubUrl: 'githubUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'FeatureType'
   */
  export type EnumFeatureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureType'>
    


  /**
   * Reference to a field of type 'FeatureType[]'
   */
  export type ListEnumFeatureTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FeatureType[]'>
    


  /**
   * Reference to a field of type 'ServiceOrderStatus'
   */
  export type EnumServiceOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderStatus'>
    


  /**
   * Reference to a field of type 'ServiceOrderStatus[]'
   */
  export type ListEnumServiceOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ServiceOrderItemType'
   */
  export type EnumServiceOrderItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderItemType'>
    


  /**
   * Reference to a field of type 'ServiceOrderItemType[]'
   */
  export type ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceOrderItemType[]'>
    


  /**
   * Reference to a field of type 'TaskStatus'
   */
  export type EnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus'>
    


  /**
   * Reference to a field of type 'TaskStatus[]'
   */
  export type ListEnumTaskStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    Task?: TaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Task?: TaskOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    Task?: TaskListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    isDeleted?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    orders?: ServiceOrderListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    orders?: ServiceOrderOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    phone?: StringNullableFilter<"Client"> | string | null
    isDeleted?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    orders?: ServiceOrderListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: IntFilter<"Service"> | number
    uniqueId?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    slug?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    isHighlight?: BoolFilter<"Service"> | boolean
    initialPrice?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    serviceFeatures?: ServiceFeatureListRelationFilter
    orders?: ServiceOrderListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isHighlight?: SortOrder
    initialPrice?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    serviceFeatures?: ServiceFeatureOrderByRelationAggregateInput
    orders?: ServiceOrderOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniqueId?: string
    name?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    slug?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    isHighlight?: BoolFilter<"Service"> | boolean
    initialPrice?: DecimalFilter<"Service"> | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    serviceFeatures?: ServiceFeatureListRelationFilter
    orders?: ServiceOrderListRelationFilter
  }, "id" | "uniqueId" | "name">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isHighlight?: SortOrder
    initialPrice?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Service"> | number
    uniqueId?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    slug?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    isHighlight?: BoolWithAggregatesFilter<"Service"> | boolean
    initialPrice?: DecimalWithAggregatesFilter<"Service"> | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
  }

  export type FeatureWhereInput = {
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    id?: IntFilter<"Feature"> | number
    uniqueId?: StringFilter<"Feature"> | string
    name?: StringFilter<"Feature"> | string
    isDeleted?: BoolFilter<"Feature"> | boolean
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Feature"> | Date | string | null
    serviceFeatures?: ServiceFeatureListRelationFilter
  }

  export type FeatureOrderByWithRelationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    serviceFeatures?: ServiceFeatureOrderByRelationAggregateInput
  }

  export type FeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniqueId?: string
    AND?: FeatureWhereInput | FeatureWhereInput[]
    OR?: FeatureWhereInput[]
    NOT?: FeatureWhereInput | FeatureWhereInput[]
    name?: StringFilter<"Feature"> | string
    isDeleted?: BoolFilter<"Feature"> | boolean
    createdAt?: DateTimeFilter<"Feature"> | Date | string
    updatedAt?: DateTimeFilter<"Feature"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Feature"> | Date | string | null
    serviceFeatures?: ServiceFeatureListRelationFilter
  }, "id" | "uniqueId">

  export type FeatureOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: FeatureCountOrderByAggregateInput
    _avg?: FeatureAvgOrderByAggregateInput
    _max?: FeatureMaxOrderByAggregateInput
    _min?: FeatureMinOrderByAggregateInput
    _sum?: FeatureSumOrderByAggregateInput
  }

  export type FeatureScalarWhereWithAggregatesInput = {
    AND?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    OR?: FeatureScalarWhereWithAggregatesInput[]
    NOT?: FeatureScalarWhereWithAggregatesInput | FeatureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feature"> | number
    uniqueId?: StringWithAggregatesFilter<"Feature"> | string
    name?: StringWithAggregatesFilter<"Feature"> | string
    isDeleted?: BoolWithAggregatesFilter<"Feature"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Feature"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Feature"> | Date | string | null
  }

  export type ServiceFeatureWhereInput = {
    AND?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    OR?: ServiceFeatureWhereInput[]
    NOT?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    id?: IntFilter<"ServiceFeature"> | number
    uniqueId?: StringFilter<"ServiceFeature"> | string
    serviceId?: IntFilter<"ServiceFeature"> | number
    featureId?: IntFilter<"ServiceFeature"> | number
    type?: EnumFeatureTypeFilter<"ServiceFeature"> | $Enums.FeatureType
    isIncluded?: BoolFilter<"ServiceFeature"> | boolean
    hours?: IntFilter<"ServiceFeature"> | number
    unitPrice?: DecimalNullableFilter<"ServiceFeature"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"ServiceFeature"> | number | null
    isDeleted?: BoolFilter<"ServiceFeature"> | boolean
    createdAt?: DateTimeFilter<"ServiceFeature"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceFeature"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceFeature"> | Date | string | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
  }

  export type ServiceFeatureOrderByWithRelationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    serviceId?: SortOrder
    featureId?: SortOrder
    type?: SortOrder
    isIncluded?: SortOrder
    hours?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    service?: ServiceOrderByWithRelationInput
    feature?: FeatureOrderByWithRelationInput
  }

  export type ServiceFeatureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uniqueId?: string
    serviceId_featureId?: ServiceFeatureServiceIdFeatureIdCompoundUniqueInput
    AND?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    OR?: ServiceFeatureWhereInput[]
    NOT?: ServiceFeatureWhereInput | ServiceFeatureWhereInput[]
    serviceId?: IntFilter<"ServiceFeature"> | number
    featureId?: IntFilter<"ServiceFeature"> | number
    type?: EnumFeatureTypeFilter<"ServiceFeature"> | $Enums.FeatureType
    isIncluded?: BoolFilter<"ServiceFeature"> | boolean
    hours?: IntFilter<"ServiceFeature"> | number
    unitPrice?: DecimalNullableFilter<"ServiceFeature"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"ServiceFeature"> | number | null
    isDeleted?: BoolFilter<"ServiceFeature"> | boolean
    createdAt?: DateTimeFilter<"ServiceFeature"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceFeature"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceFeature"> | Date | string | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    feature?: XOR<FeatureScalarRelationFilter, FeatureWhereInput>
  }, "id" | "uniqueId" | "serviceId_featureId">

  export type ServiceFeatureOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    serviceId?: SortOrder
    featureId?: SortOrder
    type?: SortOrder
    isIncluded?: SortOrder
    hours?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ServiceFeatureCountOrderByAggregateInput
    _avg?: ServiceFeatureAvgOrderByAggregateInput
    _max?: ServiceFeatureMaxOrderByAggregateInput
    _min?: ServiceFeatureMinOrderByAggregateInput
    _sum?: ServiceFeatureSumOrderByAggregateInput
  }

  export type ServiceFeatureScalarWhereWithAggregatesInput = {
    AND?: ServiceFeatureScalarWhereWithAggregatesInput | ServiceFeatureScalarWhereWithAggregatesInput[]
    OR?: ServiceFeatureScalarWhereWithAggregatesInput[]
    NOT?: ServiceFeatureScalarWhereWithAggregatesInput | ServiceFeatureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceFeature"> | number
    uniqueId?: StringWithAggregatesFilter<"ServiceFeature"> | string
    serviceId?: IntWithAggregatesFilter<"ServiceFeature"> | number
    featureId?: IntWithAggregatesFilter<"ServiceFeature"> | number
    type?: EnumFeatureTypeWithAggregatesFilter<"ServiceFeature"> | $Enums.FeatureType
    isIncluded?: BoolWithAggregatesFilter<"ServiceFeature"> | boolean
    hours?: IntWithAggregatesFilter<"ServiceFeature"> | number
    unitPrice?: DecimalNullableWithAggregatesFilter<"ServiceFeature"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableWithAggregatesFilter<"ServiceFeature"> | number | null
    isDeleted?: BoolWithAggregatesFilter<"ServiceFeature"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceFeature"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceFeature"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ServiceFeature"> | Date | string | null
  }

  export type ServiceOrderWhereInput = {
    AND?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    OR?: ServiceOrderWhereInput[]
    NOT?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    id?: StringFilter<"ServiceOrder"> | string
    projectName?: StringNullableFilter<"ServiceOrder"> | string | null
    serviceId?: IntFilter<"ServiceOrder"> | number
    clientId?: StringFilter<"ServiceOrder"> | string
    initialPrice?: DecimalFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableFilter<"ServiceOrder"> | string | null
    isDeleted?: BoolFilter<"ServiceOrder"> | boolean
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    status?: EnumServiceOrderStatusFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    items?: ServiceOrderItemListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type ServiceOrderOrderByWithRelationInput = {
    id?: SortOrder
    projectName?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    initialPrice?: SortOrder
    totalPrice?: SortOrder
    requirements?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    service?: ServiceOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    items?: ServiceOrderItemOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ServiceOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    OR?: ServiceOrderWhereInput[]
    NOT?: ServiceOrderWhereInput | ServiceOrderWhereInput[]
    projectName?: StringNullableFilter<"ServiceOrder"> | string | null
    serviceId?: IntFilter<"ServiceOrder"> | number
    clientId?: StringFilter<"ServiceOrder"> | string
    initialPrice?: DecimalFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableFilter<"ServiceOrder"> | string | null
    isDeleted?: BoolFilter<"ServiceOrder"> | boolean
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    status?: EnumServiceOrderStatusFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    items?: ServiceOrderItemListRelationFilter
    tasks?: TaskListRelationFilter
  }, "id">

  export type ServiceOrderOrderByWithAggregationInput = {
    id?: SortOrder
    projectName?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    initialPrice?: SortOrder
    totalPrice?: SortOrder
    requirements?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ServiceOrderCountOrderByAggregateInput
    _avg?: ServiceOrderAvgOrderByAggregateInput
    _max?: ServiceOrderMaxOrderByAggregateInput
    _min?: ServiceOrderMinOrderByAggregateInput
    _sum?: ServiceOrderSumOrderByAggregateInput
  }

  export type ServiceOrderScalarWhereWithAggregatesInput = {
    AND?: ServiceOrderScalarWhereWithAggregatesInput | ServiceOrderScalarWhereWithAggregatesInput[]
    OR?: ServiceOrderScalarWhereWithAggregatesInput[]
    NOT?: ServiceOrderScalarWhereWithAggregatesInput | ServiceOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceOrder"> | string
    projectName?: StringNullableWithAggregatesFilter<"ServiceOrder"> | string | null
    serviceId?: IntWithAggregatesFilter<"ServiceOrder"> | number
    clientId?: StringWithAggregatesFilter<"ServiceOrder"> | string
    initialPrice?: DecimalWithAggregatesFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalWithAggregatesFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableWithAggregatesFilter<"ServiceOrder"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"ServiceOrder"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceOrder"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ServiceOrder"> | Date | string | null
    status?: EnumServiceOrderStatusWithAggregatesFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
  }

  export type ServiceOrderItemWhereInput = {
    AND?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    OR?: ServiceOrderItemWhereInput[]
    NOT?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    id?: StringFilter<"ServiceOrderItem"> | string
    orderId?: StringFilter<"ServiceOrderItem"> | string
    name?: StringFilter<"ServiceOrderItem"> | string
    description?: StringNullableFilter<"ServiceOrderItem"> | string | null
    quantity?: IntFilter<"ServiceOrderItem"> | number
    unitPrice?: DecimalNullableFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    totalPrice?: DecimalNullableFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFilter<"ServiceOrderItem"> | boolean
    metadata?: JsonNullableFilter<"ServiceOrderItem">
    isDeleted?: BoolFilter<"ServiceOrderItem"> | boolean
    createdAt?: DateTimeFilter<"ServiceOrderItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceOrderItem"> | Date | string | null
    updatedAt?: DateTimeFilter<"ServiceOrderItem"> | Date | string
    type?: EnumServiceOrderItemTypeNullableFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemType | null
    tasks?: TaskListRelationFilter
    serviceOrder?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
  }

  export type ServiceOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    showPrice?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    type?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    serviceOrder?: ServiceOrderOrderByWithRelationInput
  }

  export type ServiceOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    OR?: ServiceOrderItemWhereInput[]
    NOT?: ServiceOrderItemWhereInput | ServiceOrderItemWhereInput[]
    orderId?: StringFilter<"ServiceOrderItem"> | string
    name?: StringFilter<"ServiceOrderItem"> | string
    description?: StringNullableFilter<"ServiceOrderItem"> | string | null
    quantity?: IntFilter<"ServiceOrderItem"> | number
    unitPrice?: DecimalNullableFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    totalPrice?: DecimalNullableFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFilter<"ServiceOrderItem"> | boolean
    metadata?: JsonNullableFilter<"ServiceOrderItem">
    isDeleted?: BoolFilter<"ServiceOrderItem"> | boolean
    createdAt?: DateTimeFilter<"ServiceOrderItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceOrderItem"> | Date | string | null
    updatedAt?: DateTimeFilter<"ServiceOrderItem"> | Date | string
    type?: EnumServiceOrderItemTypeNullableFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemType | null
    tasks?: TaskListRelationFilter
    serviceOrder?: XOR<ServiceOrderScalarRelationFilter, ServiceOrderWhereInput>
  }, "id">

  export type ServiceOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    showPrice?: SortOrder
    metadata?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    type?: SortOrderInput | SortOrder
    _count?: ServiceOrderItemCountOrderByAggregateInput
    _avg?: ServiceOrderItemAvgOrderByAggregateInput
    _max?: ServiceOrderItemMaxOrderByAggregateInput
    _min?: ServiceOrderItemMinOrderByAggregateInput
    _sum?: ServiceOrderItemSumOrderByAggregateInput
  }

  export type ServiceOrderItemScalarWhereWithAggregatesInput = {
    AND?: ServiceOrderItemScalarWhereWithAggregatesInput | ServiceOrderItemScalarWhereWithAggregatesInput[]
    OR?: ServiceOrderItemScalarWhereWithAggregatesInput[]
    NOT?: ServiceOrderItemScalarWhereWithAggregatesInput | ServiceOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceOrderItem"> | string
    orderId?: StringWithAggregatesFilter<"ServiceOrderItem"> | string
    name?: StringWithAggregatesFilter<"ServiceOrderItem"> | string
    description?: StringNullableWithAggregatesFilter<"ServiceOrderItem"> | string | null
    quantity?: IntWithAggregatesFilter<"ServiceOrderItem"> | number
    unitPrice?: DecimalNullableWithAggregatesFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    totalPrice?: DecimalNullableWithAggregatesFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolWithAggregatesFilter<"ServiceOrderItem"> | boolean
    metadata?: JsonNullableWithAggregatesFilter<"ServiceOrderItem">
    isDeleted?: BoolWithAggregatesFilter<"ServiceOrderItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceOrderItem"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"ServiceOrderItem"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceOrderItem"> | Date | string
    type?: EnumServiceOrderItemTypeNullableWithAggregatesFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemType | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    orderItemId?: StringNullableFilter<"Task"> | string | null
    orderId?: StringNullableFilter<"Task"> | string | null
    assigneeId?: IntNullableFilter<"Task"> | number | null
    githubIssueId?: IntNullableFilter<"Task"> | number | null
    githubUrl?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    orderItem?: XOR<ServiceOrderItemNullableScalarRelationFilter, ServiceOrderItemWhereInput> | null
    order?: XOR<ServiceOrderNullableScalarRelationFilter, ServiceOrderWhereInput> | null
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    orderItemId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    githubIssueId?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    orderItem?: ServiceOrderItemOrderByWithRelationInput
    order?: ServiceOrderOrderByWithRelationInput
    assignee?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    orderItemId?: StringNullableFilter<"Task"> | string | null
    orderId?: StringNullableFilter<"Task"> | string | null
    assigneeId?: IntNullableFilter<"Task"> | number | null
    githubIssueId?: IntNullableFilter<"Task"> | number | null
    githubUrl?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    orderItem?: XOR<ServiceOrderItemNullableScalarRelationFilter, ServiceOrderItemWhereInput> | null
    order?: XOR<ServiceOrderNullableScalarRelationFilter, ServiceOrderWhereInput> | null
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    orderItemId?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    assigneeId?: SortOrderInput | SortOrder
    githubIssueId?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    title?: StringWithAggregatesFilter<"Task"> | string
    status?: EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus
    orderItemId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    assigneeId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    githubIssueId?: IntNullableWithAggregatesFilter<"Task"> | number | null
    githubUrl?: StringNullableWithAggregatesFilter<"Task"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Task?: TaskCreateNestedManyWithoutAssigneeInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Task?: TaskUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Task?: TaskUpdateManyWithoutAssigneeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Task?: TaskUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    orders?: ServiceOrderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    orders?: ServiceOrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ServiceOrderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ServiceOrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCreateInput = {
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight?: boolean
    initialPrice?: Decimal | DecimalJsLike | number | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    serviceFeatures?: ServiceFeatureCreateNestedManyWithoutServiceInput
    orders?: ServiceOrderCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: number
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight?: boolean
    initialPrice?: Decimal | DecimalJsLike | number | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    serviceFeatures?: ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput
    orders?: ServiceOrderUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceFeatures?: ServiceFeatureUpdateManyWithoutServiceNestedInput
    orders?: ServiceOrderUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceFeatures?: ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput
    orders?: ServiceOrderUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: number
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight?: boolean
    initialPrice?: Decimal | DecimalJsLike | number | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceUpdateManyMutationInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeatureCreateInput = {
    uniqueId: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    serviceFeatures?: ServiceFeatureCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUncheckedCreateInput = {
    id?: number
    uniqueId: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    serviceFeatures?: ServiceFeatureUncheckedCreateNestedManyWithoutFeatureInput
  }

  export type FeatureUpdateInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceFeatures?: ServiceFeatureUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceFeatures?: ServiceFeatureUncheckedUpdateManyWithoutFeatureNestedInput
  }

  export type FeatureCreateManyInput = {
    id?: number
    uniqueId: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FeatureUpdateManyMutationInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceFeatureCreateInput = {
    uniqueId: string
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutServiceFeaturesInput
    feature: FeatureCreateNestedOneWithoutServiceFeaturesInput
  }

  export type ServiceFeatureUncheckedCreateInput = {
    id?: number
    uniqueId: string
    serviceId: number
    featureId: number
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceFeatureUpdateInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutServiceFeaturesNestedInput
    feature?: FeatureUpdateOneRequiredWithoutServiceFeaturesNestedInput
  }

  export type ServiceFeatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceFeatureCreateManyInput = {
    id?: number
    uniqueId: string
    serviceId: number
    featureId: number
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceFeatureUpdateManyMutationInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceFeatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    featureId?: IntFieldUpdateOperationsInput | number
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceOrderCreateInput = {
    id?: string
    projectName?: string | null
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    service: ServiceCreateNestedOneWithoutOrdersInput
    client: ClientCreateNestedOneWithoutOrdersInput
    items?: ServiceOrderItemCreateNestedManyWithoutServiceOrderInput
    tasks?: TaskCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderUncheckedCreateInput = {
    id?: string
    projectName?: string | null
    serviceId: number
    clientId: string
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    client?: ClientUpdateOneRequiredWithoutOrdersNestedInput
    items?: ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput
    tasks?: TaskUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderCreateManyInput = {
    id?: string
    projectName?: string | null
    serviceId: number
    clientId: string
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
  }

  export type ServiceOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
  }

  export type ServiceOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
  }

  export type ServiceOrderItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
    tasks?: TaskCreateNestedManyWithoutOrderItemInput
    serviceOrder: ServiceOrderCreateNestedOneWithoutItemsInput
  }

  export type ServiceOrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
    tasks?: TaskUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type ServiceOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
    tasks?: TaskUpdateManyWithoutOrderItemNestedInput
    serviceOrder?: ServiceOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ServiceOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
    tasks?: TaskUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type ServiceOrderItemCreateManyInput = {
    id?: string
    orderId: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
  }

  export type ServiceOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
  }

  export type ServiceOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
  }

  export type TaskCreateInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    orderItem?: ServiceOrderItemCreateNestedOneWithoutTasksInput
    order?: ServiceOrderCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderItemId?: string | null
    orderId?: string | null
    assigneeId?: number | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItem?: ServiceOrderItemUpdateOneWithoutTasksNestedInput
    order?: ServiceOrderUpdateOneWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateManyInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderItemId?: string | null
    orderId?: string | null
    assigneeId?: number | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServiceOrderListRelationFilter = {
    every?: ServiceOrderWhereInput
    some?: ServiceOrderWhereInput
    none?: ServiceOrderWhereInput
  }

  export type ServiceOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ServiceFeatureListRelationFilter = {
    every?: ServiceFeatureWhereInput
    some?: ServiceFeatureWhereInput
    none?: ServiceFeatureWhereInput
  }

  export type ServiceFeatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isHighlight?: SortOrder
    initialPrice?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    initialPrice?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isHighlight?: SortOrder
    initialPrice?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    isHighlight?: SortOrder
    initialPrice?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder
    initialPrice?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FeatureCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FeatureAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FeatureMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FeatureSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumFeatureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureType | EnumFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeFilter<$PrismaModel> | $Enums.FeatureType
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type FeatureScalarRelationFilter = {
    is?: FeatureWhereInput
    isNot?: FeatureWhereInput
  }

  export type ServiceFeatureServiceIdFeatureIdCompoundUniqueInput = {
    serviceId: number
    featureId: number
  }

  export type ServiceFeatureCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    serviceId?: SortOrder
    featureId?: SortOrder
    type?: SortOrder
    isIncluded?: SortOrder
    hours?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceFeatureAvgOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    featureId?: SortOrder
    hours?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
  }

  export type ServiceFeatureMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    serviceId?: SortOrder
    featureId?: SortOrder
    type?: SortOrder
    isIncluded?: SortOrder
    hours?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceFeatureMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    serviceId?: SortOrder
    featureId?: SortOrder
    type?: SortOrder
    isIncluded?: SortOrder
    hours?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceFeatureSumOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    featureId?: SortOrder
    hours?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
  }

  export type EnumFeatureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureType | EnumFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeatureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureTypeFilter<$PrismaModel>
    _max?: NestedEnumFeatureTypeFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumServiceOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusFilter<$PrismaModel> | $Enums.ServiceOrderStatus
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ServiceOrderItemListRelationFilter = {
    every?: ServiceOrderItemWhereInput
    some?: ServiceOrderItemWhereInput
    none?: ServiceOrderItemWhereInput
  }

  export type ServiceOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderCountOrderByAggregateInput = {
    id?: SortOrder
    projectName?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    initialPrice?: SortOrder
    totalPrice?: SortOrder
    requirements?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
  }

  export type ServiceOrderAvgOrderByAggregateInput = {
    serviceId?: SortOrder
    initialPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type ServiceOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    projectName?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    initialPrice?: SortOrder
    totalPrice?: SortOrder
    requirements?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
  }

  export type ServiceOrderMinOrderByAggregateInput = {
    id?: SortOrder
    projectName?: SortOrder
    serviceId?: SortOrder
    clientId?: SortOrder
    initialPrice?: SortOrder
    totalPrice?: SortOrder
    requirements?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    status?: SortOrder
  }

  export type ServiceOrderSumOrderByAggregateInput = {
    serviceId?: SortOrder
    initialPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumServiceOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumServiceOrderItemTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemType | EnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceOrderItemTypeNullableFilter<$PrismaModel> | $Enums.ServiceOrderItemType | null
  }

  export type ServiceOrderScalarRelationFilter = {
    is?: ServiceOrderWhereInput
    isNot?: ServiceOrderWhereInput
  }

  export type ServiceOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    showPrice?: SortOrder
    metadata?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type ServiceOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type ServiceOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    showPrice?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type ServiceOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    showPrice?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type ServiceOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumServiceOrderItemTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemType | EnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceOrderItemTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderItemType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderItemTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderItemTypeNullableFilter<$PrismaModel>
  }

  export type EnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type ServiceOrderItemNullableScalarRelationFilter = {
    is?: ServiceOrderItemWhereInput | null
    isNot?: ServiceOrderItemWhereInput | null
  }

  export type ServiceOrderNullableScalarRelationFilter = {
    is?: ServiceOrderWhereInput | null
    isNot?: ServiceOrderWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    orderItemId?: SortOrder
    orderId?: SortOrder
    assigneeId?: SortOrder
    githubIssueId?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    assigneeId?: SortOrder
    githubIssueId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    orderItemId?: SortOrder
    orderId?: SortOrder
    assigneeId?: SortOrder
    githubIssueId?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    orderItemId?: SortOrder
    orderId?: SortOrder
    assigneeId?: SortOrder
    githubIssueId?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    assigneeId?: SortOrder
    githubIssueId?: SortOrder
  }

  export type EnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput> | TaskCreateWithoutAssigneeInput[] | TaskUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput | TaskCreateOrConnectWithoutAssigneeInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput | TaskUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: TaskCreateManyAssigneeInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput | TaskUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput | TaskUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ServiceOrderCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceOrderCreateWithoutClientInput, ServiceOrderUncheckedCreateWithoutClientInput> | ServiceOrderCreateWithoutClientInput[] | ServiceOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutClientInput | ServiceOrderCreateOrConnectWithoutClientInput[]
    createMany?: ServiceOrderCreateManyClientInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type ServiceOrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ServiceOrderCreateWithoutClientInput, ServiceOrderUncheckedCreateWithoutClientInput> | ServiceOrderCreateWithoutClientInput[] | ServiceOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutClientInput | ServiceOrderCreateOrConnectWithoutClientInput[]
    createMany?: ServiceOrderCreateManyClientInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ServiceOrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutClientInput, ServiceOrderUncheckedCreateWithoutClientInput> | ServiceOrderCreateWithoutClientInput[] | ServiceOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutClientInput | ServiceOrderCreateOrConnectWithoutClientInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutClientInput | ServiceOrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServiceOrderCreateManyClientInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutClientInput | ServiceOrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutClientInput | ServiceOrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type ServiceOrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutClientInput, ServiceOrderUncheckedCreateWithoutClientInput> | ServiceOrderCreateWithoutClientInput[] | ServiceOrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutClientInput | ServiceOrderCreateOrConnectWithoutClientInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutClientInput | ServiceOrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ServiceOrderCreateManyClientInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutClientInput | ServiceOrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutClientInput | ServiceOrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type ServiceFeatureCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
  }

  export type ServiceOrderCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceOrderCreateWithoutServiceInput, ServiceOrderUncheckedCreateWithoutServiceInput> | ServiceOrderCreateWithoutServiceInput[] | ServiceOrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutServiceInput | ServiceOrderCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceOrderCreateManyServiceInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
  }

  export type ServiceOrderUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceOrderCreateWithoutServiceInput, ServiceOrderUncheckedCreateWithoutServiceInput> | ServiceOrderCreateWithoutServiceInput[] | ServiceOrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutServiceInput | ServiceOrderCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceOrderCreateManyServiceInputEnvelope
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ServiceFeatureUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput | ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    set?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    disconnect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    delete?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    update?: ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput | ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceFeatureUpdateManyWithWhereWithoutServiceInput | ServiceFeatureUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
  }

  export type ServiceOrderUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutServiceInput, ServiceOrderUncheckedCreateWithoutServiceInput> | ServiceOrderCreateWithoutServiceInput[] | ServiceOrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutServiceInput | ServiceOrderCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutServiceInput | ServiceOrderUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceOrderCreateManyServiceInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutServiceInput | ServiceOrderUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutServiceInput | ServiceOrderUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput> | ServiceFeatureCreateWithoutServiceInput[] | ServiceFeatureUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutServiceInput | ServiceFeatureCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput | ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceFeatureCreateManyServiceInputEnvelope
    set?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    disconnect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    delete?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    update?: ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput | ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceFeatureUpdateManyWithWhereWithoutServiceInput | ServiceFeatureUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
  }

  export type ServiceOrderUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutServiceInput, ServiceOrderUncheckedCreateWithoutServiceInput> | ServiceOrderCreateWithoutServiceInput[] | ServiceOrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutServiceInput | ServiceOrderCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceOrderUpsertWithWhereUniqueWithoutServiceInput | ServiceOrderUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceOrderCreateManyServiceInputEnvelope
    set?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    disconnect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    delete?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    connect?: ServiceOrderWhereUniqueInput | ServiceOrderWhereUniqueInput[]
    update?: ServiceOrderUpdateWithWhereUniqueWithoutServiceInput | ServiceOrderUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceOrderUpdateManyWithWhereWithoutServiceInput | ServiceOrderUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
  }

  export type ServiceFeatureCreateNestedManyWithoutFeatureInput = {
    create?: XOR<ServiceFeatureCreateWithoutFeatureInput, ServiceFeatureUncheckedCreateWithoutFeatureInput> | ServiceFeatureCreateWithoutFeatureInput[] | ServiceFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutFeatureInput | ServiceFeatureCreateOrConnectWithoutFeatureInput[]
    createMany?: ServiceFeatureCreateManyFeatureInputEnvelope
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
  }

  export type ServiceFeatureUncheckedCreateNestedManyWithoutFeatureInput = {
    create?: XOR<ServiceFeatureCreateWithoutFeatureInput, ServiceFeatureUncheckedCreateWithoutFeatureInput> | ServiceFeatureCreateWithoutFeatureInput[] | ServiceFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutFeatureInput | ServiceFeatureCreateOrConnectWithoutFeatureInput[]
    createMany?: ServiceFeatureCreateManyFeatureInputEnvelope
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
  }

  export type ServiceFeatureUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<ServiceFeatureCreateWithoutFeatureInput, ServiceFeatureUncheckedCreateWithoutFeatureInput> | ServiceFeatureCreateWithoutFeatureInput[] | ServiceFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutFeatureInput | ServiceFeatureCreateOrConnectWithoutFeatureInput[]
    upsert?: ServiceFeatureUpsertWithWhereUniqueWithoutFeatureInput | ServiceFeatureUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: ServiceFeatureCreateManyFeatureInputEnvelope
    set?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    disconnect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    delete?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    update?: ServiceFeatureUpdateWithWhereUniqueWithoutFeatureInput | ServiceFeatureUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: ServiceFeatureUpdateManyWithWhereWithoutFeatureInput | ServiceFeatureUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
  }

  export type ServiceFeatureUncheckedUpdateManyWithoutFeatureNestedInput = {
    create?: XOR<ServiceFeatureCreateWithoutFeatureInput, ServiceFeatureUncheckedCreateWithoutFeatureInput> | ServiceFeatureCreateWithoutFeatureInput[] | ServiceFeatureUncheckedCreateWithoutFeatureInput[]
    connectOrCreate?: ServiceFeatureCreateOrConnectWithoutFeatureInput | ServiceFeatureCreateOrConnectWithoutFeatureInput[]
    upsert?: ServiceFeatureUpsertWithWhereUniqueWithoutFeatureInput | ServiceFeatureUpsertWithWhereUniqueWithoutFeatureInput[]
    createMany?: ServiceFeatureCreateManyFeatureInputEnvelope
    set?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    disconnect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    delete?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    connect?: ServiceFeatureWhereUniqueInput | ServiceFeatureWhereUniqueInput[]
    update?: ServiceFeatureUpdateWithWhereUniqueWithoutFeatureInput | ServiceFeatureUpdateWithWhereUniqueWithoutFeatureInput[]
    updateMany?: ServiceFeatureUpdateManyWithWhereWithoutFeatureInput | ServiceFeatureUpdateManyWithWhereWithoutFeatureInput[]
    deleteMany?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutServiceFeaturesInput = {
    create?: XOR<ServiceCreateWithoutServiceFeaturesInput, ServiceUncheckedCreateWithoutServiceFeaturesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceFeaturesInput
    connect?: ServiceWhereUniqueInput
  }

  export type FeatureCreateNestedOneWithoutServiceFeaturesInput = {
    create?: XOR<FeatureCreateWithoutServiceFeaturesInput, FeatureUncheckedCreateWithoutServiceFeaturesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutServiceFeaturesInput
    connect?: FeatureWhereUniqueInput
  }

  export type EnumFeatureTypeFieldUpdateOperationsInput = {
    set?: $Enums.FeatureType
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceUpdateOneRequiredWithoutServiceFeaturesNestedInput = {
    create?: XOR<ServiceCreateWithoutServiceFeaturesInput, ServiceUncheckedCreateWithoutServiceFeaturesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceFeaturesInput
    upsert?: ServiceUpsertWithoutServiceFeaturesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutServiceFeaturesInput, ServiceUpdateWithoutServiceFeaturesInput>, ServiceUncheckedUpdateWithoutServiceFeaturesInput>
  }

  export type FeatureUpdateOneRequiredWithoutServiceFeaturesNestedInput = {
    create?: XOR<FeatureCreateWithoutServiceFeaturesInput, FeatureUncheckedCreateWithoutServiceFeaturesInput>
    connectOrCreate?: FeatureCreateOrConnectWithoutServiceFeaturesInput
    upsert?: FeatureUpsertWithoutServiceFeaturesInput
    connect?: FeatureWhereUniqueInput
    update?: XOR<XOR<FeatureUpdateToOneWithWhereWithoutServiceFeaturesInput, FeatureUpdateWithoutServiceFeaturesInput>, FeatureUncheckedUpdateWithoutServiceFeaturesInput>
  }

  export type ServiceCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOrdersInput
    connect?: ServiceWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    connect?: ClientWhereUniqueInput
  }

  export type ServiceOrderItemCreateNestedManyWithoutServiceOrderInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutOrderInput = {
    create?: XOR<TaskCreateWithoutOrderInput, TaskUncheckedCreateWithoutOrderInput> | TaskCreateWithoutOrderInput[] | TaskUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderInput | TaskCreateOrConnectWithoutOrderInput[]
    createMany?: TaskCreateManyOrderInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<TaskCreateWithoutOrderInput, TaskUncheckedCreateWithoutOrderInput> | TaskCreateWithoutOrderInput[] | TaskUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderInput | TaskCreateOrConnectWithoutOrderInput[]
    createMany?: TaskCreateManyOrderInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumServiceOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.ServiceOrderStatus
  }

  export type ServiceUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOrdersInput
    upsert?: ServiceUpsertWithoutOrdersInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutOrdersInput, ServiceUpdateWithoutOrdersInput>, ServiceUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    upsert?: ClientUpsertWithoutOrdersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutOrdersInput, ClientUpdateWithoutOrdersInput>, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    upsert?: ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    set?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    disconnect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    delete?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    update?: ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput[]
    updateMany?: ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput | ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput[]
    deleteMany?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TaskCreateWithoutOrderInput, TaskUncheckedCreateWithoutOrderInput> | TaskCreateWithoutOrderInput[] | TaskUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderInput | TaskCreateOrConnectWithoutOrderInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutOrderInput | TaskUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TaskCreateManyOrderInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutOrderInput | TaskUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutOrderInput | TaskUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput = {
    create?: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput> | ServiceOrderItemCreateWithoutServiceOrderInput[] | ServiceOrderItemUncheckedCreateWithoutServiceOrderInput[]
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutServiceOrderInput | ServiceOrderItemCreateOrConnectWithoutServiceOrderInput[]
    upsert?: ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput[]
    createMany?: ServiceOrderItemCreateManyServiceOrderInputEnvelope
    set?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    disconnect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    delete?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    connect?: ServiceOrderItemWhereUniqueInput | ServiceOrderItemWhereUniqueInput[]
    update?: ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput | ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput[]
    updateMany?: ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput | ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput[]
    deleteMany?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<TaskCreateWithoutOrderInput, TaskUncheckedCreateWithoutOrderInput> | TaskCreateWithoutOrderInput[] | TaskUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderInput | TaskCreateOrConnectWithoutOrderInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutOrderInput | TaskUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: TaskCreateManyOrderInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutOrderInput | TaskUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutOrderInput | TaskUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<TaskCreateWithoutOrderItemInput, TaskUncheckedCreateWithoutOrderItemInput> | TaskCreateWithoutOrderItemInput[] | TaskUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderItemInput | TaskCreateOrConnectWithoutOrderItemInput[]
    createMany?: TaskCreateManyOrderItemInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ServiceOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutItemsInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type TaskUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<TaskCreateWithoutOrderItemInput, TaskUncheckedCreateWithoutOrderItemInput> | TaskCreateWithoutOrderItemInput[] | TaskUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderItemInput | TaskCreateOrConnectWithoutOrderItemInput[]
    createMany?: TaskCreateManyOrderItemInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ServiceOrderItemType | null
  }

  export type TaskUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<TaskCreateWithoutOrderItemInput, TaskUncheckedCreateWithoutOrderItemInput> | TaskCreateWithoutOrderItemInput[] | TaskUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderItemInput | TaskCreateOrConnectWithoutOrderItemInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutOrderItemInput | TaskUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: TaskCreateManyOrderItemInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutOrderItemInput | TaskUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutOrderItemInput | TaskUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ServiceOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutItemsInput
    upsert?: ServiceOrderUpsertWithoutItemsInput
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutItemsInput, ServiceOrderUpdateWithoutItemsInput>, ServiceOrderUncheckedUpdateWithoutItemsInput>
  }

  export type TaskUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<TaskCreateWithoutOrderItemInput, TaskUncheckedCreateWithoutOrderItemInput> | TaskCreateWithoutOrderItemInput[] | TaskUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutOrderItemInput | TaskCreateOrConnectWithoutOrderItemInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutOrderItemInput | TaskUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: TaskCreateManyOrderItemInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutOrderItemInput | TaskUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutOrderItemInput | TaskUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ServiceOrderItemCreateNestedOneWithoutTasksInput = {
    create?: XOR<ServiceOrderItemCreateWithoutTasksInput, ServiceOrderItemUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutTasksInput
    connect?: ServiceOrderItemWhereUniqueInput
  }

  export type ServiceOrderCreateNestedOneWithoutTasksInput = {
    create?: XOR<ServiceOrderCreateWithoutTasksInput, ServiceOrderUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutTasksInput
    connect?: ServiceOrderWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus
  }

  export type ServiceOrderItemUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ServiceOrderItemCreateWithoutTasksInput, ServiceOrderItemUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ServiceOrderItemCreateOrConnectWithoutTasksInput
    upsert?: ServiceOrderItemUpsertWithoutTasksInput
    disconnect?: ServiceOrderItemWhereInput | boolean
    delete?: ServiceOrderItemWhereInput | boolean
    connect?: ServiceOrderItemWhereUniqueInput
    update?: XOR<XOR<ServiceOrderItemUpdateToOneWithWhereWithoutTasksInput, ServiceOrderItemUpdateWithoutTasksInput>, ServiceOrderItemUncheckedUpdateWithoutTasksInput>
  }

  export type ServiceOrderUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ServiceOrderCreateWithoutTasksInput, ServiceOrderUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ServiceOrderCreateOrConnectWithoutTasksInput
    upsert?: ServiceOrderUpsertWithoutTasksInput
    disconnect?: ServiceOrderWhereInput | boolean
    delete?: ServiceOrderWhereInput | boolean
    connect?: ServiceOrderWhereUniqueInput
    update?: XOR<XOR<ServiceOrderUpdateToOneWithWhereWithoutTasksInput, ServiceOrderUpdateWithoutTasksInput>, ServiceOrderUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneWithoutTaskNestedInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    upsert?: UserUpsertWithoutTaskInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskInput, UserUpdateWithoutTaskInput>, UserUncheckedUpdateWithoutTaskInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumFeatureTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureType | EnumFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeFilter<$PrismaModel> | $Enums.FeatureType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumFeatureTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FeatureType | EnumFeatureTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FeatureType[] | ListEnumFeatureTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFeatureTypeWithAggregatesFilter<$PrismaModel> | $Enums.FeatureType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFeatureTypeFilter<$PrismaModel>
    _max?: NestedEnumFeatureTypeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumServiceOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusFilter<$PrismaModel> | $Enums.ServiceOrderStatus
  }

  export type NestedEnumServiceOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderStatus | EnumServiceOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceOrderStatus[] | ListEnumServiceOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumServiceOrderItemTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemType | EnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceOrderItemTypeNullableFilter<$PrismaModel> | $Enums.ServiceOrderItemType | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumServiceOrderItemTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceOrderItemType | EnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServiceOrderItemType[] | ListEnumServiceOrderItemTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServiceOrderItemTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServiceOrderItemType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServiceOrderItemTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumServiceOrderItemTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTaskStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusFilter<$PrismaModel> | $Enums.TaskStatus
  }

  export type NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskStatus | EnumTaskStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskStatus[] | ListEnumTaskStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskStatusWithAggregatesFilter<$PrismaModel> | $Enums.TaskStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskStatusFilter<$PrismaModel>
    _max?: NestedEnumTaskStatusFilter<$PrismaModel>
  }

  export type TaskCreateWithoutAssigneeInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    orderItem?: ServiceOrderItemCreateNestedOneWithoutTasksInput
    order?: ServiceOrderCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderItemId?: string | null
    orderId?: string | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskCreateManyAssigneeInputEnvelope = {
    data: TaskCreateManyAssigneeInput | TaskCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
    create: XOR<TaskCreateWithoutAssigneeInput, TaskUncheckedCreateWithoutAssigneeInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAssigneeInput, TaskUncheckedUpdateWithoutAssigneeInput>
  }

  export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    title?: StringFilter<"Task"> | string
    status?: EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus
    orderItemId?: StringNullableFilter<"Task"> | string | null
    orderId?: StringNullableFilter<"Task"> | string | null
    assigneeId?: IntNullableFilter<"Task"> | number | null
    githubIssueId?: IntNullableFilter<"Task"> | number | null
    githubUrl?: StringNullableFilter<"Task"> | string | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
  }

  export type ServiceOrderCreateWithoutClientInput = {
    id?: string
    projectName?: string | null
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    service: ServiceCreateNestedOneWithoutOrdersInput
    items?: ServiceOrderItemCreateNestedManyWithoutServiceOrderInput
    tasks?: TaskCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutClientInput = {
    id?: string
    projectName?: string | null
    serviceId: number
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutClientInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutClientInput, ServiceOrderUncheckedCreateWithoutClientInput>
  }

  export type ServiceOrderCreateManyClientInputEnvelope = {
    data: ServiceOrderCreateManyClientInput | ServiceOrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ServiceOrderUpsertWithWhereUniqueWithoutClientInput = {
    where: ServiceOrderWhereUniqueInput
    update: XOR<ServiceOrderUpdateWithoutClientInput, ServiceOrderUncheckedUpdateWithoutClientInput>
    create: XOR<ServiceOrderCreateWithoutClientInput, ServiceOrderUncheckedCreateWithoutClientInput>
  }

  export type ServiceOrderUpdateWithWhereUniqueWithoutClientInput = {
    where: ServiceOrderWhereUniqueInput
    data: XOR<ServiceOrderUpdateWithoutClientInput, ServiceOrderUncheckedUpdateWithoutClientInput>
  }

  export type ServiceOrderUpdateManyWithWhereWithoutClientInput = {
    where: ServiceOrderScalarWhereInput
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyWithoutClientInput>
  }

  export type ServiceOrderScalarWhereInput = {
    AND?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
    OR?: ServiceOrderScalarWhereInput[]
    NOT?: ServiceOrderScalarWhereInput | ServiceOrderScalarWhereInput[]
    id?: StringFilter<"ServiceOrder"> | string
    projectName?: StringNullableFilter<"ServiceOrder"> | string | null
    serviceId?: IntFilter<"ServiceOrder"> | number
    clientId?: StringFilter<"ServiceOrder"> | string
    initialPrice?: DecimalFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFilter<"ServiceOrder"> | Decimal | DecimalJsLike | number | string
    requirements?: StringNullableFilter<"ServiceOrder"> | string | null
    isDeleted?: BoolFilter<"ServiceOrder"> | boolean
    createdAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceOrder"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceOrder"> | Date | string | null
    status?: EnumServiceOrderStatusFilter<"ServiceOrder"> | $Enums.ServiceOrderStatus
  }

  export type ServiceFeatureCreateWithoutServiceInput = {
    uniqueId: string
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    feature: FeatureCreateNestedOneWithoutServiceFeaturesInput
  }

  export type ServiceFeatureUncheckedCreateWithoutServiceInput = {
    id?: number
    uniqueId: string
    featureId: number
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceFeatureCreateOrConnectWithoutServiceInput = {
    where: ServiceFeatureWhereUniqueInput
    create: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput>
  }

  export type ServiceFeatureCreateManyServiceInputEnvelope = {
    data: ServiceFeatureCreateManyServiceInput | ServiceFeatureCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceOrderCreateWithoutServiceInput = {
    id?: string
    projectName?: string | null
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    client: ClientCreateNestedOneWithoutOrdersInput
    items?: ServiceOrderItemCreateNestedManyWithoutServiceOrderInput
    tasks?: TaskCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutServiceInput = {
    id?: string
    projectName?: string | null
    clientId: string
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput
    tasks?: TaskUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutServiceInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutServiceInput, ServiceOrderUncheckedCreateWithoutServiceInput>
  }

  export type ServiceOrderCreateManyServiceInputEnvelope = {
    data: ServiceOrderCreateManyServiceInput | ServiceOrderCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceFeatureUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceFeatureWhereUniqueInput
    update: XOR<ServiceFeatureUpdateWithoutServiceInput, ServiceFeatureUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceFeatureCreateWithoutServiceInput, ServiceFeatureUncheckedCreateWithoutServiceInput>
  }

  export type ServiceFeatureUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceFeatureWhereUniqueInput
    data: XOR<ServiceFeatureUpdateWithoutServiceInput, ServiceFeatureUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceFeatureUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceFeatureScalarWhereInput
    data: XOR<ServiceFeatureUpdateManyMutationInput, ServiceFeatureUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceFeatureScalarWhereInput = {
    AND?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
    OR?: ServiceFeatureScalarWhereInput[]
    NOT?: ServiceFeatureScalarWhereInput | ServiceFeatureScalarWhereInput[]
    id?: IntFilter<"ServiceFeature"> | number
    uniqueId?: StringFilter<"ServiceFeature"> | string
    serviceId?: IntFilter<"ServiceFeature"> | number
    featureId?: IntFilter<"ServiceFeature"> | number
    type?: EnumFeatureTypeFilter<"ServiceFeature"> | $Enums.FeatureType
    isIncluded?: BoolFilter<"ServiceFeature"> | boolean
    hours?: IntFilter<"ServiceFeature"> | number
    unitPrice?: DecimalNullableFilter<"ServiceFeature"> | Decimal | DecimalJsLike | number | string | null
    quantity?: IntNullableFilter<"ServiceFeature"> | number | null
    isDeleted?: BoolFilter<"ServiceFeature"> | boolean
    createdAt?: DateTimeFilter<"ServiceFeature"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceFeature"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceFeature"> | Date | string | null
  }

  export type ServiceOrderUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceOrderWhereUniqueInput
    update: XOR<ServiceOrderUpdateWithoutServiceInput, ServiceOrderUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceOrderCreateWithoutServiceInput, ServiceOrderUncheckedCreateWithoutServiceInput>
  }

  export type ServiceOrderUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceOrderWhereUniqueInput
    data: XOR<ServiceOrderUpdateWithoutServiceInput, ServiceOrderUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceOrderUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceOrderScalarWhereInput
    data: XOR<ServiceOrderUpdateManyMutationInput, ServiceOrderUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceFeatureCreateWithoutFeatureInput = {
    uniqueId: string
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    service: ServiceCreateNestedOneWithoutServiceFeaturesInput
  }

  export type ServiceFeatureUncheckedCreateWithoutFeatureInput = {
    id?: number
    uniqueId: string
    serviceId: number
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceFeatureCreateOrConnectWithoutFeatureInput = {
    where: ServiceFeatureWhereUniqueInput
    create: XOR<ServiceFeatureCreateWithoutFeatureInput, ServiceFeatureUncheckedCreateWithoutFeatureInput>
  }

  export type ServiceFeatureCreateManyFeatureInputEnvelope = {
    data: ServiceFeatureCreateManyFeatureInput | ServiceFeatureCreateManyFeatureInput[]
    skipDuplicates?: boolean
  }

  export type ServiceFeatureUpsertWithWhereUniqueWithoutFeatureInput = {
    where: ServiceFeatureWhereUniqueInput
    update: XOR<ServiceFeatureUpdateWithoutFeatureInput, ServiceFeatureUncheckedUpdateWithoutFeatureInput>
    create: XOR<ServiceFeatureCreateWithoutFeatureInput, ServiceFeatureUncheckedCreateWithoutFeatureInput>
  }

  export type ServiceFeatureUpdateWithWhereUniqueWithoutFeatureInput = {
    where: ServiceFeatureWhereUniqueInput
    data: XOR<ServiceFeatureUpdateWithoutFeatureInput, ServiceFeatureUncheckedUpdateWithoutFeatureInput>
  }

  export type ServiceFeatureUpdateManyWithWhereWithoutFeatureInput = {
    where: ServiceFeatureScalarWhereInput
    data: XOR<ServiceFeatureUpdateManyMutationInput, ServiceFeatureUncheckedUpdateManyWithoutFeatureInput>
  }

  export type ServiceCreateWithoutServiceFeaturesInput = {
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight?: boolean
    initialPrice?: Decimal | DecimalJsLike | number | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    orders?: ServiceOrderCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutServiceFeaturesInput = {
    id?: number
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight?: boolean
    initialPrice?: Decimal | DecimalJsLike | number | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    orders?: ServiceOrderUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutServiceFeaturesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutServiceFeaturesInput, ServiceUncheckedCreateWithoutServiceFeaturesInput>
  }

  export type FeatureCreateWithoutServiceFeaturesInput = {
    uniqueId: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FeatureUncheckedCreateWithoutServiceFeaturesInput = {
    id?: number
    uniqueId: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FeatureCreateOrConnectWithoutServiceFeaturesInput = {
    where: FeatureWhereUniqueInput
    create: XOR<FeatureCreateWithoutServiceFeaturesInput, FeatureUncheckedCreateWithoutServiceFeaturesInput>
  }

  export type ServiceUpsertWithoutServiceFeaturesInput = {
    update: XOR<ServiceUpdateWithoutServiceFeaturesInput, ServiceUncheckedUpdateWithoutServiceFeaturesInput>
    create: XOR<ServiceCreateWithoutServiceFeaturesInput, ServiceUncheckedCreateWithoutServiceFeaturesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutServiceFeaturesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutServiceFeaturesInput, ServiceUncheckedUpdateWithoutServiceFeaturesInput>
  }

  export type ServiceUpdateWithoutServiceFeaturesInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ServiceOrderUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutServiceFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ServiceOrderUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type FeatureUpsertWithoutServiceFeaturesInput = {
    update: XOR<FeatureUpdateWithoutServiceFeaturesInput, FeatureUncheckedUpdateWithoutServiceFeaturesInput>
    create: XOR<FeatureCreateWithoutServiceFeaturesInput, FeatureUncheckedCreateWithoutServiceFeaturesInput>
    where?: FeatureWhereInput
  }

  export type FeatureUpdateToOneWithWhereWithoutServiceFeaturesInput = {
    where?: FeatureWhereInput
    data: XOR<FeatureUpdateWithoutServiceFeaturesInput, FeatureUncheckedUpdateWithoutServiceFeaturesInput>
  }

  export type FeatureUpdateWithoutServiceFeaturesInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeatureUncheckedUpdateWithoutServiceFeaturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceCreateWithoutOrdersInput = {
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight?: boolean
    initialPrice?: Decimal | DecimalJsLike | number | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    serviceFeatures?: ServiceFeatureCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutOrdersInput = {
    id?: number
    uniqueId: string
    name: string
    slug: string
    description: string
    isHighlight?: boolean
    initialPrice?: Decimal | DecimalJsLike | number | string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    serviceFeatures?: ServiceFeatureUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutOrdersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
  }

  export type ClientCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClientUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClientCreateOrConnectWithoutOrdersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
  }

  export type ServiceOrderItemCreateWithoutServiceOrderInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
    tasks?: TaskCreateNestedManyWithoutOrderItemInput
  }

  export type ServiceOrderItemUncheckedCreateWithoutServiceOrderInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
    tasks?: TaskUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type ServiceOrderItemCreateOrConnectWithoutServiceOrderInput = {
    where: ServiceOrderItemWhereUniqueInput
    create: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput>
  }

  export type ServiceOrderItemCreateManyServiceOrderInputEnvelope = {
    data: ServiceOrderItemCreateManyServiceOrderInput | ServiceOrderItemCreateManyServiceOrderInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutOrderInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    orderItem?: ServiceOrderItemCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutOrderInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderItemId?: string | null
    assigneeId?: number | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutOrderInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutOrderInput, TaskUncheckedCreateWithoutOrderInput>
  }

  export type TaskCreateManyOrderInputEnvelope = {
    data: TaskCreateManyOrderInput | TaskCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithoutOrdersInput = {
    update: XOR<ServiceUpdateWithoutOrdersInput, ServiceUncheckedUpdateWithoutOrdersInput>
    create: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutOrdersInput, ServiceUncheckedUpdateWithoutOrdersInput>
  }

  export type ServiceUpdateWithoutOrdersInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceFeatures?: ServiceFeatureUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serviceFeatures?: ServiceFeatureUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ClientUpsertWithoutOrdersInput = {
    update: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceOrderItemUpsertWithWhereUniqueWithoutServiceOrderInput = {
    where: ServiceOrderItemWhereUniqueInput
    update: XOR<ServiceOrderItemUpdateWithoutServiceOrderInput, ServiceOrderItemUncheckedUpdateWithoutServiceOrderInput>
    create: XOR<ServiceOrderItemCreateWithoutServiceOrderInput, ServiceOrderItemUncheckedCreateWithoutServiceOrderInput>
  }

  export type ServiceOrderItemUpdateWithWhereUniqueWithoutServiceOrderInput = {
    where: ServiceOrderItemWhereUniqueInput
    data: XOR<ServiceOrderItemUpdateWithoutServiceOrderInput, ServiceOrderItemUncheckedUpdateWithoutServiceOrderInput>
  }

  export type ServiceOrderItemUpdateManyWithWhereWithoutServiceOrderInput = {
    where: ServiceOrderItemScalarWhereInput
    data: XOR<ServiceOrderItemUpdateManyMutationInput, ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderInput>
  }

  export type ServiceOrderItemScalarWhereInput = {
    AND?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
    OR?: ServiceOrderItemScalarWhereInput[]
    NOT?: ServiceOrderItemScalarWhereInput | ServiceOrderItemScalarWhereInput[]
    id?: StringFilter<"ServiceOrderItem"> | string
    orderId?: StringFilter<"ServiceOrderItem"> | string
    name?: StringFilter<"ServiceOrderItem"> | string
    description?: StringNullableFilter<"ServiceOrderItem"> | string | null
    quantity?: IntFilter<"ServiceOrderItem"> | number
    unitPrice?: DecimalNullableFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    totalPrice?: DecimalNullableFilter<"ServiceOrderItem"> | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFilter<"ServiceOrderItem"> | boolean
    metadata?: JsonNullableFilter<"ServiceOrderItem">
    isDeleted?: BoolFilter<"ServiceOrderItem"> | boolean
    createdAt?: DateTimeFilter<"ServiceOrderItem"> | Date | string
    deletedAt?: DateTimeNullableFilter<"ServiceOrderItem"> | Date | string | null
    updatedAt?: DateTimeFilter<"ServiceOrderItem"> | Date | string
    type?: EnumServiceOrderItemTypeNullableFilter<"ServiceOrderItem"> | $Enums.ServiceOrderItemType | null
  }

  export type TaskUpsertWithWhereUniqueWithoutOrderInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutOrderInput, TaskUncheckedUpdateWithoutOrderInput>
    create: XOR<TaskCreateWithoutOrderInput, TaskUncheckedCreateWithoutOrderInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutOrderInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutOrderInput, TaskUncheckedUpdateWithoutOrderInput>
  }

  export type TaskUpdateManyWithWhereWithoutOrderInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutOrderInput>
  }

  export type TaskCreateWithoutOrderItemInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    order?: ServiceOrderCreateNestedOneWithoutTasksInput
    assignee?: UserCreateNestedOneWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutOrderItemInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderId?: string | null
    assigneeId?: number | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TaskCreateOrConnectWithoutOrderItemInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutOrderItemInput, TaskUncheckedCreateWithoutOrderItemInput>
  }

  export type TaskCreateManyOrderItemInputEnvelope = {
    data: TaskCreateManyOrderItemInput | TaskCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type ServiceOrderCreateWithoutItemsInput = {
    id?: string
    projectName?: string | null
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    service: ServiceCreateNestedOneWithoutOrdersInput
    client: ClientCreateNestedOneWithoutOrdersInput
    tasks?: TaskCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutItemsInput = {
    id?: string
    projectName?: string | null
    serviceId: number
    clientId: string
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    tasks?: TaskUncheckedCreateNestedManyWithoutOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutItemsInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutOrderItemInput, TaskUncheckedUpdateWithoutOrderItemInput>
    create: XOR<TaskCreateWithoutOrderItemInput, TaskUncheckedCreateWithoutOrderItemInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutOrderItemInput, TaskUncheckedUpdateWithoutOrderItemInput>
  }

  export type TaskUpdateManyWithWhereWithoutOrderItemInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type ServiceOrderUpsertWithoutItemsInput = {
    update: XOR<ServiceOrderUpdateWithoutItemsInput, ServiceOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<ServiceOrderCreateWithoutItemsInput, ServiceOrderUncheckedCreateWithoutItemsInput>
    where?: ServiceOrderWhereInput
  }

  export type ServiceOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: ServiceOrderWhereInput
    data: XOR<ServiceOrderUpdateWithoutItemsInput, ServiceOrderUncheckedUpdateWithoutItemsInput>
  }

  export type ServiceOrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    client?: ClientUpdateOneRequiredWithoutOrdersNestedInput
    tasks?: TaskUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    tasks?: TaskUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderItemCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
    serviceOrder: ServiceOrderCreateNestedOneWithoutItemsInput
  }

  export type ServiceOrderItemUncheckedCreateWithoutTasksInput = {
    id?: string
    orderId: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
  }

  export type ServiceOrderItemCreateOrConnectWithoutTasksInput = {
    where: ServiceOrderItemWhereUniqueInput
    create: XOR<ServiceOrderItemCreateWithoutTasksInput, ServiceOrderItemUncheckedCreateWithoutTasksInput>
  }

  export type ServiceOrderCreateWithoutTasksInput = {
    id?: string
    projectName?: string | null
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    service: ServiceCreateNestedOneWithoutOrdersInput
    client: ClientCreateNestedOneWithoutOrdersInput
    items?: ServiceOrderItemCreateNestedManyWithoutServiceOrderInput
  }

  export type ServiceOrderUncheckedCreateWithoutTasksInput = {
    id?: string
    projectName?: string | null
    serviceId: number
    clientId: string
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedCreateNestedManyWithoutServiceOrderInput
  }

  export type ServiceOrderCreateOrConnectWithoutTasksInput = {
    where: ServiceOrderWhereUniqueInput
    create: XOR<ServiceOrderCreateWithoutTasksInput, ServiceOrderUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTaskInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUncheckedCreateWithoutTaskInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutTaskInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
  }

  export type ServiceOrderItemUpsertWithoutTasksInput = {
    update: XOR<ServiceOrderItemUpdateWithoutTasksInput, ServiceOrderItemUncheckedUpdateWithoutTasksInput>
    create: XOR<ServiceOrderItemCreateWithoutTasksInput, ServiceOrderItemUncheckedCreateWithoutTasksInput>
    where?: ServiceOrderItemWhereInput
  }

  export type ServiceOrderItemUpdateToOneWithWhereWithoutTasksInput = {
    where?: ServiceOrderItemWhereInput
    data: XOR<ServiceOrderItemUpdateWithoutTasksInput, ServiceOrderItemUncheckedUpdateWithoutTasksInput>
  }

  export type ServiceOrderItemUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
    serviceOrder?: ServiceOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ServiceOrderItemUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
  }

  export type ServiceOrderUpsertWithoutTasksInput = {
    update: XOR<ServiceOrderUpdateWithoutTasksInput, ServiceOrderUncheckedUpdateWithoutTasksInput>
    create: XOR<ServiceOrderCreateWithoutTasksInput, ServiceOrderUncheckedCreateWithoutTasksInput>
    where?: ServiceOrderWhereInput
  }

  export type ServiceOrderUpdateToOneWithWhereWithoutTasksInput = {
    where?: ServiceOrderWhereInput
    data: XOR<ServiceOrderUpdateWithoutTasksInput, ServiceOrderUncheckedUpdateWithoutTasksInput>
  }

  export type ServiceOrderUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    client?: ClientUpdateOneRequiredWithoutOrdersNestedInput
    items?: ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    clientId?: StringFieldUpdateOperationsInput | string
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput
  }

  export type UserUpsertWithoutTaskInput = {
    update: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
  }

  export type UserUpdateWithoutTaskInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateManyAssigneeInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderItemId?: string | null
    orderId?: string | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TaskUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItem?: ServiceOrderItemUpdateOneWithoutTasksNestedInput
    order?: ServiceOrderUpdateOneWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceOrderCreateManyClientInput = {
    id?: string
    projectName?: string | null
    serviceId: number
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
  }

  export type ServiceOrderUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    items?: ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput
    tasks?: TaskUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: IntFieldUpdateOperationsInput | number
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
  }

  export type ServiceFeatureCreateManyServiceInput = {
    id?: number
    uniqueId: string
    featureId: number
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceOrderCreateManyServiceInput = {
    id?: string
    projectName?: string | null
    clientId: string
    initialPrice?: Decimal | DecimalJsLike | number | string
    totalPrice: Decimal | DecimalJsLike | number | string
    requirements?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    status?: $Enums.ServiceOrderStatus
  }

  export type ServiceFeatureUpdateWithoutServiceInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feature?: FeatureUpdateOneRequiredWithoutServiceFeaturesNestedInput
  }

  export type ServiceFeatureUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    featureId?: IntFieldUpdateOperationsInput | number
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceFeatureUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    featureId?: IntFieldUpdateOperationsInput | number
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceOrderUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    client?: ClientUpdateOneRequiredWithoutOrdersNestedInput
    items?: ServiceOrderItemUpdateManyWithoutServiceOrderNestedInput
    tasks?: TaskUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
    items?: ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type ServiceOrderUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectName?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: StringFieldUpdateOperationsInput | string
    initialPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumServiceOrderStatusFieldUpdateOperationsInput | $Enums.ServiceOrderStatus
  }

  export type ServiceFeatureCreateManyFeatureInput = {
    id?: number
    uniqueId: string
    serviceId: number
    type?: $Enums.FeatureType
    isIncluded?: boolean
    hours: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    quantity?: number | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceFeatureUpdateWithoutFeatureInput = {
    uniqueId?: StringFieldUpdateOperationsInput | string
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    service?: ServiceUpdateOneRequiredWithoutServiceFeaturesNestedInput
  }

  export type ServiceFeatureUncheckedUpdateWithoutFeatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceFeatureUncheckedUpdateManyWithoutFeatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    uniqueId?: StringFieldUpdateOperationsInput | string
    serviceId?: IntFieldUpdateOperationsInput | number
    type?: EnumFeatureTypeFieldUpdateOperationsInput | $Enums.FeatureType
    isIncluded?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceOrderItemCreateManyServiceOrderInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    unitPrice?: Decimal | DecimalJsLike | number | string | null
    totalPrice?: Decimal | DecimalJsLike | number | string | null
    showPrice?: boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    type?: $Enums.ServiceOrderItemType | null
  }

  export type TaskCreateManyOrderInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderItemId?: string | null
    assigneeId?: number | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ServiceOrderItemUpdateWithoutServiceOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
    tasks?: TaskUpdateManyWithoutOrderItemNestedInput
  }

  export type ServiceOrderItemUncheckedUpdateWithoutServiceOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
    tasks?: TaskUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type ServiceOrderItemUncheckedUpdateManyWithoutServiceOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    showPrice?: BoolFieldUpdateOperationsInput | boolean
    metadata?: NullableJsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: NullableEnumServiceOrderItemTypeFieldUpdateOperationsInput | $Enums.ServiceOrderItemType | null
  }

  export type TaskUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderItem?: ServiceOrderItemUpdateOneWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateManyOrderItemInput = {
    id?: string
    title: string
    status?: $Enums.TaskStatus
    orderId?: string | null
    assigneeId?: number | null
    githubIssueId?: number | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type TaskUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: ServiceOrderUpdateOneWithoutTasksNestedInput
    assignee?: UserUpdateOneWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeId?: NullableIntFieldUpdateOperationsInput | number | null
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}