import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1 w-full min-w-0">{children}</main>
      <Footer />
    </>
  );
}
