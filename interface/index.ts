import { type } from 'os'

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
    nickName: string
  }

  export namespace Page {
    export type PagesComm = {
      userNick: string
      titile: string
      detail: string
      regDate: string
    }
    export type Index = {
      PostId: string
      image: string
      title: string
      nickName: string
      name: string
    }
  }
}

export namespace Componets {
  export interface Item {
    image: string
    title: string
    id: string
    nickName?: string
    regDate?: string
  }

  export interface Items {
    title: string
    item: Item[]
  }
  export interface CardItem extends Items {
    header?: boolean
    likes?: boolean
  }
}

export namespace Pages {
  export interface Comm {
    id: string
    title: string
    image: string
    regDate: string
  }

  export interface Deatil {}
}
