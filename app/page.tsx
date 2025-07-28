import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div
        className="fixed left-4 top-1/2 -translate-y-1/2 transform z-50 hidden lg:block opacity-0 transition-opacity duration-500"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-gray-300" />
          ))}
        </div>
      </div>
      <Main />
      <Footer />
    </main>
  );
}
