import Grainient from "@/components/Grainient"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { AspectRatio } from "@/components/ui/aspect-ratio"

function HomePage() {
  return (
    <>
      <div className="relative h-screen bg-gray-300">
        {/* Background code disini */}
        <div className="absolute inset-0 overflow-hidden">
          <Grainient
            color1="#7e1d22"
            color2="#233485"
            color3="#59379e"
            timeSpeed={0.25}
            colorBalance={-0.06}
            warpStrength={2.3}
            warpFrequency={8.9}
            warpSpeed={1.7}
            warpAmplitude={31}
            blendAngle={-38}
            blendSoftness={0.35}
            rotationAmount={280}
            noiseScale={2.05}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={-0.38}
            centerY={-0.1}
            zoom={1.75}
          />
        </div>

        {/* Content code disini */}
        <div className="absolute inset-0">
          <div className="flex h-full w-full flex-col items-start bg-white/20 p-8">
            {/* Header code disini */}
            <div className="flex w-full items-center justify-between rounded-3xl border border-white/5 bg-white/15 px-8 py-4 shadow-xl backdrop-blur-md">
              {/* Logo code disini */}
              <div className="w-32 shrink-0">
                <AspectRatio
                  ratio={153 / 80}
                  className="overflow-hidden rounded-lg"
                >
                  <img
                    src="src/assets/ypab-white.svg"
                    alt="Photo"
                    className="h-full w-full object-cover"
                  />
                </AspectRatio>
              </div>
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg text-white hover:text-black focus:text-black">
                      Tentang YPAB
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="right-auto left-0">
                      <ul className="w-80 p-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col gap-2">
                            <h2>Latar Belakang</h2>
                            <h2>Aspek Hukum</h2>
                            <h2>Visi dan Misi</h2>
                            <h2>Tim YPAB</h2>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h2>Laporan Publik</h2>
                            <h2>Tanya Jawab (FAQ)</h2>
                          </div>
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg">
                      Mari Bergabung
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-80 p-4">
                        <div className="flex flex-col gap-2">
                          <h2>Mari Belajar</h2>
                          <h2>Mari Mengajar</h2>
                          <h2>Mari Berbagi</h2>
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg">
                      Program
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="right-0 left-auto">
                      <ul className="w-80 p-4">
                        <div className="flex flex-col gap-2">
                          <h2>Pendidikan Kesetaraan</h2>
                          <h2>Program Kakak Asuh</h2>
                          <h2>Kolaborasi Inspirasi</h2>
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-lg">
                      Informasi
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="right-0 left-auto">
                      <ul className="w-80 p-4">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col gap-2">
                            <h2>Pendidikan Kesetaraan</h2>
                            <h2>Informasi bagi Relawan</h2>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h2>Informasi bagi Peserta Didik</h2>
                            <h2>Informasi bagi Alumni</h2>
                          </div>
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            {/* Spacer code disini */}
            <div className="flex-grow" />
            {/* Hero code disini */}
            <h2>YPAB</h2>
            <h3>moto</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
