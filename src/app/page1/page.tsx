import Image from "next/image";

export default function page1() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
      <div>Texto a futuro con imagen:
            La pera es una fruta jugosa y dulce, conocida por su textura suave y su forma característica. Existen diversas variedades, algunas con piel verde, amarilla o rojiza, y cada una tiene un sabor particular. Es rica en fibra y antioxidantes, lo que la hace beneficiosa para la digestión y la salud en general. Además, su versatilidad permite disfrutarla fresca, en postres o incluso en platos salados.
La manzana es una de las frutas más populares en el mundo debido a su sabor refrescante y su amplia disponibilidad. Se encuentra en una variedad de colores, como rojo, verde y amarillo, cada una con una textura y dulzura únicas. Además de ser deliciosa, aporta vitaminas y minerales esenciales para el cuerpo. Su facilidad de transporte la convierte en un snack ideal para cualquier momento del día.
Las naranjas son frutas cítricas conocidas por su alto contenido de vitamina C, esencial para fortalecer el sistema inmunológico. Su jugo es muy apreciado en el desayuno, aunque también se pueden consumir enteras o en ensaladas. Tienen un sabor dulce con un ligero toque ácido, lo que las hace muy refrescantes. Además, su cáscara se utiliza en la cocina y en la elaboración de aceites esenciales.</div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Yo soy un botón
            

          </a>
        </div>
      </main>
      
    </div>
  );
}
