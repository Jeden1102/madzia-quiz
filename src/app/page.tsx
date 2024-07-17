"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleClick = () => {
    console.log("900729|2107|1988|45|0407|1507|1912");
    const valid = "9007292107198845040715071912";
    if (value === valid) {
      console.log("ok");
      return;
    }
    setIsError(true);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        {currentStep === 0 && (
          <>
            <CardHeader>
              <CardTitle>Sto lat, sto lat !</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Droga Madziu....</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setCurrentStep(1)}>Przejdz dalej</Button>
            </CardFooter>
          </>
        )}
        {currentStep === 1 && (
          <>
            <CardHeader>
              <CardTitle>Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Opis...</p>
              <div className="flex justify-center">
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                            <span className="absolute left-4 top-4">#1</span>
                            <span className="text-xl font-semibold">
                              ...tak zaczyna sie moj pesel.
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                            <span className="absolute left-4 top-4">#2</span>
                            <span className="text-xl font-semibold">
                              W kalendarzu data ta błyszczy jak złoto, W letnim
                              słońcu dzień wyjątkowy i ciepły tak oto. ?
                              miesiąc, liczba magiczna ?, To czas, gdy
                              świętujemy, w sercu radość pierwsza.
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6 relative">
                            <span className="absolute left-4 top-4">#3</span>
                            <audio controls>
                              <source src="/in-cold-light.mp3" />
                            </audio>
                            <span className="text-xl font-semibold">
                              *podpowiedz - <b>rok</b>
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6 relative">
                            <span className="absolute left-4 top-4">#4</span>
                            <span className="text-xl font-semibold">
                              Wymiar ochronny krola polskich wod
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6 relative">
                            <span className="absolute left-4 top-4">#4</span>
                            <audio controls>
                              <source src="/4th.mp3" />
                            </audio>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    handleClick
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6 relative">
                            <span className="absolute left-4 top-4">#5</span>
                            <audio controls>
                              <source src="/15ty.mp3" />
                            </audio>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col gap-4 aspect-square items-center justify-center p-6 relative">
                            <span className="absolute left-4 top-4">#6</span>
                            <audio controls>
                              <source src="/tita.mp3" />
                            </audio>
                            <span className="text-xl font-semibold">
                              *podpowiedz - <b>rok</b>
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>

              <div className="flex my-4 justify-center">
                <InputOTP maxLength={32} onChange={(value) => setValue(value)}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={6} />
                    <InputOTPSlot index={7} />
                    <InputOTPSlot index={8} />
                    <InputOTPSlot index={9} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={10} />
                    <InputOTPSlot index={11} />
                    <InputOTPSlot index={12} />
                    <InputOTPSlot index={13} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={14} />
                    <InputOTPSlot index={15} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={16} />
                    <InputOTPSlot index={17} />
                    <InputOTPSlot index={18} />
                    <InputOTPSlot index={19} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={20} />
                    <InputOTPSlot index={21} />
                    <InputOTPSlot index={22} />
                    <InputOTPSlot index={23} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={24} />
                    <InputOTPSlot index={25} />
                    <InputOTPSlot index={26} />
                    <InputOTPSlot index={27} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button onClick={() => handleClick()}>Sprawdz kod</Button>
              {isError && <p className="text-red-500">Nieprawidlowy numer</p>}
            </CardContent>
          </>
        )}
      </Card>
    </main>
  );
}
