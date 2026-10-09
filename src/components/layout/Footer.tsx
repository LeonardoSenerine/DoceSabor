import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { brand, contact, messages, serviceOrder, services } from "@/content/site";
import { photos } from "@/content/images";
import { whatsappUrl } from "@/lib/whatsapp";

const hasProvisionalPhotos = Object.values(photos).some((photo) => photo.provisional);

export function Footer() {
  return (
    <footer className="bg-cafe text-creme">
      <div className="mx-auto max-w-[90rem] px-4 pt-20 pb-28 sm:px-8 lg:px-12 lg:pt-28 lg:pb-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark className="text-[1.6rem] sm:text-[2rem]" />
            <p className="note mt-6 text-[1.35rem] text-mostarda">{brand.signature}</p>
            <p className="mt-6 max-w-[24rem] text-creme/70">
              Marca gastronômica de {brand.owner}. Marmitas congeladas, cozinheira particular e buffet de feijoada.
            </p>
          </div>

          <nav aria-label="Serviços" className="lg:col-span-2 lg:col-start-7">
            <h2 className="text-[0.95rem] font-semibold text-creme/60">Serviços</h2>
            <ul className="mt-4 space-y-2">
              {serviceOrder.map((id) => (
                <li key={id}>
                  <a href={`#${services[id].anchor}`} className="inline-block py-1 hover:underline hover:underline-offset-4">
                    {services[id].kind}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/marca" className="inline-block py-1 hover:underline hover:underline-offset-4">
                  Identidade da marca
                </Link>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <h2 className="text-[0.95rem] font-semibold text-creme/60">Contato</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={whatsappUrl(messages.geral)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 hover:underline hover:underline-offset-4"
                >
                  WhatsApp <span className="block text-creme/70">{contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 hover:underline hover:underline-offset-4"
                >
                  Instagram <span className="block text-creme/70">{contact.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[0.95rem] font-semibold text-creme/60">Atendimento</h2>
            <ul className="mt-4 space-y-1 text-creme/90">
              {contact.serviceArea.map((area) => (
                <li key={area} className="py-1">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-creme/15 pt-6 text-[0.9rem] text-creme/60 sm:flex-row sm:justify-between">
          <p>
            © {brand.name}, de {brand.owner}
          </p>
          {hasProvisionalPhotos ? <p>As fotos deste site são ilustrativas.</p> : null}
        </div>
      </div>
    </footer>
  );
}
