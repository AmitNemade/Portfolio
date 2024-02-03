import AppSkeleton from "@/components/AppSkeleton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppSkeleton>
      <Component {...pageProps} />
    </AppSkeleton>
  );
}
