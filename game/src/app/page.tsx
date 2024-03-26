import Image from "next/image";
import variables from "../app/variables.module.scss";
import sampleImage from "/public/images/sample.png";

export default function Home() {
  return (
    <main className="">
      <Image
        src={sampleImage}
        alt="sample-image"
        width={50}
        height={50}
        priority
      />
      <h1 className={variables.title}>Sass 적용test</h1>
    </main>
  );
}
