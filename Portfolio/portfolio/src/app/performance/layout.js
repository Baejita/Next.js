export const revalidate = 0; //ทำให้รีเฟชตลอด
export default function Layout({ children }) {
  return (
    <div>
      <div className="py-1">{children}</div>
    </div>
  );
}
