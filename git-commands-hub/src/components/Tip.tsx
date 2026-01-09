interface TipProps {
  content: string;
}

export default function Tip({ content }: TipProps) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg my-4">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="text-sm text-gray-700"
      />
    </div>
  );
}
