import React from "react"

function License() {
  return (
    <div className='flex flex-col h-screen w-screen mt-[24rem] md:mt-0 md:mb-24 gap-12 items-center justify-center px-24'>
      <div className=' flex items-center justify-center'>
        <h1 className='text-zinc-200 text-4xl font-semibold'>Licencja WinOLS</h1>
      </div>
      <div className=' flex flex-row justify-around items-center gap-5'>
        <div className='w-[50vw] h-full'>
          <a href='https://www.evc.de/en/check_evc_license.asp?k=%2bcvnUR%2frr%2bEuBFY%2fdmnN9A%3d%3d'>
            <img
              className='w-full lg:w-2/3'
              src='https://www.evc.de/common/check_evc_license_image.asp?k=%2bcvnUR%2frr%2bEuBFY%2fdmnN9A%3d%3d'
              alt='license'
            />
          </a>
        </div>
        <div className='w-1/2'>
          <p className='text-zinc-200 text-sm md:text-lg'>
            Jesteśmy profesjonalną firmą zajmującą się tuningiem samochodów, a nasze usługi opierają się na najnowocześniejszych technologiach. W celu
            zapewnienia najwyższej jakości i skuteczności naszych prac, korzystamy z najlepszego oprogramowania do edycji map w sterownikach silnika -
            WinOLS. Dzięki temu możemy zapewnić naszym klientom pełną funkcjonalność programu, a także legalne i zgodne z prawem korzystanie z tej
            zaawansowanej technologii. Nie tylko korzystanie z legalnie nabytych licencji jest ważne dla naszej firmy, ale także dbałość o
            bezpieczeństwo i prywatność naszych klientów. Dlatego wszystkie prace wykonujemy zgodnie z najwyższymi standardami branżowymi, a wszelkie
            dane klientów są traktowane z pełnym szacunkiem i poufnością.
          </p>
        </div>
      </div>
    </div>
  )
}

export default License