import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      {/* Main Illustration */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 transform -translate-x-1/2 sm:-translate-x-1/3 md:-translate-x-1/4 lg:-translate-x-1/5 xl:-translate-x-1/6"
        aria-hidden="true"
      >
        <Image
          className="max-w-none w-[600px] sm:w-[700px] md:w-[800px] lg:w-[846px]"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
        />
      </div>

      {/* Optional Extra Illustrations */}
      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[300px] sm:top-[360px] md:top-[400px] -z-10 -translate-x-1/2 sm:-translate-x-2/3 opacity-40 sm:opacity-50"
            aria-hidden="true"
          >
            <Image
              className="max-w-none w-[500px] sm:w-[600px] md:w-[700px] lg:w-[760px]"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape gray"
            />
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-[340px] sm:top-[400px] md:top-[440px] -z-10 -translate-x-1/2 sm:-translate-x-1/3"
            aria-hidden="true"
          >
            <Image
              className="max-w-none w-[500px] sm:w-[600px] md:w-[700px] lg:w-[760px]"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}
