Sprite Creator v1.1.0.2
~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2006-2007 Jaros³aw Szatkowski jarekfall
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Przy pomocy tego programu mo¿esz tworzyæ pliki z grafik¹ do gry Fallout Tactics. Pliki
te maj¹ rozszerzenie "spr". Tworzenie duszków jest bardzo proste, s¹ nik³e szanse by
w skutek niew³aœciwej obs³ugi, program uleg³ awarii. Program nie pozwoli na wykonanie
niedozwolonej operacji.
Uwaga! Program mo¿e ulec awarii jedynie, je¿eli edytujesz pliki stworzone przez fanów,
przy pomocy innych nieoficjalnych edytorów, które tworz¹ pliki o niew³aœciwej (z³ej)
strukturze.

Stosowanie kompresji zalecam dopiero po ukoñczeniu prac na danym duszkiem. Kompresja
jest czasoch³onnym procesem, trwa tyle samo co kompresja do formatu "zip" z opcj¹
"najlepsza metoda kompresji" przy czym daje lepszy stopieñ kompresji.

Sprite Creator jest dostarczony jako FREEWARE, ale tylko do prywatnego,
niekomercyjnego, domowego u¿ytku.

Sugestie i komentarze s¹ mile widziane. W przypadku b³êdów i problemów proszê o e-mail
na adres: jarekfall@vp.pl zawieraj¹cy opis problemu.

Proszê odwiedŸ moj¹ witrynê, gdzie mo¿esz pobraæ inne aplikacje/pliki:
http://members.lycos.co.uk/jarekfall

SPIS TREŒCI:

1. WYMAGANIA SYSTEMOWE
2. Informacje
3. Tworzenie kana³u alfa w Adobe Photoshop
4. Zmniejszenie liczby kolorów
5. Opis dzia³añ specjalnych
6. Importowanie bitmap przy pomocy przetwarzania wsadowego

1. WYMAGANIA SYSTEMOWE:
=======================
Minimalne: procesor kompatybilny z Pentium MMX, system operacyjny Windows NT, monitor
i karta graficzna zdolna wyœwietliæ 1024x768 16 bitowych kolorów, 32MB RAM-u, oko³o
100MB wolnego miejsca na dysku twardym.

Zalecane: procesor kompatybilny z  Intel Pentium 4, Windows XP i zainstalowany
przynajmniej DirectX 8.1, 32 bitowa karta graficzna z akceleratorem i 32 bitowym
buforem tekstur, 256MB RAM-u.

Adnotacja: W tej wersji programu, DirectX nie jest wymagany.

2. Informacje
=============
Szczegó³owy opis tworzenia 32 bitowych bitmap znajdziesz na mojej stronie w czêœci "Help".

W pliku SPR ka¿da warstwa danej kolekcji obrazów posiada jedn¹ paletê 256 kolorów, czyli
wszystkie obrazy 24 bitowe jakie stworzy³eœ i przeznaczy³eœ dla jednej z warstw kolekcji
musz¹ posiadaæ wspóln¹ (jedn¹) paletê 256 kolorów lub suma wszystkich kolorów wszystkich
obrazów nie mo¿e przekraczaæ 256 kolorów. Przed przyst¹pieniem do tworzenia obrazów
zaplanuj liczbê kierunków jak¹ bêd¹ posiada³y obrazy.
Wyliczenia:
1 kolekcja obrazów = 1 do 4 warstw
1 warstwa = (1 do 32 kierunków jednego obrazu) * (1 do n obrazów)

Importowane obrazy musz¹ byæ 32 bitowymi nieskompresowanymi bitmapami z kana³em alfa.
Kolory obrazu, które w masce obrazu maj¹ kolor czarny, bêd¹ ignorowane przy importowaniu.
Za ka¿dym razem, gdy importujesz now¹ bitmapê w programie, do palety kolorów warstwy
dodawane s¹ nowe kolory oraz sprawdzane jest, czy w palecie wystêpuj¹ kolory identyczne
z kolorami bitmapy.

3. Tworzenie kana³u alfa w Adobe Photoshop
==========================================
Przygotuj obraz i zaznacz te piksele, które maj¹ byæ widoczne. Zaznaczenie zapisz jako
kana³ alfa. Bia³y kolor w kanale alfa oznacza, ¿e piksele obrazu s¹ nieprzezroczyste,
a czarny, ¿e piksele obrazu nie bêd¹ wyœwietlone. Mo¿esz utworzyæ przezroczyste piksele
by wyg³adziæ krawêdzie obrazu, przyciemniaj¹c nieco bia³e krawêdzie w kanale alfa, nie
rozjaœniaj czarnego koloru, gdy¿ jest to maska t³a. Kana³ alfa u³atwia zaznaczanie obrazu,
najlepiej u¿yæ do tego celu narzêdzie zwane "Ró¿d¿k¹". Wpierw nale¿y ustawiæ parametry
tego narzêdzia, wy³¹cz "Wyg³adzanie", "Ci¹g³oœæ" oraz ustaw tolerancjê na 1. U¿yj ró¿d¿ki
na czarnym kolorze w kanale alfa i opcji z menu "Zaznacz -> Odwrotnoœæ". Teraz mo¿esz bez
obaw przyciemniaæ i rozjaœniæ piksele wewn¹trz zaznaczenia.

