import type { Metadata } from "next";

const destination = "https://neighborhoodhacks.org/";

export const metadata: Metadata = {
  title: "Neighborhood Hacks has moved",
  description: "Visit the official Neighborhood Hacks website.",
  alternates: { canonical: destination },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=${destination}`} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.location.replace('https://neighborhoodhacks.org' + window.location.pathname.replace(/^\\/neighborhood-hacks/, '') + window.location.search + window.location.hash);",
          }}
        />
      </head>
      <body>
        <main>
          <h1>Neighborhood Hacks has moved</h1>
          <p>
            Continue to the{" "}
            <a href={destination}>official Neighborhood Hacks website</a>.
          </p>
        </main>
      </body>
    </html>
  );
}
