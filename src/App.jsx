import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ProductPage from './Pages/ProductPage'
import GalleryPage from './Pages/GalleryPage'
import ManagementPage from './Pages/ManagementPage'
import MembershipForm from './Pages/MembershipForm'
import QuotationForm from './Pages/QuotationForm'
import AuctionForm from './Pages/AuctionForm'
import TenderPage from './Pages/TenderPage'
import CareerPage from './Pages/CareerPage'
import Circular from './Pages/Circular'
import BlogPage from './Pages/BlogPage'
import ReviewPage from './Pages/ReviewPage'
import AppointmentForm from './Pages/AppointmentForm'
import MediaGallery from './Pages/MediaGallery'
import TextileAssociates from './Pages/TextileAssociates'
import ContactUs from './Pages/ContactUs'
import Loader from '../Loader'
import { AnimatePresence } from "framer-motion"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="product-page" element={<ProductPage />} />
            <Route path="product-photo-gallery" element={<GalleryPage />} />
            <Route path="our-management" element={<ManagementPage />} />
            <Route path="trade-enquiry" element={<MembershipForm />} />
            <Route path="e-quotation" element={<QuotationForm />} />
            <Route path="e-auction" element={<AuctionForm />} />
            <Route path="tender-contract" element={<TenderPage />} />
            <Route path="career-page" element={<CareerPage />} />
            <Route path="circular" element={<Circular />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="customer-review" element={<ReviewPage />} />
            <Route path="visit-appointment" element={<AppointmentForm />} />
            <Route path="media-gallery" element={<MediaGallery />} />
            <Route path="textile-associates" element={<TextileAssociates />} />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
