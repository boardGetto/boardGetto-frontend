import Image from 'next/image';
import variables from './variables.module.scss';
import sampleImage from '../../public/images/sample.png';

export default function Home() {
  return (
    <main>
      <Image
        src={sampleImage}
        alt="sample-image"
        width={50}
        height={50}
        priority
      />
      <h1 className={variables.title}>Sass 적용test</h1>

      <p className="bg-primary-getto50 text-headBold-20">test</p>
      <p className="bg-primary-getto50 text-headBold-18">test</p>
    </main>
  );
}
