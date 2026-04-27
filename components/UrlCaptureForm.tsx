"use client";

type UrlCaptureFormProps = {
  url: string;
  onChange: (value: string) => void;
};

export function UrlCaptureForm({ url, onChange }: UrlCaptureFormProps) {
  return (
    <form className="form" onSubmit={(event) => event.preventDefault()}>
      <input
        aria-label="Target URL"
        value={url}
        onChange={(event) => onChange(event.target.value)}
        placeholder="https://example.com"
      />
      <button type="submit">Preview Surface</button>
    </form>
  );
}
