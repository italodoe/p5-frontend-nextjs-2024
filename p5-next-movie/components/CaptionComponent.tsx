import Link from "next/link";

type CaptionComponentProps = {
  caption: string;
  href: string;
};
export default function CaptionComponent({ caption, href }: CaptionComponentProps) {
  return (
    <Link href={href} className="caption-link">
      <div className="caption">
        <span className="pre-caption"></span>
        {caption}
        <span className="arrow arrow-right ml-2"></span>
      </div>
    </Link>
  );
}
