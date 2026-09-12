import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

export function SupportSection() {
  return (
    <section className="pb-8 relative md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
      <div className="gap-12 flex flex-col container items-center relative">
        <h2
          className={`font-sans text-balance text-center text-heading-xl text-gray-100`}
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVertical className="size-6 text-white" />
            </div>
            <strong className={`font-sans text-heading-sm text-gray-100`}>
              Personalize seu site
            </strong>
            <p className="text-body-sm text-gray-200">
              Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com
              a sua cara.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex size-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <Store className="size-6 text-white" />
            </div>
            <strong className={`font-sans text-heading-sm text-gray-100`}>
              Venda de qualquer loja
            </strong>
            <p className="text-body-sm text-gray-200">
              Não importa a loja, o Site.Set permite que você insira qualquer
              link de afiliado.
            </p>
          </div>
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshake className="size-6 text-white" />
            </div>
            <strong className={`font-sans text-heading-sm text-gray-100`}>
              Receba suporte amigável
            </strong>
            <p className="text-body-sm text-gray-200">
              Nossa equipe estará sempre pronta para te atender para ajudar no
              que for preciso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
