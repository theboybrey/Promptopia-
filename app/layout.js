import '@styles/globals.css';

// Metadata
export const metadata = {
  title: "Promptopia",
  description: "Explore, create, and share AI Generated Prompts.",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
