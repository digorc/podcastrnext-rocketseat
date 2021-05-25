// SPA
// SSR
// SSG

import { useEffect } from "react"


export default function Home(props) {
  // useEffect(() => { // SPA
  //   fetch('http://localhost:3333/episodes')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }, [])

  // console.log(props.episodes)

  return (
    <>
      <p>Index</p>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

// export async function getServerSideProps() { // SSR
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

export async function getStaticProps() { // SSG
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60*60*8
  }
}
