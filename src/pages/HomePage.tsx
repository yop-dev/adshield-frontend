import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, FileCheck, Camera, CheckCircle, Clock } from 'lucide-react';
import { Header } from '../components/layout/Header';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-6 pb-4 sm:pt-8 sm:pb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded-full text-xs font-semibold mb-4 shadow-sm">
            <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
            AI-Powered Protection
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Protect Yourself from
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"> Text Scams in Seconds</span>
          </h1>
          
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4">
            Advanced AI text analysis for phishing & scam detection - works perfectly on free hosting!
            <span className="text-xs text-gray-500 block">(Image & document features require premium APIs)</span>
          </p>
        </section>

        {/* Analysis Types */}
        <section className="pb-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Text Analysis */}
            <div
              onClick={() => navigate('/analyze/text')}
              className="bg-white p-4 rounded-xl border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Text Analysis</h3>
              <p className="text-xs text-blue-600 font-medium mb-2">Phishing detection</p>
              <p className="text-xs text-gray-600 mb-3">
                Identify suspicious emails, SMS, and messages with AI-powered analysis
              </p>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span className="text-xs font-semibold">✨ Fully Working</span>
              </div>
            </div>

            {/* Document Verify */}
            <div
              onClick={() => navigate('/analyze/document')}
              className="bg-white p-4 rounded-xl border border-green-100 hover:shadow-xl hover:border-green-200 transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <FileCheck className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Document Verify</h3>
              <p className="text-xs text-green-600 font-medium mb-2">Document validation</p>
              <p className="text-xs text-gray-600 mb-3">
                Verify authenticity and detect fraudulent documents with AI analysis
              </p>
              <div className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                <span className="text-xs font-semibold">✨ Fully Working</span>
              </div>
            </div>

            {/* Image Deepfake */}
            <div
              onClick={() => navigate('/analyze/deepfake')}
              className="bg-white p-4 rounded-xl border border-purple-100 hover:shadow-xl hover:border-purple-200 transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Camera className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Deepfake Detection</h3>
              <p className="text-xs text-purple-600 font-medium mb-2">AI-generated image detection</p>
              <p className="text-xs text-gray-600 mb-3">
                Identify AI-generated and manipulated images to prevent fraud
              </p>
              <div className="flex items-center text-amber-600">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-xs">🚧 We're Working On It</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">95%+</div>
              <div className="text-xs text-gray-600 font-medium">Text Accuracy</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">&lt;2s</div>
              <div className="text-xs text-gray-600 font-medium">Analysis Time</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">3</div>
              <div className="text-xs text-gray-600 font-medium">Detection Modes</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">100%</div>
              <div className="text-xs text-gray-600 font-medium">Privacy First</div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
