// QR Code generation utility for CPPay app download
export const generateCPPayQRData = (): string => {
  // In a real application, this would be the actual APK download URL
  // For now, we'll use a placeholder URL that could be replaced with the actual download link
  const downloadUrl = 'https://cppay.app/download/apk' // Replace with actual APK URL
  return downloadUrl
}

export const generateQRCodeValue = (): string => {
  return generateCPPayQRData()
}
