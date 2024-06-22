type CaptionComponentProps = {
    caption: string
}
export default function CaptionComponent({caption}: CaptionComponentProps) {
  return (
    <div className="caption">
      <span className="pre-caption"></span>{caption}
    </div>
  );
}
