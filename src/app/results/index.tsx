"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Results() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        {currentStep === 0 && (
          <>
            <CardHeader>
              <CardTitle>Gratulacje!</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Udało Ci się poprawnie rozwiązać pierwszy etap. Chyba nie było aż tak trudno, co? W kolejny etap zabieram Cię na mały spacer, ale drogę wybierasz Ty. Wystarczy kierować się lokalizacjami opisanymi poniżej w formach zagadek. W każdej z tych lokalizacji znajdziesz bon, który potem, moja myszko, będzie mogła wymienić na nagrody. Gotowa?</p>

              <div className="my-4 border border-gray-100 shadow-md p-4 rounded-md flex flex-col gap-2">
                <p>#1</p>
                <pre>
                  Strażakiem jestem z dumą i pasją,
To miejsce zna mą bohaterską rację.
Gdy syrena woła, tam szybko biegnę,
Gdzie strażaków serca zawsze biją pewnie.
                </pre>
              </div>
                            <div className="my-4 border border-gray-100 shadow-md p-4 rounded-md flex flex-col gap-2">
                <p>#2</p>
                <pre>
Tam, gdzie pierwszy raz z wędką stanąłem,
I z Tobą ten magiczny moment dzieliłem.
Rybki w wodzie pluskały wesoło,
A my wspominaliśmy to miejsce cicho i wkoło
                </pre>
              </div>
                            <div className="my-4 border border-gray-100 shadow-md p-4 rounded-md flex flex-col gap-2">
                <p>#3</p>
                <pre>
Pod mostem tym, co skrywa ryby,
Tam okonie skaczą, nie brak im siły.
Z wędką tam staliśmy w ciepłe dni,
Pamiętasz? To miejsce znajdź teraz ty!
                </pre>
              </div>
                            <div className="my-4 border border-gray-100 shadow-md p-4 rounded-md flex flex-col gap-2">
                <p>#4</p>
                <pre>
Na kanale tym, gdzie szczęście mnie nie opuszcza,
Każda wędkarska wyprawa tam jest udana i słuszna.
Nawet gdy w innych miejscach zawód mnie spotka,
Tu zawsze ryba na haczyku się znajdzie, ot tak!
                </pre>
              </div>
                            <div className="my-4 border border-gray-100 shadow-md p-4 rounded-md flex flex-col gap-2">
                <p>#5</p>
                <pre>
Pod mostem tym, co kryje tajemnice,
Gdzie ryby nie chcą brać, choć woda migocze.
Tam, gdzie na próżno zarzucamy haczyk,
Pamiętasz te chwile, gdy cisza była krzykiem?
                </pre>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </main>
  );
}
