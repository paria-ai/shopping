import Footer from "./component/Footer";
import Header from "./component/Header";
import ProductsProvider from "./context/ProductsContext";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-kerem">
      <Header/>
        <ProductsProvider>{children}</ProductsProvider>
       <Footer/>
      </body>
    </html>
  );
}
