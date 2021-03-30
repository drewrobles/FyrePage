import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const labels = [
    'TikTok', 
    'Instagram', 
    'YouTube', 
    'LinkedIn', 
    'Github'
  ]

  const links = [
    'https://www.tiktok.com/@andrew.robles',
    'https://www.instagram.com/andrewroblesdev/',
    'https://www.youtube.com/channel/UCqNGTj5w7NxE74m25So27gg',
    'https://www.linkedin.com/in/andrew-robles-dev/',
    'https://github.com/andrewrobles'
  ]

  return (
    <div className={styles.container}>
      <Head>
        <title>Andrew Robles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className={styles.image} 
        src='/profile.png'
        height={100}
        width={100}
      />

      <p>Andrew Robles</p>

      <p>Hello, world! I'm a web developer and content creator from California 🌴</p>

      <LinkButtonColumn labels={labels} links={links}/>
    </div>
  )
}

function LinkButtonColumn(props) {
  const pairs = zip(props.labels, props.links)

  return (
    <div>
      {pairs.map(element => <LinkButton label={element[0]} link={element[1]}/>)}
    </div>
  )
}

function zip(a, b) {

  const mapFunction = (element, index) => {
    return [element, b[index]];
  }

  return a.map(mapFunction);
}

function LinkButton(props) {
  return (
    <div>
      <a className={`btn btn-primary mb-2 ${ styles.linkButton }`} href={props.link}>{props.label}</a>
      <br/>
    </div>
  )
}
