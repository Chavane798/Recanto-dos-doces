"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/gervasio.bernardo.50/",
      icon: "/5296499_fb_facebook_facebook logo_icon.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "/294709_circle_twitter_icon.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/chavane_798/",
      icon: "/5296765_camera_instagram_instagram logo_icon.svg", // Changed to Instagram icon
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/848191186",
      icon: "/1298775_whatsapp_chat_sms_social media_talk_icon.svg",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold flex items-center justify-center md:justify-start">
              <span className="mr-2">Recanto dos Doces</span>
              <span role="img" aria-label="Doces">🍬</span>
            </h2>
            <p className="text-gray-400 mt-2">
              &copy; {currentYear} Todos os direitos reservados.
            </p>
          </div>

          {/* Social Links */}
          <div className="mb-6 md:mb-0">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="w-6 h-6" 
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-right">
            <a
              href="/politica-privacidade"
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}