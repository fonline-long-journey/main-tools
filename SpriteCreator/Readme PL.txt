Sprite Creator v1.1.0.2
~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2006-2007 Jaros�aw Szatkowski jarekfall
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Przy pomocy tego programu mo�esz tworzy� pliki z grafik� do gry Fallout Tactics. Pliki
te maj� rozszerzenie "spr". Tworzenie duszk�w jest bardzo proste, s� nik�e szanse by
w skutek niew�a�ciwej obs�ugi, program uleg� awarii. Program nie pozwoli na wykonanie
niedozwolonej operacji.
Uwaga! Program mo�e ulec awarii jedynie, je�eli edytujesz pliki stworzone przez fan�w,
przy pomocy innych nieoficjalnych edytor�w, kt�re tworz� pliki o niew�a�ciwej (z�ej)
strukturze.

Stosowanie kompresji zalecam dopiero po uko�czeniu prac na danym duszkiem. Kompresja
jest czasoch�onnym procesem, trwa tyle samo co kompresja do formatu "zip" z opcj�
"najlepsza metoda kompresji" przy czym daje lepszy stopie� kompresji.

Sprite Creator jest dostarczony jako FREEWARE, ale tylko do prywatnego,
niekomercyjnego, domowego u�ytku.

Sugestie i komentarze s� mile widziane. W przypadku b��d�w i problem�w prosz� o e-mail
na adres: jarekfall@vp.pl zawieraj�cy opis problemu.

Prosz� odwied� moj� witryn�, gdzie mo�esz pobra� inne aplikacje/pliki:
http://members.lycos.co.uk/jarekfall

SPIS TRE�CI:

1. WYMAGANIA SYSTEMOWE
2. Informacje
3. Tworzenie kana�u alfa w Adobe Photoshop
4. Zmniejszenie liczby kolor�w
5. Opis dzia�a� specjalnych
6. Importowanie bitmap przy pomocy przetwarzania wsadowego

1. WYMAGANIA SYSTEMOWE:
=======================
Minimalne: procesor kompatybilny z Pentium MMX, system operacyjny Windows NT, monitor
i karta graficzna zdolna wy�wietli� 1024x768 16 bitowych kolor�w, 32MB RAM-u, oko�o
100MB wolnego miejsca na dysku twardym.

Zalecane: procesor kompatybilny z  Intel Pentium 4, Windows XP i zainstalowany
przynajmniej DirectX 8.1, 32 bitowa karta graficzna z akceleratorem i 32 bitowym
buforem tekstur, 256MB RAM-u.

Adnotacja: W tej wersji programu, DirectX nie jest wymagany.

2. Informacje
=============
Szczeg�owy opis tworzenia 32 bitowych bitmap znajdziesz na mojej stronie w cz�ci "Help".

W pliku SPR ka�da warstwa danej kolekcji obraz�w posiada jedn� palet� 256 kolor�w, czyli
wszystkie obrazy 24 bitowe jakie stworzy�e� i przeznaczy�e� dla jednej z warstw kolekcji
musz� posiada� wsp�ln� (jedn�) palet� 256 kolor�w lub suma wszystkich kolor�w wszystkich
obraz�w nie mo�e przekracza� 256 kolor�w. Przed przyst�pieniem do tworzenia obraz�w
zaplanuj liczb� kierunk�w jak� b�d� posiada�y obrazy.
Wyliczenia:
1 kolekcja obraz�w = 1 do 4 warstw
1 warstwa = (1 do 32 kierunk�w jednego obrazu) * (1 do n obraz�w)

Importowane obrazy musz� by� 32 bitowymi nieskompresowanymi bitmapami z kana�em alfa.
Kolory obrazu, kt�re w masce obrazu maj� kolor czarny, b�d� ignorowane przy importowaniu.
Za ka�dym razem, gdy importujesz now� bitmap� w programie, do palety kolor�w warstwy
dodawane s� nowe kolory oraz sprawdzane jest, czy w palecie wyst�puj� kolory identyczne
z kolorami bitmapy.

3. Tworzenie kana�u alfa w Adobe Photoshop
==========================================
Przygotuj obraz i zaznacz te piksele, kt�re maj� by� widoczne. Zaznaczenie zapisz jako
kana� alfa. Bia�y kolor w kanale alfa oznacza, �e piksele obrazu s� nieprzezroczyste,
a czarny, �e piksele obrazu nie b�d� wy�wietlone. Mo�esz utworzy� przezroczyste piksele
by wyg�adzi� kraw�dzie obrazu, przyciemniaj�c nieco bia�e kraw�dzie w kanale alfa, nie
rozja�niaj czarnego koloru, gdy� jest to maska t�a. Kana� alfa u�atwia zaznaczanie obrazu,
najlepiej u�y� do tego celu narz�dzie zwane "R�d�k�". Wpierw nale�y ustawi� parametry
tego narz�dzia, wy��cz "Wyg�adzanie", "Ci�g�o��" oraz ustaw tolerancj� na 1. U�yj r�d�ki
na czarnym kolorze w kanale alfa i opcji z menu "Zaznacz -> Odwrotno��". Teraz mo�esz bez
obaw przyciemnia� i rozja�ni� piksele wewn�trz zaznaczenia.

