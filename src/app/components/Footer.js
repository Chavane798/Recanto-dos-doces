"use client";

export default function Footer() {
    return (
        <>
            <footer className=" text-white py-6 mt-10">
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className="w-full sm:w-1/3 text-center sm:text-left">
                        <h2 className="text-lg font-semibold">Recanto dos Doces 🍬</h2>
                        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
                    </div>
                    <div className="w-full sm:w-1/3 flex justify-center mt-4 sm:mt-0">
                        {/* Facebook SVG */}
                        <a href="https://www.facebook.com/gervasio.bernardo.50/" target="_blank" className="mx-2 text-2xl">
                            <img src="/5296499_fb_facebook_facebook logo_icon.svg" alt="Facebook" className="w-6 h-6"/>
                        </a>

                        {/* Twitter SVG */}
                        <a href="https://twitter.com" target="_blank" className="mx-2 text-2xl">
                            <img src="/294709_circle_twitter_icon.svg" alt="Twitter" className="w-6 h-6"/>
                        </a>

                        {/* Instagram SVG */}
                        <a href="https://www.instagram.com/chavane_798/" target="_blank" className="mx-2 text-2xl">
                            <img src="/294709_circle_twitter_icon.svg" alt="Instagram" className="w-6 h-6"/>
                        </a>

                        {/* WhatsApp SVG */}
                        <a href="https://wa.me/848191186" target="_blank" className="mx-2 text-2xl">
                            <img src="/1298775_whatsapp_chat_sms_social media_talk_icon.svg" alt="WhatsApp" className="w-6 h-6"/>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/3 mt-4 sm:mt-0 text-center sm:text-right">
                        <a href="/politica-privacidade" className="text-sm text-gray-400 hover:text-white">Política de Privacidade</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
