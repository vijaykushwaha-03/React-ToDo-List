import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Temporary Page Placeholders
// These will be replaced by the actual page components in the next step.
const HomePage = () => <div style={{ padding: 'var(--space-lg)' }}><h1>Home Page</h1><p>Content will go here.</p></div>;
const CategoriesPage = () => <div style={{ padding: 'var(--space-lg)' }}><h1>Categories Page</h1><p>Content will go here.</p></div>;
const SearchPage = () => <div style={{ padding: 'var(--space-lg)' }}><h1>Search Page</h1><p>Content will go here.</p></div>;
const WishlistPage = () => <div style={{ padding: 'var(--space-lg)' }}><h1>Wishlist Page</h1><p>Content will go here.</p></div>;
const ProfilePage = () => <div style={{ padding: 'var(--space-lg)' }}><h1>Profile Page</h1><p>Content will go here.</p></div>;
const LoginPage = () => <div style={{ padding: 'var(--space-lg)' }}><h1>Login Page</h1><p>Content will go here.</p></div>;
const ProductDetailPage = () => <div style={{ padding: 'var(--space-lg)' }}><h1>Detail Page</h1><p>Content will go here.</p></div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with the main layout (including bottom nav) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        {/* Standalone routes (e.g., login, product details) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        {/* We can add more standalone routes here */}
      </Routes>
    </Router>
  );
}

export default App;
