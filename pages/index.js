import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div style={{width: '100vw', height: '100vh'}}>
        <Image src='/images/intro.jpg' alt='Intro background image' layout='fill' objectFit='cover' />
      </div>
      <h2>Nejblizsi koncerty</h2>
      <div>
        <div>koncert</div>
        <div>koncert</div>
        <div>koncert</div>
      </div>
    </div>
  )
}
