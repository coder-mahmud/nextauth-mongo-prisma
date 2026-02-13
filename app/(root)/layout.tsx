import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ToastContainer, toast } from 'react-toastify';
import { auth } from "@/auth";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <div className="flex h-screen flex-col">
      <Header session={session} />
      <main className="flex-1 wrapper mt-[50px] md:mt-0">
        {children}
      </main>
      <Footer />
      <ToastContainer />
      
    </div>
  );
}