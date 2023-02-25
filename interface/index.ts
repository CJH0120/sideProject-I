export default {}

export namespace API {
  export namespace Res {
    export type Result<T, U = Record<string, never>> = { result: T } & U
    export type UseMember = Result<{
      mall_id: string
      user_name: string
    }>
  }
}

export namespace Member {
  export interface Login {
    Id: string
    Pw: string
  }
}

export namespace ApiData {
  export interface Member {
    id: number
    userId: string
    userPw: string
    userNickName: string
  }
}