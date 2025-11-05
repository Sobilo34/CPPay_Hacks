import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Copy, CheckCircle } from "lucide-react";
import QRCode from "qrcode";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl?: string;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({
  isOpen,
  onClose,
  downloadUrl = "https://cppay.app/download/apk",
}) => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      generateQRCode();
    }
  }, [isOpen, downloadUrl]);

  const generateQRCode = async () => {
    setIsGenerating(true);
    try {
      const qrDataUrl = await QRCode.toDataURL(downloadUrl, {
        width: 256,
        margin: 2,
        color: {
          dark: "#0b1932",
          light: "#ffffff",
        },
        errorCorrectionLevel: "M",
      });
      setQrCodeDataUrl(qrDataUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(downloadUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  const handleDownload = () => {
    // In a real app, this would trigger the actual APK download
    window.open(downloadUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-caro-pro font-bold text-gray-900">
              Download CPPay
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* QR Code Display */}
          <div className="text-center mb-6">
            <div className="inline-block p-4 bg-white rounded-2xl shadow-lg border-2 border-gray-200">
              {isGenerating ? (
                <div className="w-64 h-64 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cppay-blue"></div>
                </div>
              ) : qrCodeDataUrl ? (
                <img
                  src={qrCodeDataUrl}
                  alt="CPPay Download QR Code"
                  className="w-64 h-64 rounded-lg"
                />
              ) : (
                <div className="w-64 h-64 flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500 font-caro-pro">
                    Failed to generate QR code
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-caro-pro font-semibold text-gray-900 mb-2">
              Scan with your phone
            </h3>
            <p className="text-sm font-caro-pro text-gray-600 mb-4">
              Point your camera at this QR code to download the CPPay app
            </p>

            {/* URL Display */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-xs text-gray-500 mb-2 font-caro-pro font-medium">
                Direct Download Link:
              </p>
              <p className="text-sm text-gray-700 font-mono font-caro-pro break-all">
                {downloadUrl}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleDownload}
              className="w-full btn-primary flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Directly
            </button>

            <button
              onClick={handleCopyLink}
              className="w-full btn-secondary flex items-center justify-center"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Link
                </>
              )}
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-caro-pro">
                Secure • Fast • Nigerian Made
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QRCodeModal;
