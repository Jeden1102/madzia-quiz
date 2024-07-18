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
    <main className="flex min-h-screen flex-col items-center justify-between p-4 max-w-[500px] mx-auto">
      <Card>
          <>
            <CardHeader>
              <CardTitle>Gratulacje!</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Widzę, że odkryłaś wszystkie ukryte miejsca z zagadek. Moje najszczersze gratulacje. Czeka Cię teraz ostatnie zadanie, które już w sumie zdążyłaś rozgryźć.</p>
              <p>I jak podobają Ci się dzisiejsze zadania? Widzę że radzisz sobie świetnie 😉
Wróćmy na chwilę do zadań sprzed roku - sporo zadań dotyczyło kwestii związanych z programowaniem, dobrze pamiętam?
Jak wiadomo, programowanie to moja pasja, a do samych zadań zaczęłem Cię przygotować już kilka tygodni wstecz :))

Tak sobie pomyślałem ze może w tym roku również chociaż jedno z zadań - to finałowe będzie dotyczyło mojej pasji :)) Ale znowu programowanie???
Nieeee to nuuudy. Moja Madziu, wiesz jak bardzo lubię dzielić się moimi pasjami, w tym roku masz jedno bardzo proste zadanie - musisz złowić rybę :)) Nie liczy się styl, wielkość albo miejsce z którego rybę złowisz. Możesz łowić gdzie chcesz, możemy pozostać w Zawadzkiem, ale jeśli wiesz że np mam inną dobrą miejscówkę to możemy jechać gdzie indziej - Ty decydujesz. Myślę że na podstawie naszych ostatnich wypraw i nauk z nich płynących dasz sobie radę :)) Złowioną rybę możesz następnie wymienić na główną nagrodę (oczywiście jeśli chcesz to możesz zachować rybę, ale wtedy nagroda pozostaje u mnie).
Połamania kija moja kochana ❤</p>
            </CardContent>
          </>
      </Card>
    </main>
  );
}
