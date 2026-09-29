export default function Typography({
  children,
  as = "p",
  className = "",
}) {
  const Tag = as;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}