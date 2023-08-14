import Image from "next/image";

export default function Loading() {
  return (
    <div className="ac-loader ac-loader__up show">
      <div className="ac-loader__container">
        <div className="loader">
          <Image
            src="/images/bargain-loader.png"
            alt="bargain-loader"
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
}
