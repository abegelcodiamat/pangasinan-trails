import "./globals.css";
import HeaderNavigation from "../components/organisms/HeaderNavigation";

export const metadata = {
  title: "Pangasinan Trails",
  description:
    "Discover the places, stories, and heritage of Pangasinan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAF9] text-gray-900 antialiased">
        <HeaderNavigation />

        <main>{children}</main>

        <footer className="mt-20 bg-teal-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
            <h2 className="text-2xl font-black">
              PANGASINAN TRAILS
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-teal-100">
              Discover the places, stories, and heritage
              that make Pangasinan worth exploring.
            </p>

            <p className="mt-8 text-xs text-teal-200">
              © 2026 Pangasinan Trails
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}