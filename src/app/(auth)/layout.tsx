export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/img/login-bg.png)",
        padding: "170px 0 80px",
      }}
    >
      {children}
    </div>
  );
}
