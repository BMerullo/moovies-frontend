import React from "react"
import styles from "/styles/ProviderModal.module.scss"

const ProviderModal = ({ providers }) => {
  if (
    providers.results &&
    providers.results.US &&
    providers.results.US.flatrate
  ) {
    return providers.results.US.flatrate.map((provider, index) => {
      return (
        <>
          <img
            className={styles.providerLogo}
            key={index}
            src={`http://image.tmdb.org/t/p/w500/${provider.logo_path}`}
            alt={` logo`}
          />
        </>
      )
    })
  } else {
    return <p>No Streaming Options Found</p>
  }
}

export default ProviderModal
