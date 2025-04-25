import { Link, Outlet } from 'react-router-dom';

import React from 'react';

const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="text-xl font-bold">
              Predictions
            </Link>
            <div className="space-x-4">
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <Link to="/category/technology" className="hover:text-primary">
                Technology
              </Link>
              <Link to="/category/science" className="hover:text-primary">
                Science
              </Link>
              <Link to="/category/business" className="hover:text-primary">
                Business
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Predictions Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