Ustawienie w�a�ciwo�ci kana�u alfa.
-----------------------------------
Kliknij dwukrotnie na kanale alfa, w polu "Kolor" wybierz kolor dla t�a, w polu
"Krycie" wpisz 100%. Je�eli teraz klikniesz na pole widoczno�ci kana�u, zmieni si�
kolor t�a i b�d� widoczne przezroczyste piksele.

4. Zmniejszenie liczby kolor�w
==============================
Gdy przygotujesz wszystkie obrazy dla jednej z warstw kolekcji w ustalonej przez ciebie
liczbie kierunk�w, utw�rz bitmap� o du�ym rozmiarze typu RGB, o kolorze dla t�a wzi�tym
z jednego z przygotowanych obraz�w. Wszystkie te obrazy skopiuj i wklej do du�ego obrazu.
Du�y obraz zamie� na typ z o�miobitow� palet� kolor�w, wtedy wszystkie obrazy b�d� mia�y
t� sam� palet�. Teraz masz dwa sposoby na przygotowanie 32 bitowych bitmap do
importowania w programie:
1. Zaznacz ka�dy obraz w du�ym obrazie (mo�esz skopiowa� kana� alfa do du�ego obrazu,
utworzy� zaznaczenie i przesun�� je na odpowiedni� pozycj�) i skopiuj go do obrazu,
z kt�rego go wyci��e�.
2. Eksportuj palet� kolor�w z du�ego obrazu. Za�aduj ka�d� bitmap� i zamie� j� na bitmap�
o�miobitow�, przy konwersji wybierz palet� "Inna..." i wczytaj palet� z pliku, teraz
zamie� bitmap� na typ RGB.
W obydwu przypadkach obrazy RGB nale�y zapisa� jako bitmapy 32 bitowe.

5. Opis dzia�a� specjalnych
===========================
STOP(1 arg) - Zatrzymuje odtwarzanie sekwencji na czas, okre�lony w pierwszym
parametrze, wyra�ony w milisekundach.
TIME OF DISPLAYING(1 arg) - Czas wy�wietlania ka�dego obrazu, okre�lony w pierwszym
parametrze, wyra�ony w milisekundach. Warto�ci poni�ej 71 ms s� ignorowane przez gr�.
REPEAT ALL - Skok do pocz�tku sekwencji (klatki o indeksie 0).
JUMP(1 arg) - Skok do klatki o indeksie okre�lonym w pierwszym parametrze.
OVERLAY - Nakazuje r�wnoczesne wy�wietlenie sekwencji o tej samej nazwie ko�cz�cej si�
dodatkowo s�owem "Overlay".
STEP LEFT - Posta� postawi�a lew� stop�.
STEP RIGHT - Posta� postawi�a praw� stop�.
HIT - Atakowany obiekt otrzymuje obra�enia.
FIRE(3 arg) - Posta� wystrzeliwuje pocisk. Trzy parametry okre�laj� przesuni�cie
punktu pocz�tkowego (x,y,z) pocisku. Parametr 1: przesuni�cie wzd�u� osi X,
parametr 2: przesuni�cie wzd�u� osi Y, parametr 3: przesuni�cie wzd�u� osi Z.
Przesuni�cia mog� by� liczbami ujemnymi.
SOUND - Odegranie d�wi�ku odpowiedniego do wykonywanej sekwencji.
PICK UP - Posta� podnios�a przedmiot.

6. Importowanie bitmap przy pomocy przetwarzania wsadowego
==========================================================
Przetwarzanie wsadowe jest przeznaczone do natychmiastowego utworzenia kolekcji obraz�w.
Oznacza to, �e ponowne za�adowanie bitmap do tej samej kolekcji spowoduje usuni�cie
wcze�niej za�adowanych obraz�w. Wszystkie obrazy musz� by� gotowe przed importowaniem.
Dopuszczalne s� jedynie nazwy typu:
0*.bmp, 1*.bmp, 2*.bmp, ..., 10*.bmp, ..., 100*.bmp, ...,1000*.bmp, ... lub
00*.bmp, 01*.bmp, 02*.bmp, ..., 10*.bmp, ..., 100*.bmp, ...,1000*.bmp, ... lub
000*.bmp, 001*.bmp, 002*.bmp, ..., 010*.bmp, ..., 100*.bmp, ...,1000*.bmp, ...,
gdzie * oznacza dowoln� liczb� dowolnych znak�w.
Utw�rz now� kolekcj� i zaznacz j� lub zaznacz istniej�c�. Kliknij na przycisk z napisem
"Import" i wybierz numer warstwy, do kt�rej chcesz importowa� bitmapy. Nast�pnie wybierz
bitmap�, kt�r� chcesz za�adowa� jako pierwsz�. Pozosta�e bitmapy o wi�kszych numerach,
z tego samego katalogu, zostan� za�adowane automatycznie. Je�eli wybierzesz kolekcj�
i warstw�, kt�ra posiada jakie� obrazy, to zostan� one automatycznie usuni�te z tej warstwy,
by mo�na by�o r�wnie� usun�� palet� kolor�w.
Wa�na jest kolejno�� bitmap w tym katalogu. Wpierw, musz� wyst�pi� wszystkie kierunki
pierwszego obrazu, nast�pnie wszystkie kierunki drugiego obrazu itd.