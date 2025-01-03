import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import Navbar from "../components/Navbar";
import { ClerkProvider } from '@clerk/nextjs';

const poppins = Poppins({
	subsets: ['latin'], // Specify the subset you need
	weight: ['400', '500', '700'], // Include desired font weights
	display: 'swap', // Optional: Optimize font loading
  });

export const metadata: Metadata = {
  title: "My Blog App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<ClerkProvider>
		<html lang="en">
		<body
			className={`${poppins.className} antialiased`}
		>
			<ThemeProvider
				attribute="class"
				defaultTheme="light"
				enableSystem
				disableTransitionOnChange
			>
				<Navbar />
				<div className="container mx-auto px-4">
					{children}
				</div>
			</ThemeProvider>
		</body>
		</html>
	</ClerkProvider>
  );
}
