import { ApplicationModal, setOpenModal } from '../../state/application/actions'
import React, { useEffect } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

import { AppDispatch } from '../../state'
import { useDispatch } from 'react-redux'

// Redirects to swap but only replace the pathname
export function RedirectPathToSwapOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/swap' }} />
}

export function RedirectPathToHomeOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/home' }} />
}

export function RedirectPathToTransferOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/transfer' }} />
}

// Redirects to earn but only replace the pathname
export function RedirectPathToEarnOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/pools' }} />
}

// Redirects from the /swap/:outputCurrency path to the /swap?outputCurrency=:outputCurrency format
export function RedirectToSwap(props: RouteComponentProps<{ outputCurrency: string }>) {
  const {
    location: { search },
    match: {
      params: { outputCurrency }
    }
  } = props

  return (
    <Redirect
      to={{
        ...props.location,
        pathname: '/swap',
        search:
          search && search.length > 1
            ? `${search}&outputCurrency=${outputCurrency}`
            : `?outputCurrency=${outputCurrency}`
      }}
    />
  )
}

export function OpenClaimAddressModalAndRedirectToSwap(props: RouteComponentProps) {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(setOpenModal(ApplicationModal.ADDRESS_CLAIM))
  }, [dispatch])
  return <RedirectPathToSwapOnly {...props} />
}
