'use client'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWishlist } from '../redux/wishlist'
import { toast } from 'react-toastify'
import { useAppSelector } from '@/redux/hooks'

const useAddWishlist = (func) => {
  const [isLoading, setLoading] = useState(false)
  const [isDone, setDone] = useState(false)
  const dispatch = useDispatch()
  const isAuthenticated = useAppSelector((state) => state.account.isAuthenticated)

  const queryClient = useQueryClient()

  const addWishlist = (params) => {
    if (isAuthenticated) {
      setLoading(true)
      console.log('wishlist params ', params)
      setDone(false)
      func(params)
        .then((res) => {
          console.log('wishlist console ', res)
          if (res?.status === 200) {
            setLoading(false)
            setDone(true)
            dispatch(fetchWishlist())
            queryClient.invalidateQueries({ queryKey: 'wishListing' })
            toast.success(res.message)
          } else {
            toast.error(res?.message)
          }
        })
        .catch((err) => {
          toast.error(err?.message || '')
        })
    } else {
      toast.error('Please Login to Proceed')
    }
  }

  return {
    isLoading,
    isDone,
    addWishlist,
  }
}

export default useAddWishlist
