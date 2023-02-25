export const GetCookie = (v: string) => {
  let value = document.cookie.match('(^|;) ?' + v + '=([^;]*)(;|$)')
  return value ? value[2] : undefined
}

export default () => ({ GetCookie })
