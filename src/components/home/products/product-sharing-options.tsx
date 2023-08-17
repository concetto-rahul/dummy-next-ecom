"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "next-share";
import Image from "next/image";

type Props = {
  url: string;
  title: string;
  images: string[];
};
export default function ProductSharingOptions({ url, title, images }: Props) {
  return (
    <ul>
      <li>
        <FacebookShareButton url={url} quote={title} hashtag={"#BargainFox"}>
          <div>
            <Image
              src="/images/svg/Facebook.svg"
              alt="Facebook"
              width={7}
              height={16}
            />
          </div>
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={url} title={title}>
          <div>
            <Image
              src="/images/svg/twiter.svg"
              alt="twiter"
              width={16}
              height={13}
            />
          </div>
        </TwitterShareButton>
      </li>
      <li>
        <PinterestShareButton
          url={url}
          media={images[0] || ""}
          description={title}
        >
          <div>
            <Image
              src="/images/svg/pinterest.svg"
              alt="pinterest"
              width={16}
              height={19}
            />
          </div>
        </PinterestShareButton>
      </li>
    </ul>
  );
}