Ustawienie w³aœciwoœci kana³u alfa.
-----------------------------------
Kliknij dwukrotnie na kanale alfa, w polu "Kolor" wybierz kolor dla t³a, w polu
"Krycie" wpisz 100%. Je¿eli teraz klikniesz na pole widocznoœci kana³u, zmieni siê
kolor t³a i bêd¹ widoczne przezroczyste piksele.

4. Zmniejszenie liczby kolorów
==============================
Gdy przygotujesz wszystkie obrazy dla jednej z warstw kolekcji w ustalonej przez ciebie
liczbie kierunków, utwórz bitmapê o du¿ym rozmiarze typu RGB, o kolorze dla t³a wziêtym
z jednego z przygotowanych obrazów. Wszystkie te obrazy skopiuj i wklej do du¿ego obrazu.
Du¿y obraz zamieñ na typ z oœmiobitow¹ palet¹ kolorów, wtedy wszystkie obrazy bêd¹ mia³y
tê sam¹ paletê. Teraz masz dwa sposoby na przygotowanie 32 bitowych bitmap do
importowania w programie:
1. Zaznacz ka¿dy obraz w du¿ym obrazie (mo¿esz skopiowaæ kana³ alfa do du¿ego obrazu,
utworzyæ zaznaczenie i przesun¹æ je na odpowiedni¹ pozycjê) i skopiuj go do obrazu,
z którego go wyci¹³eœ.
2. Eksportuj paletê kolorów z du¿ego obrazu. Za³aduj ka¿d¹ bitmapê i zamieñ j¹ na bitmapê
oœmiobitow¹, przy konwersji wybierz paletê "Inna..." i wczytaj paletê z pliku, teraz
zamieñ bitmapê na typ RGB.
W obydwu przypadkach obrazy RGB nale¿y zapisaæ jako bitmapy 32 bitowe.

5. Opis dzia³añ specjalnych
===========================
STOP(1 arg) - Zatrzymuje odtwarzanie sekwencji na czas, okreœlony w pierwszym
parametrze, wyra¿ony w milisekundach.
TIME OF DISPLAYING(1 arg) - Czas wyœwietlania ka¿dego obrazu, okreœlony w pierwszym
parametrze, wyra¿ony w milisekundach. Wartoœci poni¿ej 71 ms s¹ ignorowane przez grê.
REPEAT ALL - Skok do pocz¹tku sekwencji (klatki o indeksie 0).
JUMP(1 arg) - Skok do klatki o indeksie okreœlonym w pierwszym parametrze.
OVERLAY - Nakazuje równoczesne wyœwietlenie sekwencji o tej samej nazwie koñcz¹cej siê
dodatkowo s³owem "Overlay".
STEP LEFT - Postaæ postawi³a lew¹ stopê.
STEP RIGHT - Postaæ postawi³a praw¹ stopê.
HIT - Atakowany obiekt otrzymuje obra¿enia.
FIRE(3 arg) - Postaæ wystrzeliwuje pocisk. Trzy parametry okreœlaj¹ przesuniêcie
punktu pocz¹tkowego (x,y,z) pocisku. Parametr 1: przesuniêcie wzd³u¿ osi X,
parametr 2: przesuniêcie wzd³u¿ osi Y, parametr 3: przesuniêcie wzd³u¿ osi Z.
Przesuniêcia mog¹ byæ liczbami ujemnymi.
SOUND - Odegranie dŸwiêku odpowiedniego do wykonywanej sekwencji.
PICK UP - Postaæ podnios³a przedmiot.

6. Importowanie bitmap przy pomocy przetwarzania wsadowego
==========================================================
Przetwarzanie wsadowe jest przeznaczone do natychmiastowego utworzenia kolekcji obrazów.
Oznacza to, ¿e ponowne za³adowanie bitmap do tej samej kolekcji spowoduje usuniêcie
wczeœniej za³adowanych obrazów. Wszystkie obrazy musz¹ byæ gotowe przed importowaniem.
Dopuszczalne s¹ jedynie nazwy typu:
0*.bmp, 1*.bmp, 2*.bmp, ..., 10*.bmp, ..., 100*.bmp, ...,1000*.bmp, ... lub
00*.bmp, 01*.bmp, 02*.bmp, ..., 10*.bmp, ..., 100*.bmp, ...,1000*.bmp, ... lub
000*.bmp, 001*.bmp, 002*.bmp, ..., 010*.bmp, ..., 100*.bmp, ...,1000*.bmp, ...,
gdzie * oznacza dowoln¹ liczbê dowolnych znaków.
Utwórz now¹ kolekcjê i zaznacz j¹ lub zaznacz istniej¹c¹. Kliknij na przycisk z napisem
"Import" i wybierz numer warstwy, do której chcesz importowaæ bitmapy. Nastêpnie wybierz
bitmapê, któr¹ chcesz za³adowaæ jako pierwsz¹. Pozosta³e bitmapy o wiêkszych numerach,
z tego samego katalogu, zostan¹ za³adowane automatycznie. Je¿eli wybierzesz kolekcjê
i warstwê, która posiada jakieœ obrazy, to zostan¹ one automatycznie usuniête z tej warstwy,
by mo¿na by³o równie¿ usun¹æ paletê kolorów.
Wa¿na jest kolejnoœæ bitmap w tym katalogu. Wpierw, musz¹ wyst¹piæ wszystkie kierunki
pierwszego obrazu, nastêpnie wszystkie kierunki drugiego obrazu itd.