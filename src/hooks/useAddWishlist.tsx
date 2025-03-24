'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistBox } from '../services/Wishlist'
import { fetchWishlist } from '../redux/wishlist'
import { toast } from 'react-toastify'

const useAddWishlist = (func) => {
  const [isLoading, setLoading] = useState(false)
  const [isDone, setDone] = useState(false)
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: func,
    onSuccess: (res) => {
      // Invalidate and refetch
      setLoading(false)
      setDone(true)
      dispatch(fetchWishlist())
      queryClient.invalidateQueries(['wishListing'])
      toast.success(res.message)
    },
    onError: (err) => {
      // console.log("Wishlist Error ", err);
      toast.error(
        err?.response?.status == 401 ? 'Please Login to Proceed' : err?.response?.data?.message
      )
      setLoading(false)
    },
  })

  const addWishlist = (params) => {
    if (isAuthenticated) {
      setLoading(true)
      setDone(false)
      mutation.mutate(params)
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
