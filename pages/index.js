import React, { useContext, useEffect } from 'react'
import useSWR from 'swr'
import { getFeaturedPlaylist } from '../services/spotifyApi'
import useAuth from '../hooks/auth'
import Loading from '../components/Loading'
export const index = () => {
  const { token, logout } = useAuth()
  console.log('token no iniciar', token)
  const { data: featuredPlaylist, error } = useSWR(token ? '/v1/browse/featured-playlists' : null, () => getFeaturedPlaylist(token))

  console.log('featuredPlaylist', featuredPlaylist)

  if(!featuredPlaylist){
    return <Loading/>
  }

  return <div>VAI VIRAR PLAYLST

    <div>
      <button text="Sair" onClick={logout}>Sair</button>
    </div>
  </div>
}

export default index