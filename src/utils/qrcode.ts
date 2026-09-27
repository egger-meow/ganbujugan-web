import QRCode from 'qrcode';

/**
 * Generate inline SVG string for a given URL at build time.
 * Perfect for zero-client-JS QR codes.
 */
export async function generateQrSvg(
  url: string,
  options: {
    margin?: number;
    color?: {
      dark?: string;
      light?: string;
    };
  } = {}
): Promise<string> {
  const {
    margin = 1,
    color = {
      dark: '#059669', // Emerald brand color
      light: '#ffffff',
    },
  } = options;

  return QRCode.toString(url, {
    type: 'svg',
    margin,
    color,
    errorCorrectionLevel: 'M',
  });
}
