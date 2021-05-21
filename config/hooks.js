import { useEffect,useContext } from 'react'
import {DataContext} from '../context'
import Router from 'next/router'
import useSWR from 'swr'
const fetcher = (url) =>
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return { user: data || null }
    })
export function useUser({ redirectTo, redirectIfFound } = {}) {
  const { data, error } = useSWR('/api/user', fetcher)
  const { globalData, setGlobalData } = useContext(DataContext);
  const user = data?.user
  const finished = Boolean(data)
  const hasUser = Boolean(user)
  useEffect(() => {
    setGlobalData({
      ...globalData,
      user:user
    })
    if (!redirectTo || !finished) return
    if (
      (redirectTo && !redirectIfFound && !hasUser) ||
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo)
    }
  }, [redirectTo, redirectIfFound, finished, hasUser])
  
  return error ? null : user
}